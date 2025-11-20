import { css, cx } from "@/styled-system/css";

const sectionClass = css({
  mb: 12,
  p: 6,
  bg: "blue.50",
  borderWidth: "base",
  borderStyle: "solid",
  borderColor: "blue.500",
  rounded: "lg",
  maxW: "full",
  overflowX: "hidden",
  boxSizing: "border-box",
});

const headingClass = css({ color: "blue.900", mt: 0 });

const listClass = css({
  lineHeight: "relaxed",
  color: "blue.900",
});

export function AccessibilityFeatures() {
  return (
    <section
      id="accessibility-features"
      className={cx("accessibility-features", sectionClass)}
    >
      <h3 className={cx(headingClass)}>
        アクセシビリティ機能
      </h3>
      <ul className={cx(listClass)}>
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
