import { useState, useEffect } from "react";
import { Button, Input, Accordion, AccordionSummary, AccordionContent, Form, formSchemas, useToast, Modal, Breadcrumbs, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "./design-system/components";
import { colors, accessibilityLevels, radii, spacing, typography, icons } from "./design-system/tokens";
import { primitive } from "./design-system/tokens/colors";
import { breakpointValues } from "./design-system/tokens/breakpoints";
import { TableOfContents } from "./components/TableOfContents";
import { HamburgerButton } from "./components/HamburgerButton";
import { MobileDrawer } from "./components/MobileDrawer";
import { SectionHeading } from "./components/SectionHeading";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./design-system/theme";
import { z } from "zod";
import "./App.css";

function App() {
  const { mode, toggleTheme, colors: themeColors } = useTheme();
  const { success, error, warning, info } = useToast();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpointValues.md);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpointValues.md);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Input用のstate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCount((count) => count + 1);
      setIsLoading(false);
    }, 1000);
  };

  // Input用のバリデーション
  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "" };

    if (!formData.name) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.email) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }

    if (!formData.password) {
      newErrors.password = "パスワードを入力してください";
    } else if (formData.password.length < 8) {
      newErrors.password = "パスワードは8文字以上で入力してください";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("フォーム送信成功！");
    }
  };

  const tocItems = [
    { id: "button-component", title: "Buttonコンポーネント" },
    { id: "input-component", title: "Inputコンポーネント" },
    { id: "form-component", title: "Formコンポーネント" },
    { id: "toast-component", title: "Toastコンポーネント" },
    { id: "modal-component", title: "Modalコンポーネント" },
    { id: "accordion-component", title: "Accordionコンポーネント" },
    { id: "breadcrumbs-component", title: "Breadcrumbsコンポーネント" },
    { id: "aria-guide", title: "ARIAラベルとrole属性" },
    { id: "accessibility-features", title: "アクセシビリティ機能" },
    { id: "wcag-levels", title: "WCAGレベルとコントラスト比" },
    { id: "design-tokens", title: "デザイントークンシステム" },
  ];

  const activeId = useActiveSection(tocItems);

  return (
    <div style={{
      backgroundColor: themeColors.background.default,
      color: themeColors.text.primary,
      minHeight: '100vh',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      padding: isMobile ? spacing.scale[3] : spacing.scale[8],
      maxWidth: "1400px",
      margin: "0 auto"
    }}>
      {isMobile && (
        <>
          <HamburgerButton isOpen={isDrawerOpen} onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
          <MobileDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            items={tocItems}
            activeId={activeId}
          />
        </>
      )}

      <header style={{ marginBottom: spacing.scale[8] }}>
        <Breadcrumbs style={{ marginBottom: spacing.scale[4] }}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/design-system">デザインシステム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent>コンポーネント一覧</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: spacing.scale[4] }}>
          <div>
            <h1 style={{
              marginBottom: spacing.scale[2],
              fontSize: isMobile ? "1.75rem" : "2.5rem",
              color: themeColors.text.primary,
              fontWeight: typography.fontWeight.bold,
              display: 'flex',
              alignItems: 'center',
              gap: spacing.scale[2]
            }}>
              <icons.philosophy.kind size={isMobile ? 28 : 40} color={primitive.pink?.[400] || primitive.blue[400]} strokeWidth={1.5} />
              優しい体験のためのデザインシステム
            </h1>
            <p style={{ color: themeColors.text.secondary, fontSize: typography.fontSize.lg, lineHeight: typography.lineHeight.normal }}>
              すべてのユーザーに寄り添う、アクセシブルで心地よいUIコンポーネント集
            </p>
          </div>
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="sm"
            aria-label={mode === 'light' ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
          >
            {mode === 'light' ? (
              <icons.concept.theme.dark size={20} strokeWidth={2} />
            ) : (
              <icons.concept.theme.light size={20} strokeWidth={2} />
            )}
          </Button>
        </div>

        <div style={{
          padding: spacing.scale[6],
          backgroundColor: primitive.blue[50],
          borderRadius: radii.borderRadius.xl,
          border: `2px solid ${primitive.blue[200]}`,
        }}>
          <h2 style={{
            marginTop: 0,
            marginBottom: spacing.scale[3],
            color: primitive.blue[900],
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.semibold,
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.philosophy.overview size={24} color={primitive.blue[600]} strokeWidth={2} />
            デザイン哲学：優しさの3原則
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: spacing.scale[4],
            marginTop: spacing.scale[4],
          }}>
            <div style={{
              padding: spacing.scale[4],
              backgroundColor: primitive.white,
              borderRadius: radii.borderRadius.lg,
              border: `1px solid ${primitive.blue[200]}`,
            }}>
              <icons.philosophy.inclusive size={32} color={primitive.blue[500]} strokeWidth={1.5} style={{ marginBottom: spacing.scale[2] }} />
              <h3 style={{
                marginTop: 0,
                marginBottom: spacing.scale[2],
                color: primitive.blue[900],
                fontSize: typography.fontSize.base,
                fontWeight: typography.fontWeight.semibold,
              }}>
                誰一人として置き去りにしない
              </h3>
              <p style={{
                margin: 0,
                color: primitive.gray[700],
                fontSize: typography.fontSize.sm,
                lineHeight: typography.lineHeight.relaxed,
              }}>
                視覚・聴覚・運動機能に関わらず、すべての人が等しく情報にアクセスできる設計
              </p>
            </div>

            <div style={{
              padding: spacing.scale[4],
              backgroundColor: primitive.white,
              borderRadius: radii.borderRadius.lg,
              border: `1px solid ${primitive.blue[200]}`,
            }}>
              <icons.philosophy.pleasant size={32} color={primitive.blue[500]} strokeWidth={1.5} style={{ marginBottom: spacing.scale[2] }} />
              <h3 style={{
                marginTop: 0,
                marginBottom: spacing.scale[2],
                color: primitive.blue[900],
                fontSize: typography.fontSize.base,
                fontWeight: typography.fontWeight.semibold,
              }}>
                心地よさを感じる体験
              </h3>
              <p style={{
                margin: 0,
                color: primitive.gray[700],
                fontSize: typography.fontSize.sm,
                lineHeight: typography.lineHeight.relaxed,
              }}>
                柔らかな色彩、滑らかな動き、適切な余白で、ストレスのない使い心地を実現
              </p>
            </div>

            <div style={{
              padding: spacing.scale[4],
              backgroundColor: primitive.white,
              borderRadius: radii.borderRadius.lg,
              border: `1px solid ${primitive.blue[200]}`,
            }}>
              <icons.philosophy.scalable size={32} color={primitive.blue[500]} strokeWidth={1.5} style={{ marginBottom: spacing.scale[2] }} />
              <h3 style={{
                marginTop: 0,
                marginBottom: spacing.scale[2],
                color: primitive.blue[900],
                fontSize: typography.fontSize.base,
                fontWeight: typography.fontWeight.semibold,
              }}>
                成長し続ける仕組み
              </h3>
              <p style={{
                margin: 0,
                color: primitive.gray[700],
                fontSize: typography.fontSize.sm,
                lineHeight: typography.lineHeight.relaxed,
              }}>
                スケーラブルなトークンシステムで、プロジェクトとともに進化するデザイン
              </p>
            </div>
          </div>

          <div style={{
            marginTop: spacing.scale[4],
            padding: spacing.scale[3],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            fontSize: typography.fontSize.sm,
            color: primitive.blue[800],
          }}>
            <strong>📚 詳しくは：</strong>
            {' '}
            <a
              href="https://github.com/andsaki/accessibility-learning/blob/master/DESIGN_PHILOSOPHY.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: primitive.blue[700], textDecoration: 'underline' }}
            >
              DESIGN_PHILOSOPHY.md
            </a>
            {' '}をご覧ください
          </div>
        </div>
      </header>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? spacing.scale[4] : spacing.scale[8],
        marginTop: spacing.scale[8]
      }}>
        {!isMobile && (
          <aside style={{
            width: "280px",
            flexShrink: 0
          }}>
            <TableOfContents items={tocItems} />
          </aside>
        )}

        <main style={{ flex: 1, minWidth: 0 }}>
          <section
            id="button-component"
            style={{
              marginBottom: spacing.scale[12],
              padding: spacing.scale[6],
              backgroundColor: colors.background.default,
              borderRadius: radii.borderRadius.lg,
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.component.button size={28} color={primitive.blue[600]} strokeWidth={2} />
            Button コンポーネント
          </h2>
          <p style={{ color: primitive.gray[700] }}>WCAG準拠のアクセシブルなボタンコンポーネントです。</p>

          <div
            style={{
              display: "flex",
              gap: spacing.scale[4],
              flexWrap: "wrap",
              marginTop: spacing.scale[4],
            }}
          >
            <Button
              variant="primary"
              onClick={handleClick}
              isLoading={isLoading}
            >
              カウント: {count}
            </Button>

            <Button
              variant="secondary"
              onClick={() => alert("クリックされました！")}
            >
              セカンダリ
            </Button>

            <Button variant="outline" onClick={() => alert("アウトライン")}>
              アウトライン
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              gap: spacing.scale[4],
              flexWrap: "wrap",
              marginTop: spacing.scale[4],
            }}
          >
            <Button size="sm" variant="primary">
              小サイズ
            </Button>
            <Button size="md" variant="primary">
              中サイズ
            </Button>
            <Button size="lg" variant="primary">
              大サイズ
            </Button>
          </div>

          <div style={{ display: "flex", gap: spacing.scale[4], flexWrap: "wrap", marginTop: spacing.scale[4] }}>
            <Button disabled>無効化</Button>
            <Button isLoading>読み込み中</Button>
            <Button icon="🚀">アイコン付き</Button>
          </div>
        </section>

        <section
          id="input-component"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.component.input size={28} color={primitive.blue[600]} strokeWidth={2} />
            Input コンポーネント
          </h2>
          <p style={{ color: primitive.gray[700] }}>
            ラベル、エラー表示、ヘルプテキストを備えたアクセシブルな入力フィールドです。
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: spacing.scale[6] }}>
            <Input
              label="お名前"
              placeholder="山田太郎"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              error={errors.name}
              required
            />

            <Input
              label="メールアドレス"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
              helperText="ログイン時に使用します"
              required
            />

            <Input
              label="パスワード"
              type="password"
              placeholder="8文字以上で入力"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={errors.password}
              helperText="8文字以上の英数字を入力してください"
              required
            />

            <div style={{ display: "flex", gap: spacing.scale[4], marginTop: spacing.scale[4] }}>
              <Button type="submit" variant="primary">
                送信
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setFormData({ name: "", email: "", password: "" });
                  setErrors({ name: "", email: "", password: "" });
                }}
              >
                クリア
              </Button>
            </div>
          </form>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>サイズバリエーション</SectionHeading>
            <Input label="小サイズ" size="sm" placeholder="小さい入力欄" />
            <Input label="中サイズ" size="md" placeholder="標準の入力欄" />
            <Input label="大サイズ" size="lg" placeholder="大きい入力欄" />
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>無効化状態</SectionHeading>
            <Input
              label="無効な入力欄"
              value="編集できません"
              disabled
              helperText="この項目は編集できません"
            />
          </div>
        </section>

        <section
          id="form-component"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.component.form size={28} color={primitive.blue[600]} strokeWidth={2} />
            Form コンポーネント
          </h2>
          <p style={{ color: primitive.gray[700] }}>
            react-hook-formとZodを統合したアクセシブルなフォームコンポーネントです。
            バリデーション、エラー表示、型安全性が統合されています。
          </p>

          <div style={{ marginTop: spacing.scale[6] }}>
            <SectionHeading>基本的な使い方</SectionHeading>
            <Form
              schema={z.object({
                email: formSchemas.email,
                password: formSchemas.required('パスワード'),
              })}
              fields={[
                {
                  name: 'email',
                  label: 'メールアドレス',
                  type: 'email',
                  placeholder: 'example@example.com',
                  required: true,
                },
                {
                  name: 'password',
                  label: 'パスワード',
                  type: 'password',
                  placeholder: '••••••••',
                  required: true,
                },
              ]}
              onSubmit={(data) => {
                alert(`ログイン成功!\nEmail: ${data.email}`);
                console.log('Login data:', data);
              }}
              submitText="ログイン"
              submitVariant="primary"
              wcagLevel="AA"
            />
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>複雑なバリデーション</SectionHeading>
            <p style={{ color: primitive.gray[700], marginBottom: spacing.scale[4] }}>
              パスワード確認フィールドの一致検証など、複雑なバリデーションルールを簡単に実装できます。
            </p>
            <Form
              schema={z.object({
                username: formSchemas.minLength(3, 'ユーザー名'),
                email: formSchemas.email,
                password: formSchemas.password,
                confirmPassword: formSchemas.required('パスワード（確認）'),
              }).refine((data) => data.password === data.confirmPassword, {
                message: 'パスワードが一致しません',
                path: ['confirmPassword'],
              })}
              fields={[
                {
                  name: 'username',
                  label: 'ユーザー名',
                  placeholder: 'yamada_taro',
                  helperText: '3文字以上で入力してください',
                  required: true,
                },
                {
                  name: 'email',
                  label: 'メールアドレス',
                  type: 'email',
                  placeholder: 'example@example.com',
                  required: true,
                },
                {
                  name: 'password',
                  label: 'パスワード',
                  type: 'password',
                  helperText: '8文字以上、大文字・小文字・数字を含む',
                  required: true,
                },
                {
                  name: 'confirmPassword',
                  label: 'パスワード（確認）',
                  type: 'password',
                  required: true,
                },
              ]}
              onSubmit={(data) => {
                alert(`会員登録成功!\nユーザー名: ${data.username}\nEmail: ${data.email}`);
                console.log('Signup data:', data);
              }}
              submitText="会員登録"
              wcagLevel="AA"
            />
          </div>

          <div style={{
            marginTop: spacing.scale[8],
            padding: spacing.scale[4],
            backgroundColor: primitive.blue[50],
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{ color: primitive.blue[900], marginTop: 0 }}>
              💡 Formコンポーネントの特徴
            </h4>
            <ul style={{ color: primitive.blue[900], lineHeight: typography.lineHeight.relaxed }}>
              <li><strong>Zodスキーマ統合</strong>: 型安全なバリデーション</li>
              <li><strong>react-hook-form</strong>: 高パフォーマンスなフォーム管理</li>
              <li><strong>アクセシブルなエラー表示</strong>: aria-invalid, aria-describedby, role="alert"</li>
              <li><strong>WCAGレベル対応</strong>: A/AA/AAA のフォーカススタイル</li>
              <li><strong>ヘルパースキーマ</strong>: よく使うバリデーションを簡単に利用</li>
              <li><strong>再利用可能</strong>: fields配列でフォームを簡単に定義</li>
            </ul>
          </div>
        </section>

        <section
          id="accordion-component"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.component.accordion size={28} color={primitive.blue[600]} strokeWidth={2} />
            Accordion コンポーネント
          </h2>
          <p style={{ color: primitive.gray[700] }}>
            ネイティブの&lt;details&gt;/&lt;summary&gt;要素を使用したアクセシブルなアコーディオンです。
            キーボード操作とスクリーンリーダーに完全対応しています。
          </p>

          <div style={{ marginTop: spacing.scale[6] }}>
            <SectionHeading>基本的な使い方</SectionHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[4] }}>
              <Accordion>
                <AccordionSummary>アクセシビリティとは？</AccordionSummary>
                <AccordionContent>
                  <p style={{ marginBottom: spacing.scale[2] }}>
                    アクセシビリティ（Accessibility、a11y）とは、障害の有無に関わらず、すべての人がWebサイトやアプリケーションを利用できるようにすることです。
                  </p>
                  <p>
                    視覚障害、聴覚障害、運動障害、認知障害など、さまざまな障害を持つ人々が情報にアクセスできるようにする必要があります。
                  </p>
                </AccordionContent>
              </Accordion>

              <Accordion defaultOpen>
                <AccordionSummary>WCAGとは？</AccordionSummary>
                <AccordionContent>
                  <p style={{ marginBottom: spacing.scale[2] }}>
                    WCAG（Web Content Accessibility Guidelines）は、Webコンテンツをよりアクセシブルにするための国際的なガイドラインです。
                  </p>
                  <ul style={{ paddingLeft: spacing.scale[5] }}>
                    <li>レベルA: 最低限のアクセシビリティ</li>
                    <li>レベルAA: 推奨される標準（ほとんどのサイトで目指すべき）</li>
                    <li>レベルAAA: 最高レベルのアクセシビリティ</li>
                  </ul>
                </AccordionContent>
              </Accordion>

              <Accordion>
                <AccordionSummary>デザイントークンとは？</AccordionSummary>
                <AccordionContent>
                  <p style={{ marginBottom: spacing.scale[2] }}>
                    デザイントークンは、色、サイズ、間隔などのデザイン要素を変数として定義したものです。
                  </p>
                  <p>
                    一貫性のあるデザインシステムを構築し、保守性を高めるために使用されます。
                    このプロジェクトでは3層構造（Primitive → Semantic → Component）を採用しています。
                  </p>
                </AccordionContent>
              </Accordion>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>WCAGレベル別フォーカススタイル</SectionHeading>
            <p style={{ color: primitive.gray[700], marginBottom: spacing.scale[4] }}>
              <strong>Tabキー</strong>でアコーディオンにフォーカスを当てて、各レベルの違いを確認してください。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[4] }}>
              <Accordion wcagLevel="A">
                <AccordionSummary>Level A（最低限）</AccordionSummary>
                <AccordionContent>
                  薄い青色のアウトライン（2px）。プロトタイプやMVP向け。
                </AccordionContent>
              </Accordion>

              <Accordion wcagLevel="AA" defaultOpen>
                <AccordionSummary>Level AA（推奨）★</AccordionSummary>
                <AccordionContent>
                  薄い青背景＋濃い青アウトライン（3px）。ほとんどのWebサイトで推奨（デフォルト）。
                </AccordionContent>
              </Accordion>

              <Accordion wcagLevel="AAA">
                <AccordionSummary>Level AAA（最高）</AccordionSummary>
                <AccordionContent>
                  黄色背景＋黒アウトライン（4px）。公共機関、医療、金融など。
                </AccordionContent>
              </Accordion>
            </div>

            <p style={{
              marginTop: spacing.scale[4],
              fontSize: typography.fontSize.sm,
              color: primitive.gray[600]
            }}>
              💡 WCAGレベルとコントラスト比の詳細は<a href="#wcag-levels" style={{ color: colors.text.link }}>こちらのセクション</a>をご覧ください
            </p>
          </div>

          <div style={{
            marginTop: spacing.scale[8],
            padding: spacing.scale[4],
            backgroundColor: primitive.blue[50],
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{ color: primitive.blue[900], marginTop: 0 }}>
              💡 アコーディオンの特徴
            </h4>
            <ul style={{ color: primitive.blue[900], lineHeight: typography.lineHeight.relaxed }}>
              <li><strong>セマンティックHTML</strong>: ネイティブの&lt;details&gt;/&lt;summary&gt;要素を使用</li>
              <li><strong>キーボード操作</strong>: Tab、Enter、Spaceキーで完全に操作可能</li>
              <li><strong>スクリーンリーダー対応</strong>: 自動的に適切なARIA属性が付与される</li>
              <li><strong>フォーカス表示</strong>: キーボード操作時のみ視覚的に表示</li>
              <li><strong>スムーズアニメーション</strong>: アイコンの回転アニメーション</li>
              <li><strong>デザイントークン</strong>: すべてのスタイルはトークンから取得</li>
            </ul>
          </div>
        </section>

        <section
          id="toast-component"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.component.toast size={28} color={primitive.blue[600]} strokeWidth={2} />
            Toast コンポーネント
          </h2>
          <p style={{ lineHeight: typography.lineHeight.normal, color: primitive.gray[700] }}>
            トースト通知は、ユーザーの操作に対する一時的なフィードバックを提供します。
          </p>

          <div style={{
            marginTop: spacing.scale[6],
            display: 'flex',
            gap: spacing.scale[3],
            flexWrap: 'wrap',
          }}>
            <Button
              variant="primary"
              onClick={() => success('操作が完了しました', '成功')}
            >
              Success Toast
            </Button>

            <Button
              variant="primary"
              onClick={() => error('エラーが発生しました', 'エラー')}
            >
              Error Toast
            </Button>

            <Button
              variant="primary"
              onClick={() => warning('この操作は取り消せません', '警告')}
            >
              Warning Toast
            </Button>

            <Button
              variant="primary"
              onClick={() => info('新しいお知らせがあります', 'お知らせ')}
            >
              Info Toast
            </Button>
          </div>

          <div style={{
            marginTop: spacing.scale[8],
            padding: spacing.scale[4],
            backgroundColor: primitive.blue[50],
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{ color: primitive.blue[900], marginTop: 0 }}>
              💡 Toastの特徴
            </h4>
            <ul style={{ color: primitive.blue[900], lineHeight: typography.lineHeight.relaxed }}>
              <li><strong>4種類のタイプ</strong>: success、error、warning、info</li>
              <li><strong>自動消去</strong>: デフォルト5秒で自動的に閉じる</li>
              <li><strong>スライドアニメーション</strong>: 画面右上からスムーズに表示</li>
              <li><strong>アクセシブル</strong>: role="alert"とaria-live="polite"で支援技術に対応</li>
              <li><strong>複数表示対応</strong>: 複数のトーストを同時に表示可能</li>
              <li><strong>手動クローズ</strong>: ×ボタンでいつでも閉じられる</li>
            </ul>
          </div>
        </section>

        <section
          id="modal-component"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.component.modal size={28} color={primitive.blue[600]} strokeWidth={2} />
            Modal コンポーネント
          </h2>
          <p style={{ lineHeight: typography.lineHeight.normal, color: primitive.gray[700] }}>
            モーダルダイアログは、ユーザーの注意を特定のタスクに集中させるために使用します。
          </p>

          <div style={{
            marginTop: spacing.scale[6],
            display: 'flex',
            gap: spacing.scale[3],
            flexWrap: 'wrap',
          }}>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              モーダルを開く
            </Button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="モーダルの例"
            footer={
              <>
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  キャンセル
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    success('保存しました');
                    setIsModalOpen(false);
                  }}
                >
                  保存
                </Button>
              </>
            }
          >
            <p>これはモーダルダイアログの例です。</p>
            <p>
              <strong>試してみてください:</strong>
            </p>
            <ul style={{ lineHeight: typography.lineHeight.relaxed }}>
              <li>Tab キーでフォーカスを移動（モーダル内を循環）</li>
              <li>Esc キーでモーダルを閉じる</li>
              <li>背景をクリックしてモーダルを閉じる</li>
            </ul>
          </Modal>

          <div style={{
            marginTop: spacing.scale[8],
            padding: spacing.scale[4],
            backgroundColor: primitive.blue[50],
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{ color: primitive.blue[900], marginTop: 0 }}>
              💡 Modalの特徴
            </h4>
            <ul style={{ color: primitive.blue[900], lineHeight: typography.lineHeight.relaxed }}>
              <li><strong>role="dialog"</strong>: ダイアログであることを支援技術に伝える</li>
              <li><strong>aria-modal="true"</strong>: モーダルであることを明示</li>
              <li><strong>aria-labelledby</strong>: タイトルとの関連付け</li>
              <li><strong>フォーカストラップ</strong>: Tab キーでモーダル内を循環</li>
              <li><strong>Esc キーで閉じる</strong>: キーボード操作に対応</li>
              <li><strong>背景スクロール防止</strong>: モーダル表示中は背景をスクロールできない</li>
              <li><strong>フォーカス管理</strong>: 開いた時に最初の要素へ、閉じた時に元の場所へフォーカス</li>
            </ul>
          </div>
        </section>

        <section
          id="breadcrumbs-component"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.component.navigation size={28} color={primitive.blue[600]} strokeWidth={2} />
            Breadcrumbs コンポーネント
          </h2>
          <p style={{ color: primitive.gray[700] }}>
            パンくずリスト（Breadcrumbs）は、ユーザーが現在いる場所を示すナビゲーション要素です。
            Webサイトの階層構造を視覚的に表示し、ユーザーが簡単に上位階層へ戻ることができます。
          </p>

          <div style={{ marginTop: spacing.scale[6] }}>
            <SectionHeading>基本的な使い方</SectionHeading>
            <div style={{
              padding: spacing.scale[4],
              backgroundColor: primitive.gray[50],
              borderRadius: radii.borderRadius.base,
              border: `1px solid ${colors.border.default}`,
            }}>
              <Breadcrumbs>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/category">カテゴリ</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumbs>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>階層の深いナビゲーション</SectionHeading>
            <div style={{
              padding: spacing.scale[4],
              backgroundColor: primitive.gray[50],
              borderRadius: radii.borderRadius.base,
              border: `1px solid ${colors.border.default}`,
            }}>
              <Breadcrumbs>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products">商品一覧</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products/electronics">電化製品</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products/electronics/computers">コンピューター</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrent>ノートパソコン</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumbs>
            </div>
          </div>

          <div style={{
            marginTop: spacing.scale[8],
            padding: spacing.scale[4],
            backgroundColor: primitive.blue[50],
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{ color: primitive.blue[900], marginTop: 0 }}>
              💡 Breadcrumbsの特徴
            </h4>
            <ul style={{ color: primitive.blue[900], lineHeight: typography.lineHeight.relaxed }}>
              <li><strong>セマンティックHTML</strong>: &lt;nav aria-label="パンくずリスト"&gt;でアクセシブル</li>
              <li><strong>構造化マークアップ</strong>: &lt;ol&gt;と&lt;li&gt;でリスト構造を明示</li>
              <li><strong>aria-current="page"</strong>: 現在のページを支援技術に明示</li>
              <li><strong>視覚的セパレーター</strong>: SVGアイコンでリンク間を区切り</li>
              <li><strong>キーボード操作対応</strong>: Tabキーでフォーカス移動可能</li>
              <li><strong>フォーカススタイル</strong>: キーボード操作時にわかりやすいフォーカス表示</li>
              <li><strong>ホバースタイル</strong>: マウス操作時の視覚的フィードバック</li>
            </ul>
          </div>
        </section>

        <section
          id="aria-guide"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.purple[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.section.accessibility size={28} color={primitive.purple[600]} strokeWidth={2} />
            ARIAラベルとrole属性ガイド
          </h2>
          <p style={{ color: primitive.gray[700], marginBottom: spacing.scale[6] }}>
            ARIA（Accessible Rich Internet Applications）は、Webアプリケーションをスクリーンリーダーなどの支援技術に対してアクセシブルにするための仕様です。
            適切なARIA属性を使用することで、視覚障害者やキーボードユーザーに対して、より良いユーザー体験を提供できます。
          </p>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>主要なARIA属性</SectionHeading>

            <div style={{
              display: 'grid',
              gap: spacing.scale[4],
              marginBottom: spacing.scale[8]
            }}>
              {/* aria-label */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.purple[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.purple[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.purple[900] }}>
                  <code style={{ backgroundColor: primitive.purple[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>aria-label</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  要素に対して、スクリーンリーダーが読み上げるラベルを指定します。視覚的なテキストがない要素に使用します。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.purple[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<button aria-label="メニューを開く">
  <icons.menu />
</button>`}</code>
                  </pre>
                </div>
                <div style={{ marginTop: spacing.scale[3] }}>
                  <Button
                    aria-label="設定を開く"
                    icon={<icons.component.button size={16} />}
                    variant="outline"
                    size="sm"
                  >
                  </Button>
                  <span style={{ marginLeft: spacing.scale[2], fontSize: typography.fontSize.sm, color: primitive.gray[600] }}>
                    ← アイコンのみのボタンに aria-label を使用
                  </span>
                </div>
              </div>

              {/* aria-labelledby */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.blue[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.blue[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                  <code style={{ backgroundColor: primitive.blue[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>aria-labelledby</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  他の要素のIDを参照して、その要素のテキストをラベルとして使用します。複数のIDをスペース区切りで指定できます。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.blue[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<h2 id="section-title">ユーザー設定</h2>
<section aria-labelledby="section-title">
  {/* セクションの内容 */}
</section>`}</code>
                  </pre>
                </div>
              </div>

              {/* aria-describedby */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.green[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.green[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.green[900] }}>
                  <code style={{ backgroundColor: primitive.green[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>aria-describedby</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  要素の説明や補足情報を提供する他の要素のIDを参照します。エラーメッセージやヒントテキストに使用します。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.green[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<input
  type="password"
  aria-describedby="password-hint"
/>
<span id="password-hint">
  8文字以上、英数字を含む
</span>`}</code>
                  </pre>
                </div>
                <div style={{ marginTop: spacing.scale[3] }}>
                  <Input
                    type="password"
                    placeholder="パスワード"
                    aria-describedby="demo-password-hint"
                  />
                  <span id="demo-password-hint" style={{
                    display: 'block',
                    marginTop: spacing.scale[1],
                    fontSize: typography.fontSize.sm,
                    color: primitive.gray[600]
                  }}>
                    8文字以上、英数字を含む
                  </span>
                </div>
              </div>

              {/* aria-current */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.orange[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.orange[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.orange[900] }}>
                  <code style={{ backgroundColor: primitive.orange[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>aria-current</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  現在の項目を示します。ナビゲーションやパンくずリストで使用します。値: page, step, location, date, time, true, false
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.orange[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<BreadcrumbItem
  aria-current="page"
  isCurrent
>
  現在のページ
</BreadcrumbItem>`}</code>
                  </pre>
                </div>
                <div style={{ marginTop: spacing.scale[3] }}>
                  <Breadcrumbs>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/products">商品</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumbs>
                </div>
              </div>

              {/* aria-expanded */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.pink[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.pink[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.pink[900] }}>
                  <code style={{ backgroundColor: primitive.pink[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>aria-expanded</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  要素が展開されているか折りたたまれているかを示します。アコーディオンやドロップダウンメニューで使用します。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.pink[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<AccordionSummary
  aria-expanded={isOpen}
>
  セクションタイトル
</AccordionSummary>`}</code>
                  </pre>
                </div>
                <div style={{ marginTop: spacing.scale[3] }}>
                  <Accordion>
                    <AccordionSummary>
                      クリックして展開/折りたたみ（aria-expandedが自動で切り替わります）
                    </AccordionSummary>
                    <AccordionContent>
                      このコンテンツは、AccordionSummaryの aria-expanded 属性によって、スクリーンリーダーに展開状態が伝えられます。
                    </AccordionContent>
                  </Accordion>
                </div>
              </div>

              {/* aria-hidden */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.gray[100],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.gray[300]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.gray[900] }}>
                  <code style={{ backgroundColor: primitive.gray[200], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>aria-hidden</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  要素をスクリーンリーダーから隠します。装飾的なアイコンやSVGに使用します。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.gray[300]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<svg aria-hidden="true">
  <path d="..." />
</svg>
<span>アイコンの意味を説明するテキスト</span>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>主要なrole属性</SectionHeading>

            <div style={{
              display: 'grid',
              gap: spacing.scale[4],
            }}>
              {/* role="button" */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.blue[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.blue[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                  <code style={{ backgroundColor: primitive.blue[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>role="button"</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  div や span などの要素をボタンとして扱います。可能な限り &lt;button&gt; 要素を使用してください。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.blue[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<!-- ❌ 避けるべき -->
<div role="button" tabIndex={0}>
  クリック
</div>

<!-- ✅ 推奨 -->
<button>クリック</button>`}</code>
                  </pre>
                </div>
              </div>

              {/* role="dialog" */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.purple[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.purple[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.purple[900] }}>
                  <code style={{ backgroundColor: primitive.purple[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>role="dialog"</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  モーダルダイアログを示します。aria-labelledby または aria-label と組み合わせて使用します。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.purple[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<div
  role="dialog"
  aria-labelledby="dialog-title"
  aria-modal="true"
>
  <h2 id="dialog-title">確認</h2>
  {/* ダイアログの内容 */}
</div>`}</code>
                  </pre>
                </div>
              </div>

              {/* role="navigation" */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.green[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.green[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.green[900] }}>
                  <code style={{ backgroundColor: primitive.green[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>role="navigation"</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  ナビゲーションリンクのグループを示します。&lt;nav&gt; 要素を使用すれば、暗黙的にこのroleが付与されます。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.green[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<!-- ✅ 推奨: セマンティックHTML -->
<nav aria-label="メインナビゲーション">
  <ul>
    <li><a href="/">ホーム</a></li>
  </ul>
</nav>

<!-- または -->
<div role="navigation" aria-label="...">
  {/* ナビゲーション */}
</div>`}</code>
                  </pre>
                </div>
              </div>

              {/* role="alert" */}
              <div style={{
                padding: spacing.scale[4],
                backgroundColor: primitive.red[50],
                borderRadius: radii.borderRadius.md,
                border: `1px solid ${primitive.red[200]}`,
              }}>
                <h4 style={{ marginTop: 0, color: primitive.red[900] }}>
                  <code style={{ backgroundColor: primitive.red[100], padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>role="alert"</code>
                </h4>
                <p style={{ color: primitive.gray[700] }}>
                  重要なメッセージを即座にスクリーンリーダーに通知します。エラーメッセージや警告に使用します。
                </p>
                <div style={{
                  backgroundColor: primitive.white,
                  padding: spacing.scale[3],
                  borderRadius: radii.borderRadius.base,
                  marginTop: spacing.scale[2],
                  border: `1px solid ${primitive.red[200]}`,
                }}>
                  <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto' }}>
                    <code>{`<div role="alert">
  エラー: フォームの送信に失敗しました
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: spacing.scale[8],
            padding: spacing.scale[4],
            backgroundColor: primitive.yellow,
            borderRadius: radii.borderRadius.md,
            border: `2px solid ${primitive.black}`,
          }}>
            <h4 style={{ color: primitive.black, marginTop: 0 }}>
              💡 ARIAの第一原則
            </h4>
            <ul style={{ color: primitive.black, lineHeight: typography.lineHeight.relaxed }}>
              <li><strong>セマンティックHTMLを優先する</strong>: 可能な限り、適切なHTML要素を使用してください</li>
              <li><strong>ARIAは最後の手段</strong>: ネイティブHTML要素で実現できない場合のみARIAを使用</li>
              <li><strong>不要なARIAは追加しない</strong>: &lt;button&gt; に role="button" は不要です</li>
              <li><strong>テストを忘れずに</strong>: スクリーンリーダーで実際に確認してください</li>
            </ul>
          </div>

          <div style={{
            marginTop: spacing.scale[6],
            padding: spacing.scale[4],
            backgroundColor: primitive.blue[50],
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{ color: primitive.blue[900], marginTop: 0 }}>
              📚 このデザインシステムで使用しているARIA属性
            </h4>
            <ul style={{ color: primitive.blue[900], lineHeight: typography.lineHeight.relaxed }}>
              <li><strong>Button</strong>: aria-busy (ローディング状態)</li>
              <li><strong>Input</strong>: aria-invalid, aria-describedby (エラー表示)</li>
              <li><strong>Modal</strong>: role="dialog", aria-modal, aria-labelledby</li>
              <li><strong>Accordion</strong>: aria-expanded, aria-controls</li>
              <li><strong>Breadcrumbs</strong>: aria-label, aria-current</li>
              <li><strong>Toast</strong>: role="alert", role="status"</li>
            </ul>
          </div>
        </section>

        <section
          id="accessibility-features"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: primitive.blue[50],
            border: `2px solid ${primitive.blue[500]}`,
            borderRadius: radii.borderRadius.lg,
          }}
        >
          <h3 style={{ color: primitive.blue[900], marginTop: 0 }}>
            アクセシビリティ機能
          </h3>
          <ul style={{ lineHeight: typography.lineHeight.relaxed, color: primitive.blue[900] }}>
            <li>✅ キーボード操作対応（Tab、Enter、Space）</li>
            <li>✅ フォーカスインジケーター表示</li>
            <li>✅ スクリーンリーダー対応（ARIA属性）</li>
            <li>✅ ラベルとフィールドの適切な関連付け</li>
            <li>✅ エラーの即座な通知（role="alert"）</li>
            <li>✅ 必須項目の明示</li>
            <li>✅ WCAG AA準拠のカラーコントラスト</li>
            <li>✅ 適切なセマンティックHTML</li>
          </ul>
        </section>

        <section
          id="wcag-levels"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.concept.wcag size={28} color={primitive.blue[600]} strokeWidth={2} />
            WCAGレベルとコントラスト比について
          </h2>

          <div style={{ marginTop: spacing.scale[6] }}>
            <SectionHeading>コントラスト比とは？</SectionHeading>
            <p style={{ lineHeight: "1.8", color: primitive.gray[900] }}>
              コントラスト比は、テキストと背景の明るさの差を数値で表したものです。
              数値が大きいほど見やすく、小さいほど見にくくなります。
              <br />
              例: 黒文字 ({primitive.black}) と白背景 ({primitive.white})
              のコントラスト比は <strong>21:1</strong>（最大値）
            </p>

            <div
              style={{
                marginTop: spacing.scale[4],
                padding: spacing.scale[4],
                backgroundColor: primitive.blue[50],
                borderRadius: radii.borderRadius.base,
                border: `1px solid ${primitive.blue[200]}`,
              }}
            >
              <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                📐 コントラスト比の計算方法
              </h4>
              <p style={{ margin: "0.5rem 0", lineHeight: "1.8", color: primitive.gray[900] }}>
                コントラスト比 = (明るい方の輝度 + 0.05) ÷ (暗い方の輝度 + 0.05)
              </p>
              <p style={{ margin: "0.5rem 0", fontSize: typography.fontSize.sm, color: primitive.gray[700] }}>
                ※ 輝度は0.0（完全な黒）〜 1.0（完全な白）の値
              </p>
              <div style={{ marginTop: spacing.scale[3] }}>
                <p style={{ margin: "0.25rem 0", fontSize: typography.fontSize.sm, color: primitive.gray[900] }}>
                  <strong>例1: 白背景 + グレー文字 = 3:1</strong>
                  <br />
                  <span style={{ fontSize: typography.fontSize.xs, color: primitive.gray[700] }}>
                    白(輝度1.0) ÷ グレー(輝度0.4) = (1.0+0.05)÷(0.4+0.05) ≈ 3:1
                  </span>
                </p>
                <p style={{ margin: "0.25rem 0", fontSize: typography.fontSize.sm, color: primitive.gray[900] }}>
                  <strong>例2: 白背景 + 黒文字 = 21:1</strong>
                  <br />
                  <span style={{ fontSize: typography.fontSize.xs, color: primitive.gray[700] }}>
                    白(輝度1.0) ÷ 黒(輝度0.0) = (1.0+0.05)÷(0.0+0.05) = 21:1（最大）
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>WCAGレベルとコントラスト比の基準</SectionHeading>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: spacing.scale[6],
                marginTop: spacing.scale[4],
              }}
            >
              <div
                style={{
                  padding: spacing.scale[4],
                  backgroundColor: primitive.gray[100],
                  borderRadius: radii.borderRadius.base,
                  border: `2px solid ${colors.border.default}`,
                }}
              >
                <h4 style={{ marginTop: 0, color: primitive.gray[800] }}>
                  レベルA（最低限）
                </h4>
                <ul
                  style={{
                    margin: "0.5rem 0",
                    paddingLeft: spacing.scale[6],
                    lineHeight: "1.8",
                    color: primitive.gray[900],
                  }}
                >
                  <li>
                    <strong>大きいテキスト:</strong> 3:1 以上
                  </li>
                  <li>18px以上の通常テキスト、または14px以上の太字</li>
                  <li>
                    <div style={{
                      fontSize: typography.fontSize.lg,
                      color: accessibilityLevels.contrastDemos.ratio3to1.text,
                      backgroundColor: accessibilityLevels.contrastDemos.ratio3to1.background,
                      padding: spacing.scale[2],
                      marginTop: spacing.scale[2],
                      borderRadius: radii.borderRadius.base,
                      border: `1px solid ${colors.border.default}`
                    }}>
                      これが{accessibilityLevels.contrastDemos.ratio3to1.actualRatio}のコントラスト（18px）- {accessibilityLevels.contrastDemos.ratio3to1.label}
                    </div>
                  </li>
                  <li>⚠️ 通常サイズのテキストには基準なし</li>
                  <li style={{ color: primitive.red[700], fontWeight: 600 }}>
                    ❌ 実用的ではありません。AAレベル以上を推奨
                  </li>
                </ul>
              </div>

              <div
                style={{
                  padding: spacing.scale[4],
                  backgroundColor: primitive.blue[50],
                  borderRadius: radii.borderRadius.base,
                  border: `2px solid ${primitive.blue[500]}`,
                }}
              >
                <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                  レベルAA（推奨）★
                </h4>
                <ul
                  style={{
                    margin: "0.5rem 0",
                    paddingLeft: spacing.scale[6],
                    lineHeight: "1.8",
                    color: primitive.gray[900],
                  }}
                >
                  <li>
                    <strong>通常テキスト:</strong> 4.5:1 以上
                  </li>
                  <li>
                    <div style={{
                      fontSize: typography.fontSize.base,
                      color: accessibilityLevels.contrastDemos.ratio4_5to1.text,
                      backgroundColor: accessibilityLevels.contrastDemos.ratio4_5to1.background,
                      padding: spacing.scale[2],
                      marginTop: spacing.scale[2],
                      borderRadius: radii.borderRadius.base,
                      border: `1px solid ${colors.border.default}`
                    }}>
                      これが{accessibilityLevels.contrastDemos.ratio4_5to1.actualRatio}のコントラスト（16px）- {accessibilityLevels.contrastDemos.ratio4_5to1.label}
                    </div>
                  </li>
                  <li>
                    <strong>大きいテキスト:</strong> 3:1 以上
                  </li>
                  <li>✅ ほとんどのWebサイトで推奨される標準</li>
                </ul>
              </div>

              <div
                style={{
                  padding: spacing.scale[4],
                  backgroundColor: primitive.orange[50],
                  borderRadius: radii.borderRadius.base,
                  border: `2px solid ${primitive.orange[600]}`,
                }}
              >
                <h4 style={{ marginTop: 0, color: primitive.orange[900] }}>
                  レベルAAA（最高）
                </h4>
                <ul
                  style={{
                    margin: "0.5rem 0",
                    paddingLeft: spacing.scale[6],
                    lineHeight: "1.8",
                    color: primitive.gray[900],
                  }}
                >
                  <li>
                    <strong>通常テキスト:</strong> 7:1 以上
                  </li>
                  <li>
                    <div style={{
                      fontSize: typography.fontSize.base,
                      color: accessibilityLevels.contrastDemos.ratio7to1.text,
                      backgroundColor: accessibilityLevels.contrastDemos.ratio7to1.background,
                      padding: spacing.scale[2],
                      marginTop: spacing.scale[2],
                      borderRadius: radii.borderRadius.base,
                      border: `1px solid ${colors.border.default}`
                    }}>
                      これが{accessibilityLevels.contrastDemos.ratio7to1.actualRatio}のコントラスト（16px）- {accessibilityLevels.contrastDemos.ratio7to1.label} ✓✓
                    </div>
                  </li>
                  <li>
                    <strong>大きいテキスト:</strong> 4.5:1 以上
                  </li>
                  <li>✅ 公共機関・医療・金融などで推奨</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading>実際の例</SectionHeading>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: spacing.scale[4],
                marginTop: spacing.scale[4],
              }}
            >
              <div
                style={{
                  padding: spacing.scale[4],
                  backgroundColor: accessibilityLevels.button.AA.primary.bg,
                  color: accessibilityLevels.button.AA.primary.text,
                  borderRadius: radii.borderRadius.base,
                }}
              >
                <strong>コントラスト比 4.5:1</strong> - レベルAA Primary ボタン
                <br />
                <span style={{ fontSize: typography.fontSize.sm }}>
                  背景: {accessibilityLevels.button.AA.primary.bg} / 文字:{" "}
                  {accessibilityLevels.button.AA.primary.text}
                </span>
              </div>

              <div
                style={{
                  padding: spacing.scale[4],
                  backgroundColor: accessibilityLevels.button.AAA.primary.bg,
                  color: accessibilityLevels.button.AAA.primary.text,
                  borderRadius: radii.borderRadius.base,
                }}
              >
                <strong>コントラスト比 4.59:1</strong> - レベルAAA Primary
                ボタン
                <br />
                <span style={{ fontSize: typography.fontSize.sm }}>
                  背景: {accessibilityLevels.button.AAA.primary.bg} / 文字:{" "}
                  {accessibilityLevels.button.AAA.primary.text}
                </span>
              </div>

              <div
                style={{
                  padding: spacing.scale[4],
                  backgroundColor: accessibilityLevels.focus.AAA.background,
                  color: accessibilityLevels.focus.AAA.text,
                  borderRadius: radii.borderRadius.base,
                  border: `1px solid ${colors.border.default}`,
                }}
              >
                <strong>コントラスト比 19.56:1</strong> - レベルAAA フォーカス
                <br />
                <span style={{ fontSize: typography.fontSize.sm }}>
                  背景: {accessibilityLevels.focus.AAA.background} / 文字:{" "}
                  {accessibilityLevels.focus.AAA.text}
                </span>
              </div>

              <div
                style={{
                  padding: spacing.scale[4],
                  backgroundColor: primitive.gray[900],
                  color: primitive.white,
                  borderRadius: radii.borderRadius.base,
                }}
              >
                <strong>コントラスト比 16.1:1</strong> - 濃いグレー背景と白文字
                <br />
                <span style={{ fontSize: typography.fontSize.sm }}>
                  背景: {primitive.gray[900]} / 文字: {primitive.white}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: spacing.scale[8],
              padding: spacing.scale[4],
              backgroundColor: colors.background.default,
              borderRadius: radii.borderRadius.base,
              border: `2px solid ${primitive.green[500]}`,
            }}
          >
            <h4 style={{ marginTop: 0, color: primitive.green[800] }}>
              💡 コントラスト比の確認方法
            </h4>
            <p style={{ margin: "0.5rem 0", lineHeight: "1.8", color: primitive.gray[900] }}>
              オンラインツールを使って簡単に確認できます：
            </p>
            <ul style={{ margin: "0.5rem 0", paddingLeft: spacing.scale[6], color: primitive.gray[900] }}>
              <li>
                <a
                  href="https://webaim.org/resources/contrastchecker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: colors.text.link }}
                >
                  WebAIM Contrast Checker
                </a>
              </li>
              <li>
                <a
                  href="https://contrast-ratio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: colors.text.link }}
                >
                  Contrast Ratio
                </a>
              </li>
              <li>Chrome DevTools の Lighthouse（アクセシビリティ監査）</li>
            </ul>
          </div>
        </section>

        <section
          id="design-tokens"
          style={{
            marginBottom: spacing.scale[12],
            padding: spacing.scale[6],
            backgroundColor: colors.background.default,
            borderRadius: radii.borderRadius.lg,
            border: `1px solid ${colors.border.default}`,
          }}
        >
          <h2 style={{
            marginTop: 0,
            color: primitive.gray[900],
            fontSize: typography.fontSize['2xl'],
            fontWeight: 'bold',
            borderBottom: `3px solid ${primitive.blue[500]}`,
            paddingBottom: spacing.scale[2],
            marginBottom: spacing.scale[4],
            display: 'flex',
            alignItems: 'center',
            gap: spacing.scale[2]
          }}>
            <icons.concept.designTokens size={28} color={primitive.blue[600]} strokeWidth={2} />
            デザイントークンシステム
          </h2>
          <p style={{ lineHeight: typography.lineHeight.normal, color: primitive.gray[900] }}>
            このプロジェクトでは、一貫性のあるデザインを実現するために
            <strong>デザイントークン</strong>を使用しています。
          </p>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading emoji="📏">スペーシング（spacing.ts）</SectionHeading>
            <div
              style={{
                marginTop: spacing.scale[4],
                padding: spacing.scale[4],
                backgroundColor: colors.background.default,
                borderRadius: radii.borderRadius.base,
                border: `1px solid ${colors.border.default}`,
              }}
            >
              <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                なぜ8pxグリッド？
              </h4>
              <ul style={{ margin: `${spacing.scale[2]} 0`, paddingLeft: spacing.scale[6], lineHeight: typography.lineHeight.relaxed, color: primitive.gray[900] }}>
                <li><strong>倍数で計算しやすい</strong>: 8の倍数は2,4でも割り切れる</li>
                <li><strong>デザイナーとの共通言語</strong>: Figma、Sketchなどでも標準</li>
                <li><strong>レティナディスプレイ対応</strong>: 8px = 4dp（デザインポイント）</li>
                <li><strong>業界標準</strong>: Material Design、Ant Designなど主要システムが採用</li>
              </ul>

              <h4 style={{ marginTop: spacing.scale[4], color: primitive.blue[900] }}>
                使い方の原則
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[2], marginTop: spacing.scale[2] }}>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base }}>
                  <strong>小さい余白（4px, 8px）</strong>: 関連する要素の間
                  <div style={{ marginTop: spacing.scale[1], fontSize: typography.fontSize.sm, color: primitive.gray[700] }}>
                    例: spacing.scale[1] = 4px, spacing.scale[2] = 8px
                  </div>
                </div>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base }}>
                  <strong>中程度（16px, 24px）</strong>: セクション内の要素
                  <div style={{ marginTop: spacing.scale[1], fontSize: typography.fontSize.sm, color: primitive.gray[700] }}>
                    例: spacing.scale[4] = 16px, spacing.scale[6] = 24px
                  </div>
                </div>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base }}>
                  <strong>大きい余白（32px以上）</strong>: セクション間、ページ構造
                  <div style={{ marginTop: spacing.scale[1], fontSize: typography.fontSize.sm, color: primitive.gray[700] }}>
                    例: spacing.scale[8] = 32px, spacing.scale[12] = 48px
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading emoji="🎨">カラー（colors.ts）</SectionHeading>
            <div
              style={{
                marginTop: spacing.scale[4],
                padding: spacing.scale[4],
                backgroundColor: colors.background.default,
                borderRadius: radii.borderRadius.base,
                border: `1px solid ${colors.border.default}`,
              }}
            >
              <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                3層構造のカラーシステム
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[3], marginTop: spacing.scale[2] }}>
                <div>
                  <div style={{ padding: spacing.scale[2], backgroundColor: primitive.blue[50], borderRadius: radii.borderRadius.base, border: `2px solid ${primitive.blue[500]}` }}>
                    <strong style={{ color: primitive.blue[900] }}>1. プリミティブトークン（primitive）</strong>
                    <p style={{ margin: `${spacing.scale[1]} 0`, fontSize: typography.fontSize.sm, color: primitive.gray[700] }}>
                      基礎となるカラーパレット。グレースケール、ブルー、レッド、グリーンなど。
                      <br />
                      例: primitive.blue[500], primitive.gray[900]
                    </p>
                  </div>
                </div>
                <div>
                  <div style={{ padding: spacing.scale[2], backgroundColor: primitive.green[50], borderRadius: radii.borderRadius.base, border: `2px solid ${primitive.green[500]}` }}>
                    <strong style={{ color: primitive.green[900] }}>2. セマンティックトークン（colors）</strong>
                    <p style={{ margin: `${spacing.scale[1]} 0`, fontSize: typography.fontSize.sm, color: primitive.gray[700] }}>
                      意味を持った色の定義。text.primary、background.default、border.focusなど。
                      <br />
                      例: colors.text.primary, colors.background.subtle
                    </p>
                  </div>
                </div>
                <div>
                  <div style={{ padding: spacing.scale[2], backgroundColor: primitive.orange[50], borderRadius: radii.borderRadius.base, border: `2px solid ${primitive.orange[500]}` }}>
                    <strong style={{ color: primitive.orange[900] }}>3. コンポーネントトークン</strong>
                    <p style={{ margin: `${spacing.scale[1]} 0`, fontSize: typography.fontSize.sm, color: primitive.gray[700] }}>
                      特定のコンポーネント用の色。button.primary.bg、input.borderErrorなど。
                      <br />
                      例: colors.button.primary.bg, colors.input.borderError
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading emoji="🌍">トークンの3階層とは？</SectionHeading>
            <div
              style={{
                marginTop: spacing.scale[4],
                padding: spacing.scale[4],
                backgroundColor: primitive.blue[50],
                borderRadius: radii.borderRadius.base,
                border: `2px solid ${primitive.blue[500]}`,
              }}
            >
              <p style={{ margin: 0, lineHeight: typography.lineHeight.relaxed, color: primitive.gray[900] }}>
                デザイントークンは<strong>3つの階層</strong>で構成され、段階的に抽象化されています。<br />
                これにより、保守性が高く、変更に強いデザインシステムを実現できます。
              </p>

              <div
                style={{
                  marginTop: spacing.scale[6],
                  padding: spacing.scale[4],
                  backgroundColor: primitive.gray[50],
                  borderRadius: radii.borderRadius.base,
                  border: `1px solid ${primitive.gray[300]}`,
                }}
              >
                <h4 style={{ marginTop: 0, marginBottom: spacing.scale[3], color: primitive.gray[800], fontSize: typography.fontSize.lg }}>
                  🍱 料理に例えると...
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[2], fontSize: typography.fontSize.sm, lineHeight: typography.lineHeight.relaxed }}>
                  <div>
                    <strong style={{ color: primitive.gray[900] }}>1. Primitive（食材）</strong>
                    <span style={{ color: primitive.gray[700] }}> → 卵、砂糖、小麦粉など生の素材</span>
                  </div>
                  <div>
                    <strong style={{ color: primitive.blue[900] }}>2. Semantic（調味料・下ごしらえ）</strong>
                    <span style={{ color: primitive.gray[700] }}> → 甘いタレ、塩味の調味料など、汎用的な中間素材</span>
                  </div>
                  <div>
                    <strong style={{ color: primitive.gray[900] }}>3. Component（完成した料理）</strong>
                    <span style={{ color: primitive.gray[700] }}> → ハンバーグ、サラダなど、目的に合わせた最終形</span>
                  </div>
                </div>
              </div>

              <h4 style={{ marginTop: spacing.scale[6], color: primitive.blue[900] }}>
                具体的な階層の役割
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[3], marginTop: spacing.scale[2] }}>
                <div style={{ padding: spacing.scale[3], backgroundColor: primitive.white, borderRadius: radii.borderRadius.base, border: `1px solid ${primitive.gray[300]}` }}>
                  <div style={{ fontSize: typography.fontSize.sm, color: primitive.gray[600], marginBottom: spacing.scale[1] }}>
                    レイヤー 1
                  </div>
                  <strong style={{ color: primitive.gray[900], fontSize: typography.fontSize.base }}>Primitive tokens（プリミティブトークン）</strong>
                  <p style={{ margin: `${spacing.scale[2]} 0 ${spacing.scale[1]} 0`, fontSize: typography.fontSize.sm, color: primitive.gray[700], lineHeight: typography.lineHeight.relaxed }}>
                    色や数値などの<strong>生の値</strong>。意味を持たない基本パーツ。
                  </p>
                  <div style={{ padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.sm, fontSize: typography.fontSize.sm }}>
                    <code style={{ color: primitive.blue[700] }}>#3B82F6</code>
                    <span style={{ margin: '0 8px', color: primitive.gray[400] }}>|</span>
                    <code style={{ color: primitive.blue[700] }}>16px</code>
                    <span style={{ margin: '0 8px', color: primitive.gray[400] }}>|</span>
                    <code style={{ color: primitive.blue[700] }}>primitive.gray[900]</code>
                  </div>
                </div>

                <div style={{ padding: spacing.scale[3], backgroundColor: primitive.white, borderRadius: radii.borderRadius.base, border: `1px solid ${primitive.gray[300]}` }}>
                  <div style={{ fontSize: typography.fontSize.sm, color: primitive.gray[600], marginBottom: spacing.scale[1] }}>
                    レイヤー 2
                  </div>
                  <strong style={{ color: primitive.gray[900], fontSize: typography.fontSize.base }}>Semantic tokens（セマンティックトークン）</strong>
                  <p style={{ margin: `${spacing.scale[2]} 0 ${spacing.scale[1]} 0`, fontSize: typography.fontSize.sm, color: primitive.gray[700], lineHeight: typography.lineHeight.relaxed }}>
                    Primitiveに<strong>意味のある名前</strong>を付けたもの。「どこで使うか」が分かりやすい。<br />
                    アプリ全体で再利用できる共通部品。
                  </p>
                  <div style={{ padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.sm, fontSize: typography.fontSize.sm }}>
                    <div style={{ marginBottom: spacing.scale[1] }}>
                      <code style={{ color: primitive.blue[700] }}>colors.text.primary</code>
                      <span style={{ color: primitive.gray[600] }}> = primitive.gray[900]</span>
                    </div>
                    <div style={{ marginBottom: spacing.scale[1] }}>
                      <code style={{ color: primitive.blue[700] }}>spacing.scale[4]</code>
                      <span style={{ color: primitive.gray[600] }}> = 16px</span>
                    </div>
                    <div>
                      <code style={{ color: primitive.blue[700] }}>radii.borderRadius.base</code>
                      <span style={{ color: primitive.gray[600] }}> = 4px</span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: spacing.scale[3], backgroundColor: primitive.white, borderRadius: radii.borderRadius.base, border: `1px solid ${primitive.gray[300]}` }}>
                  <div style={{ fontSize: typography.fontSize.sm, color: primitive.gray[600], marginBottom: spacing.scale[1] }}>
                    レイヤー 3
                  </div>
                  <strong style={{ color: primitive.gray[900], fontSize: typography.fontSize.base }}>Component tokens（コンポーネントトークン）</strong>
                  <p style={{ margin: `${spacing.scale[2]} 0 ${spacing.scale[1]} 0`, fontSize: typography.fontSize.sm, color: primitive.gray[700], lineHeight: typography.lineHeight.relaxed }}>
                    特定のコンポーネント専用の値。Semanticトークンを組み合わせて作る。
                  </p>
                  <div style={{ padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.sm, fontSize: typography.fontSize.sm }}>
                    <div style={{ marginBottom: spacing.scale[1] }}>
                      <code style={{ color: primitive.blue[700] }}>button.padding</code>
                      <span style={{ color: primitive.gray[600] }}> = spacing.scale[3]</span>
                    </div>
                    <div style={{ marginBottom: spacing.scale[1] }}>
                      <code style={{ color: primitive.blue[700] }}>input.borderError</code>
                      <span style={{ color: primitive.gray[600] }}> = colors.border.error</span>
                    </div>
                    <div>
                      <code style={{ color: primitive.blue[700] }}>card.borderRadius</code>
                      <span style={{ color: primitive.gray[600] }}> = radii.borderRadius.lg</span>
                    </div>
                  </div>
                </div>
              </div>

              <h4 style={{ marginTop: spacing.scale[6], color: primitive.blue[900] }}>
                なぜ3階層に分けるの？
              </h4>
              <div
                style={{
                  marginTop: spacing.scale[3],
                  padding: spacing.scale[4],
                  backgroundColor: primitive.white,
                  borderRadius: radii.borderRadius.base,
                  border: `1px solid ${primitive.blue[300]}`,
                }}
              >
                <div style={{ fontSize: typography.fontSize.sm, lineHeight: typography.lineHeight.relaxed, color: primitive.gray[900] }}>
                  <div style={{ marginBottom: spacing.scale[3] }}>
                    <strong style={{ color: primitive.green[700] }}>✅ 変更に強い</strong>
                    <p style={{ margin: `${spacing.scale[1]} 0`, color: primitive.gray[700] }}>
                      例: 「メインカラーを青→緑に変更」したい場合<br />
                      → <code style={{ backgroundColor: primitive.gray[100], padding: '2px 4px', borderRadius: '2px' }}>primitive.blue[500]</code> の値を1箇所変えるだけで、それを参照する全てに反映される
                    </p>
                  </div>
                  <div style={{ marginBottom: spacing.scale[3] }}>
                    <strong style={{ color: primitive.blue[700] }}>✅ コードが読みやすい</strong>
                    <p style={{ margin: `${spacing.scale[1]} 0`, color: primitive.gray[700] }}>
                      <code style={{ backgroundColor: primitive.red[50], padding: '2px 4px', borderRadius: '2px', color: primitive.red[700] }}>color: #212121</code> より
                      <code style={{ backgroundColor: primitive.green[50], padding: '2px 4px', borderRadius: '2px', color: primitive.green[700] }}>color: colors.text.primary</code> の方が意図が明確
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: primitive.orange[700] }}>✅ テーマ切り替えが簡単</strong>
                    <p style={{ margin: `${spacing.scale[1]} 0`, color: primitive.gray[700] }}>
                      ライトモード/ダークモードでSemanticトークンの参照先を変えるだけ
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: spacing.scale[4], padding: spacing.scale[3], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base, border: `1px solid ${primitive.gray[300]}` }}>
                <strong style={{ color: primitive.gray[900] }}>📦 このプロジェクトのSemanticトークン</strong>
                <div style={{ marginTop: spacing.scale[2], fontSize: typography.fontSize.sm, color: primitive.gray[700], display: 'flex', flexWrap: 'wrap', gap: spacing.scale[2] }}>
                  <code style={{ backgroundColor: primitive.blue[100], padding: '4px 8px', borderRadius: '4px', color: primitive.blue[900] }}>spacing</code>
                  <code style={{ backgroundColor: primitive.blue[100], padding: '4px 8px', borderRadius: '4px', color: primitive.blue[900] }}>typography</code>
                  <code style={{ backgroundColor: primitive.blue[100], padding: '4px 8px', borderRadius: '4px', color: primitive.blue[900] }}>colors</code>
                  <code style={{ backgroundColor: primitive.blue[100], padding: '4px 8px', borderRadius: '4px', color: primitive.blue[900] }}>radii</code>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading emoji="📐">ボーダー半径（radii.ts）</SectionHeading>
            <div
              style={{
                marginTop: spacing.scale[4],
                padding: spacing.scale[4],
                backgroundColor: colors.background.default,
                borderRadius: radii.borderRadius.base,
                border: `1px solid ${colors.border.default}`,
              }}
            >
              <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                角丸のバリエーション
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[2], marginTop: spacing.scale[2] }}>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.blue[500], color: primitive.white, borderRadius: radii.borderRadius.sm }}>
                  sm (2px) - radii.borderRadius.sm
                </div>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.blue[500], color: primitive.white, borderRadius: radii.borderRadius.base }}>
                  base (4px) - radii.borderRadius.base
                </div>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.blue[500], color: primitive.white, borderRadius: radii.borderRadius.md }}>
                  md (6px) - radii.borderRadius.md
                </div>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.blue[500], color: primitive.white, borderRadius: radii.borderRadius.lg }}>
                  lg (8px) - radii.borderRadius.lg
                </div>
                <div style={{ padding: spacing.scale[2], backgroundColor: primitive.blue[500], color: primitive.white, borderRadius: radii.borderRadius.xl }}>
                  xl (12px) - radii.borderRadius.xl
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: spacing.scale[8] }}>
            <SectionHeading emoji="🔤">タイポグラフィ（typography.ts）</SectionHeading>
            <div
              style={{
                marginTop: spacing.scale[4],
                padding: spacing.scale[4],
                backgroundColor: colors.background.default,
                borderRadius: radii.borderRadius.base,
                border: `1px solid ${colors.border.default}`,
              }}
            >
              <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                なぜrem単位？
              </h4>
              <ul style={{ margin: `${spacing.scale[2]} 0`, paddingLeft: spacing.scale[6], lineHeight: typography.lineHeight.relaxed, color: primitive.gray[900] }}>
                <li><strong>ユーザーのブラウザ設定を尊重</strong>: 文字サイズの拡大縮小が容易</li>
                <li><strong>アクセシビリティの向上</strong>: 視覚障害者への配慮</li>
                <li><strong>レスポンシブデザインに最適</strong>: 一括でサイズ調整が可能</li>
              </ul>

              <h4 style={{ marginTop: spacing.scale[4], color: primitive.blue[900] }}>
                行間（Line Height）
              </h4>
              <p style={{ margin: `${spacing.scale[2]} 0`, color: primitive.gray[700], fontSize: typography.fontSize.sm }}>
                <strong>WCAG 2.1推奨:</strong> 本文の行高は最低1.5以上（読みやすさ向上）
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[3], marginTop: spacing.scale[2] }}>
                <div style={{ padding: spacing.scale[3], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base }}>
                  <strong style={{ color: primitive.gray[900] }}>tight (1.25)</strong> - 大見出し用
                  <div style={{ marginTop: spacing.scale[2], lineHeight: typography.lineHeight.tight, color: primitive.gray[700], fontSize: typography.fontSize.lg }}>
                    大きい文字は目の移動が少ないため、<br />
                    行高は詰めても読みやすい
                  </div>
                </div>
                <div style={{ padding: spacing.scale[3], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base }}>
                  <strong style={{ color: primitive.gray[900] }}>normal (1.5)</strong> - 本文用（WCAG推奨） ★
                  <div style={{ marginTop: spacing.scale[2], lineHeight: typography.lineHeight.normal, color: primitive.gray[700] }}>
                    小さい文字は行を見失いやすいため、間隔が必要です。本文には1.5以上が推奨されています。これにより、文章が読みやすくなります。
                  </div>
                </div>
                <div style={{ padding: spacing.scale[3], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base }}>
                  <strong style={{ color: primitive.gray[900] }}>relaxed (1.625)</strong> - 長文用
                  <div style={{ marginTop: spacing.scale[2], lineHeight: typography.lineHeight.relaxed, color: primitive.gray[700] }}>
                    長文を読む場合、さらに広い行間にすることで目の疲れを軽減できます。ブログ記事や説明文など、じっくり読む文章に最適です。
                  </div>
                </div>
              </div>

              <h4 style={{ marginTop: spacing.scale[6], color: primitive.blue[900] }}>
                フォントサイズスケール
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[2], marginTop: spacing.scale[2] }}>
                <div style={{ fontSize: typography.fontSize.xs, padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base, color: primitive.gray[900] }}>
                  xs (12px) - typography.fontSize.xs
                </div>
                <div style={{ fontSize: typography.fontSize.sm, padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base, color: primitive.gray[900] }}>
                  sm (14px) - typography.fontSize.sm
                </div>
                <div style={{ fontSize: typography.fontSize.base, padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base, color: primitive.gray[900] }}>
                  base (16px) - typography.fontSize.base ← 基準サイズ
                </div>
                <div style={{ fontSize: typography.fontSize.lg, padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base, color: primitive.gray[900] }}>
                  lg (18px) - typography.fontSize.lg
                </div>
                <div style={{ fontSize: typography.fontSize.xl, padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base, color: primitive.gray[900] }}>
                  xl (20px) - typography.fontSize.xl
                </div>
                <div style={{ fontSize: typography.fontSize['2xl'], padding: spacing.scale[2], backgroundColor: primitive.gray[50], borderRadius: radii.borderRadius.base, color: primitive.gray[900] }}>
                  2xl (24px) - typography.fontSize['2xl']
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: spacing.scale[8],
              padding: spacing.scale[4],
              backgroundColor: primitive.green[50],
              borderRadius: radii.borderRadius.base,
              border: `2px solid ${primitive.green[500]}`,
            }}
          >
            <h4 style={{ marginTop: 0, color: primitive.green[900] }}>
              ✅ トークンを使うメリット
            </h4>
            <ul style={{ margin: `${spacing.scale[2]} 0`, paddingLeft: spacing.scale[6], lineHeight: typography.lineHeight.relaxed, color: primitive.gray[900] }}>
              <li><strong>一貫性</strong>: デザインが統一され、プロフェッショナルな見た目に</li>
              <li><strong>保守性</strong>: トークンを変更するだけで全体に反映</li>
              <li><strong>開発効率</strong>: 値を覚える必要がなく、迷わない</li>
              <li><strong>コミュニケーション</strong>: デザイナーとの共通言語</li>
            </ul>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}

export default App;
