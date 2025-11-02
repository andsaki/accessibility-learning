import { Button, Input, Select, Form, Accordion, AccordionSummary, AccordionContent, Modal, Breadcrumbs, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, formSchemas } from "../design-system/components";
import { colors, radii, spacing, typography, icons } from "../design-system/tokens";
import { primitive } from "../design-system/tokens/colors";
import { SectionHeading } from "../components/SectionHeading";
import { z } from "zod";

interface ComponentDemosProps {
  count: number;
  isLoading: boolean;
  handleClick: () => void;
  formData: {
    name: string;
    email: string;
    password: string;
  };
  errors: {
    name: string;
    email: string;
    password: string;
  };
  setFormData: (data: { name: string; email: string; password: string }) => void;
  setErrors: (errors: { name: string; email: string; password: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
  success: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export function ComponentDemos({
  count,
  isLoading,
  handleClick,
  formData,
  errors,
  setFormData,
  setErrors,
  handleSubmit,
  success,
  error,
  warning,
  info,
  isModalOpen,
  setIsModalOpen,
}: ComponentDemosProps) {
  return (
    <>
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
        <p style={{ color: primitive.gray[700], marginTop: 0 }}>WCAG準拠のアクセシブルなボタンコンポーネントです。</p>

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
        <p style={{ color: primitive.gray[700], marginTop: 0 }}>
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
        id="select-component"
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
          Select コンポーネント
        </h2>
        <p style={{ color: primitive.gray[700] }}>
          セレクトボックス（ドロップダウンメニュー）コンポーネントです。
          ユーザーが選択肢の中から1つを選ぶインターフェースを提供します。
        </p>

        <div style={{ marginTop: spacing.scale[6] }}>
          <SectionHeading>基本的な使い方</SectionHeading>
          <div style={{ maxWidth: '400px' }}>
            <Select
              label="国を選択"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
                { value: 'uk', label: 'イギリス' },
                { value: 'fr', label: 'フランス' },
                { value: 'de', label: 'ドイツ' },
              ]}
              placeholder="選択してください"
            />
          </div>
        </div>

        <div style={{ marginTop: spacing.scale[8] }}>
          <SectionHeading>ヘルプテキスト付き</SectionHeading>
          <div style={{ maxWidth: '400px' }}>
            <Select
              label="配送先の国"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
                { value: 'uk', label: 'イギリス' },
              ]}
              placeholder="選択してください"
              helperText="お住まいの国を選択してください"
            />
          </div>
        </div>

        <div style={{ marginTop: spacing.scale[8] }}>
          <SectionHeading>エラー状態</SectionHeading>
          <div style={{ maxWidth: '400px' }}>
            <Select
              label="国を選択"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
                { value: 'uk', label: 'イギリス' },
              ]}
              placeholder="選択してください"
              error="国の選択は必須です"
            />
          </div>
        </div>

        <div style={{ marginTop: spacing.scale[8] }}>
          <SectionHeading>必須項目</SectionHeading>
          <div style={{ maxWidth: '400px' }}>
            <Select
              label="国を選択"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
                { value: 'uk', label: 'イギリス' },
              ]}
              placeholder="選択してください"
              required
            />
          </div>
        </div>

        <div style={{ marginTop: spacing.scale[8] }}>
          <SectionHeading>無効化状態</SectionHeading>
          <div style={{ maxWidth: '400px' }}>
            <Select
              label="国を選択"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
                { value: 'uk', label: 'イギリス' },
              ]}
              placeholder="選択してください"
              disabled
            />
          </div>
        </div>

        <div style={{ marginTop: spacing.scale[8] }}>
          <SectionHeading>サイズバリエーション</SectionHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[4], maxWidth: '400px' }}>
            <Select
              label="小（sm）"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
              ]}
              placeholder="選択してください"
              size="sm"
            />
            <Select
              label="中（md）- デフォルト"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
              ]}
              placeholder="選択してください"
              size="md"
            />
            <Select
              label="大（lg）"
              options={[
                { value: 'jp', label: '日本' },
                { value: 'us', label: 'アメリカ' },
              ]}
              placeholder="選択してください"
              size="lg"
            />
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
            💡 Selectの特徴
          </h4>
          <ul style={{ color: primitive.blue[900], lineHeight: typography.lineHeight.relaxed }}>
            <li><strong>ラベル関連付け</strong>: for/id属性で自動関連付け</li>
            <li><strong>エラー表示</strong>: aria-invalid, aria-describedby, role="alert"</li>
            <li><strong>必須項目</strong>: aria-required属性でスクリーンリーダーに通知</li>
            <li><strong>WCAGレベル対応</strong>: A/AA/AAAの3段階</li>
            <li><strong>キーボードフォーカス</strong>: Tabキー操作時のみフォーカススタイル表示</li>
            <li><strong>ネイティブselect要素</strong>: アクセシビリティとユーザビリティを両立</li>
          </ul>
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
        <p style={{ color: primitive.gray[700], marginTop: 0 }}>
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
        <p style={{ color: primitive.gray[700], marginTop: 0 }}>
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
        <p style={{ color: primitive.gray[700], marginTop: 0 }}>
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
    </>
  );
}
