import { colors, accessibilityLevels, radii, spacing, typography, icons } from "../design-system/tokens";
import { primitive } from "../design-system/tokens/colors";
import { SectionHeading } from "../components/SectionHeading";

export function WCAGLevels() {
  return (
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
        <icons.concept.wcag size={28} color={primitive.blue[600]} strokeWidth={2} aria-hidden="true" />
        WCAGレベルとコントラスト比について
      </h2>

      <div
        style={{
          padding: spacing.scale[5],
          backgroundColor: primitive.yellow[50],
          borderRadius: radii.borderRadius.lg,
          border: `3px solid ${primitive.yellow[400]}`,
          marginBottom: spacing.scale[8],
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: spacing.scale[3], color: primitive.gray[900], fontSize: typography.fontSize.xl }}>
          📚 WCAGレベル（A/AA/AAA）とは？
        </h3>
        <p style={{ lineHeight: "1.8", color: primitive.gray[900], marginBottom: spacing.scale[4] }}>
          WCAG（Web Content Accessibility Guidelines）は、Webコンテンツをアクセシブルにするための国際的なガイドラインです。
          3つのレベル（A/AA/AAA）で、達成すべきアクセシビリティの基準を定めています。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[3] }}>
          <div style={{ padding: spacing.scale[3], backgroundColor: primitive.white, borderRadius: radii.borderRadius.md, border: `1px solid ${primitive.gray[300]}` }}>
            <h4 style={{ margin: 0, marginBottom: spacing.scale[1], color: primitive.gray[800], fontSize: typography.fontSize.base }}>
              🔹 レベルA（最低限）
            </h4>
            <p style={{ margin: 0, lineHeight: "1.6", color: primitive.gray[700], fontSize: typography.fontSize.sm }}>
              Webコンテンツの最低限のアクセシビリティレベル。これを満たさないと、多くのユーザーがコンテンツにアクセスできません。
              <strong>しかし、Aだけでは不十分です。</strong>
            </p>
          </div>

          <div style={{ padding: spacing.scale[3], backgroundColor: primitive.blue[50], borderRadius: radii.borderRadius.md, border: `2px solid ${primitive.blue[400]}` }}>
            <h4 style={{ margin: 0, marginBottom: spacing.scale[1], color: primitive.blue[900], fontSize: typography.fontSize.base }}>
              ⭐ レベルAA（推奨）- 実用的な標準
            </h4>
            <p style={{ margin: 0, lineHeight: "1.6", color: primitive.gray[900], fontSize: typography.fontSize.sm }}>
              <strong>ほとんどのWebサイトで目指すべき標準レベルです。</strong>
              多くの国や組織で法的要件として採用されています。日本の公的機関も原則AAレベルを求めています。
              このデザインシステムもAAレベルを標準としています。
            </p>
          </div>

          <div style={{ padding: spacing.scale[3], backgroundColor: primitive.white, borderRadius: radii.borderRadius.md, border: `1px solid ${primitive.orange[400]}` }}>
            <h4 style={{ margin: 0, marginBottom: spacing.scale[1], color: primitive.orange[900], fontSize: typography.fontSize.base }}>
              🏆 レベルAAA（最高）
            </h4>
            <p style={{ margin: 0, lineHeight: "1.6", color: primitive.gray[700], fontSize: typography.fontSize.sm }}>
              最高レベルのアクセシビリティ。全てのコンテンツでAAAを達成するのは現実的ではありませんが、
              重要なコンテンツ（医療情報、法的文書など）では目指す価値があります。
            </p>
          </div>
        </div>

        <div style={{ marginTop: spacing.scale[4], padding: spacing.scale[3], backgroundColor: primitive.blue[100], borderRadius: radii.borderRadius.md }}>
          <p style={{ margin: 0, lineHeight: "1.6", color: primitive.blue[900], fontSize: typography.fontSize.sm, fontWeight: 600 }}>
            💡 このデザインシステムでは、全てのコンポーネントで<strong>レベルAA</strong>をデフォルトにしています。
            必要に応じてA/AAAも選択可能です。
          </p>
        </div>
      </div>

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
          <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
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
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.gray[800] }}>
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
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
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
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.orange[900] }}>
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
        <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.green[800] }}>
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
  );
}
