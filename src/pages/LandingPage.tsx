import { spacing, typography, radii } from "../design-system/tokens";
import { primitive } from "../design-system/tokens/colors";

export const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing.scale[4],
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <div
          style={{
            background: primitive.white,
            borderRadius: radii.borderRadius.xl,
            padding: spacing.scale[8],
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1
            style={{
              fontSize: typography.fontSize["2xl"],
              marginBottom: spacing.scale[4],
              color: primitive.gray[900],
              fontWeight: typography.fontWeight.bold,
            }}
          >
            🎨 アクセシビリティ & デザインシステム学習
          </h1>
          <p
            style={{
              color: primitive.gray[700],
              marginBottom: spacing.scale[6],
              lineHeight: typography.lineHeight.relaxed,
              fontSize: typography.fontSize.base,
            }}
          >
            WCAG準拠のアクセシブルなコンポーネントと、スケーラブルなデザイントークンシステムを学ぶプロジェクトです。
          </p>

          <div style={{ display: "grid", gap: spacing.scale[3] }}>
            <a
              href="/app"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: `${spacing.scale[4]} ${spacing.scale[5]}`,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: primitive.white,
                textDecoration: "none",
                borderRadius: radii.borderRadius.lg,
                fontWeight: typography.fontWeight.semibold,
                transition: "transform 0.2s, box-shadow 0.2s",
                fontSize: typography.fontSize.base,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>📱 メインアプリケーション</span>
              <span style={{ fontSize: typography.fontSize.xl }}>→</span>
            </a>

            <a
              href="/storybook"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: `${spacing.scale[4]} ${spacing.scale[5]}`,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: primitive.white,
                textDecoration: "none",
                borderRadius: radii.borderRadius.lg,
                fontWeight: typography.fontWeight.semibold,
                transition: "transform 0.2s, box-shadow 0.2s",
                fontSize: typography.fontSize.base,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>📚 Storybook（コンポーネントカタログ）</span>
              <span style={{ fontSize: typography.fontSize.xl }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
