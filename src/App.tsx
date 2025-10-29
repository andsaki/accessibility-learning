import { useState } from "react";
import { Button, Input } from "./design-system/components";
import { colors, accessibilityLevels } from "./design-system/tokens";
import { primitive } from "./design-system/tokens/colors";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <header>
        <h1>デザインシステム & アクセシビリティ学習</h1>
        <p>アクセシブルなコンポーネントの実装例</p>
      </header>

      <main style={{ marginTop: "2rem" }}>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Button コンポーネント</h2>
          <p>WCAG準拠のアクセシブルなボタンコンポーネントです。</p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1rem",
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
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1rem",
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

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Button disabled>無効化</Button>
            <Button isLoading>読み込み中</Button>
            <Button icon="🚀">アイコン付き</Button>
          </div>
        </section>

        <section style={{ marginBottom: "3rem", marginTop: "3rem" }}>
          <h2>Input コンポーネント</h2>
          <p>
            ラベル、エラー表示、ヘルプテキストを備えたアクセシブルな入力フィールドです。
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
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

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
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

          <div style={{ marginTop: "2rem" }}>
            <h3>サイズバリエーション</h3>
            <Input label="小サイズ" size="sm" placeholder="小さい入力欄" />
            <Input label="中サイズ" size="md" placeholder="標準の入力欄" />
            <Input label="大サイズ" size="lg" placeholder="大きい入力欄" />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3>無効化状態</h3>
            <Input
              label="無効な入力欄"
              value="編集できません"
              disabled
              helperText="この項目は編集できません"
            />
          </div>
        </section>

        <section
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            backgroundColor: "#e3f2fd",
            border: "2px solid #2196f3",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#1565c0", marginTop: 0 }}>
            アクセシビリティ機能
          </h3>
          <ul style={{ lineHeight: "1.8", color: "#1565c0" }}>
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
          style={{
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: colors.background.subtle,
            borderRadius: "8px",
          }}
        >
          <h2>WCAGレベルとコントラスト比について</h2>

          <div style={{ marginTop: "1.5rem" }}>
            <h3>コントラスト比とは？</h3>
            <p style={{ lineHeight: "1.8" }}>
              コントラスト比は、テキストと背景の明るさの差を数値で表したものです。
              数値が大きいほど見やすく、小さいほど見にくくなります。
              <br />
              例: 黒文字 ({primitive.black}) と白背景 ({primitive.white})
              のコントラスト比は <strong>21:1</strong>（最大値）
            </p>

            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: primitive.blue[50],
                borderRadius: "4px",
                border: `1px solid ${primitive.blue[200]}`,
              }}
            >
              <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                📐 コントラスト比の計算方法
              </h4>
              <p style={{ margin: "0.5rem 0", lineHeight: "1.8", color: primitive.gray[900] }}>
                コントラスト比 = (明るい方の輝度 + 0.05) ÷ (暗い方の輝度 + 0.05)
              </p>
              <p style={{ margin: "0.5rem 0", fontSize: "14px", color: primitive.gray[700] }}>
                ※ 輝度は0.0（完全な黒）〜 1.0（完全な白）の値
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <p style={{ margin: "0.25rem 0", fontSize: "14px", color: primitive.gray[900] }}>
                  <strong>例1: 白背景 + グレー文字 = 3:1</strong>
                  <br />
                  <span style={{ fontSize: "13px", color: primitive.gray[700] }}>
                    白(輝度1.0) ÷ グレー(輝度0.4) = (1.0+0.05)÷(0.4+0.05) ≈ 3:1
                  </span>
                </p>
                <p style={{ margin: "0.25rem 0", fontSize: "14px", color: primitive.gray[900] }}>
                  <strong>例2: 白背景 + 黒文字 = 21:1</strong>
                  <br />
                  <span style={{ fontSize: "13px", color: primitive.gray[700] }}>
                    白(輝度1.0) ÷ 黒(輝度0.0) = (1.0+0.05)÷(0.0+0.05) = 21:1（最大）
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3>WCAGレベルとコントラスト比の基準</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: primitive.gray[100],
                  borderRadius: "4px",
                  border: `2px solid ${colors.border.default}`,
                }}
              >
                <h4 style={{ marginTop: 0, color: primitive.gray[800] }}>
                  レベルA（最低限）
                </h4>
                <ul
                  style={{
                    margin: "0.5rem 0",
                    paddingLeft: "1.5rem",
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
                      fontSize: '18px',
                      color: accessibilityLevels.contrastDemos.ratio3to1.text,
                      backgroundColor: accessibilityLevels.contrastDemos.ratio3to1.background,
                      padding: '0.5rem',
                      marginTop: '0.5rem',
                      borderRadius: '4px',
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
                  padding: "1rem",
                  backgroundColor: primitive.blue[50],
                  borderRadius: "4px",
                  border: `2px solid ${primitive.blue[500]}`,
                }}
              >
                <h4 style={{ marginTop: 0, color: primitive.blue[900] }}>
                  レベルAA（推奨）★
                </h4>
                <ul
                  style={{
                    margin: "0.5rem 0",
                    paddingLeft: "1.5rem",
                    lineHeight: "1.8",
                    color: primitive.gray[900],
                  }}
                >
                  <li>
                    <strong>通常テキスト:</strong> 4.5:1 以上
                  </li>
                  <li>
                    <div style={{
                      fontSize: '16px',
                      color: accessibilityLevels.contrastDemos.ratio4_5to1.text,
                      backgroundColor: accessibilityLevels.contrastDemos.ratio4_5to1.background,
                      padding: '0.5rem',
                      marginTop: '0.5rem',
                      borderRadius: '4px',
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
                  padding: "1rem",
                  backgroundColor: primitive.orange[50],
                  borderRadius: "4px",
                  border: `2px solid ${primitive.orange[600]}`,
                }}
              >
                <h4 style={{ marginTop: 0, color: primitive.orange[900] }}>
                  レベルAAA（最高）
                </h4>
                <ul
                  style={{
                    margin: "0.5rem 0",
                    paddingLeft: "1.5rem",
                    lineHeight: "1.8",
                    color: primitive.gray[900],
                  }}
                >
                  <li>
                    <strong>通常テキスト:</strong> 7:1 以上
                  </li>
                  <li>
                    <div style={{
                      fontSize: '16px',
                      color: accessibilityLevels.contrastDemos.ratio7to1.text,
                      backgroundColor: accessibilityLevels.contrastDemos.ratio7to1.background,
                      padding: '0.5rem',
                      marginTop: '0.5rem',
                      borderRadius: '4px',
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

          <div style={{ marginTop: "2rem" }}>
            <h3>実際の例</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: accessibilityLevels.button.AA.primary.bg,
                  color: accessibilityLevels.button.AA.primary.text,
                  borderRadius: "4px",
                }}
              >
                <strong>コントラスト比 4.5:1</strong> - レベルAA Primary ボタン
                <br />
                <span style={{ fontSize: "14px" }}>
                  背景: {accessibilityLevels.button.AA.primary.bg} / 文字:{" "}
                  {accessibilityLevels.button.AA.primary.text}
                </span>
              </div>

              <div
                style={{
                  padding: "1rem",
                  backgroundColor: accessibilityLevels.button.AAA.primary.bg,
                  color: accessibilityLevels.button.AAA.primary.text,
                  borderRadius: "4px",
                }}
              >
                <strong>コントラスト比 4.59:1</strong> - レベルAAA Primary
                ボタン
                <br />
                <span style={{ fontSize: "14px" }}>
                  背景: {accessibilityLevels.button.AAA.primary.bg} / 文字:{" "}
                  {accessibilityLevels.button.AAA.primary.text}
                </span>
              </div>

              <div
                style={{
                  padding: "1rem",
                  backgroundColor: accessibilityLevels.focus.AAA.background,
                  color: accessibilityLevels.focus.AAA.text,
                  borderRadius: "4px",
                  border: `1px solid ${colors.border.default}`,
                }}
              >
                <strong>コントラスト比 19.56:1</strong> - レベルAAA フォーカス
                <br />
                <span style={{ fontSize: "14px" }}>
                  背景: {accessibilityLevels.focus.AAA.background} / 文字:{" "}
                  {accessibilityLevels.focus.AAA.text}
                </span>
              </div>

              <div
                style={{
                  padding: "1rem",
                  backgroundColor: primitive.gray[900],
                  color: primitive.white,
                  borderRadius: "4px",
                }}
              >
                <strong>コントラスト比 16.1:1</strong> - 濃いグレー背景と白文字
                <br />
                <span style={{ fontSize: "14px" }}>
                  背景: {primitive.gray[900]} / 文字: {primitive.white}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: colors.background.default,
              borderRadius: "4px",
              border: `2px solid ${primitive.green[500]}`,
            }}
          >
            <h4 style={{ marginTop: 0, color: primitive.green[800] }}>
              💡 コントラスト比の確認方法
            </h4>
            <p style={{ margin: "0.5rem 0", lineHeight: "1.8" }}>
              オンラインツールを使って簡単に確認できます：
            </p>
            <ul style={{ margin: "0.5rem 0", paddingLeft: "1.5rem" }}>
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
      </main>
    </div>
  );
}

export default App;
