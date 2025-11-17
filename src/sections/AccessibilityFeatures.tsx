import { spacing, typography, borders } from "../design-system/tokens";
import { primitive } from "../design-system/tokens/colors";
import { radii } from "../design-system/tokens";

export function AccessibilityFeatures() {
  return (
    <section
      id="accessibility-features"
      style={{
        marginBottom: spacing.scale[12],
        padding: spacing.scale[6],
        backgroundColor: primitive.blue[50],
        border: `${borders.width.base} solid ${primitive.blue[500]}`,
        borderRadius: radii.borderRadius.lg,
        maxWidth: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box'
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
  );
}
