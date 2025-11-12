import { spacing, typography, radii } from "../design-system/tokens";
import { primitive } from "../design-system/tokens/colors";

/**
 * WCAGレベルの説明を表示する共通コンポーネント
 */
export const WCAGLevelInfo = () => {
  return (
    <div
      style={{
        marginTop: spacing.scale[4],
        padding: spacing.scale[4],
        backgroundColor: primitive.blue[50],
        borderRadius: radii.borderRadius.lg,
        border: `2px solid ${primitive.blue[200]}`,
      }}
    >
      <h4
        style={{
          marginTop: 0,
          marginBottom: spacing.scale[3],
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.semibold,
          color: primitive.blue[900],
        }}
      >
        📊 WCAGレベルについて
      </h4>

      <div
        style={{
          display: "grid",
          gap: spacing.scale[3],
        }}
      >
        <div
          style={{
            padding: spacing.scale[3],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}
        >
          <strong
            style={{
              color: primitive.blue[900],
              fontSize: typography.fontSize.base,
            }}
          >
            レベルA（最低限）
          </strong>
          <p
            style={{
              margin: `${spacing.scale[1]} 0 0 0`,
              color: primitive.gray[700],
              fontSize: typography.fontSize.sm,
              lineHeight: typography.lineHeight.relaxed,
            }}
          >
            最低限満たすべき基本的なアクセシビリティ要件
          </p>
        </div>

        <div
          style={{
            padding: spacing.scale[3],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}
        >
          <strong
            style={{
              color: primitive.blue[900],
              fontSize: typography.fontSize.base,
            }}
          >
            レベルAA（推奨）⭐
          </strong>
          <p
            style={{
              margin: `${spacing.scale[1]} 0 0 0`,
              color: primitive.gray[700],
              fontSize: typography.fontSize.sm,
              lineHeight: typography.lineHeight.relaxed,
            }}
          >
            一般的なWebサイトで目指すべき標準レベル
          </p>
        </div>

        <div
          style={{
            padding: spacing.scale[3],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `1px solid ${primitive.blue[200]}`,
          }}
        >
          <strong
            style={{
              color: primitive.blue[900],
              fontSize: typography.fontSize.base,
            }}
          >
            レベルAAA（最高）
          </strong>
          <p
            style={{
              margin: `${spacing.scale[1]} 0 0 0`,
              color: primitive.gray[700],
              fontSize: typography.fontSize.sm,
              lineHeight: typography.lineHeight.relaxed,
            }}
          >
            公共サービスや医療など、最高水準のアクセシビリティが求められる場合
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: spacing.scale[4],
          padding: spacing.scale[3],
          backgroundColor: primitive.yellow,
          border: `2px solid ${primitive.black}`,
          borderRadius: radii.borderRadius.md,
          fontSize: typography.fontSize.sm,
        }}
      >
        <strong>💡 実用的な選び方</strong>
        <ul
          style={{
            margin: `${spacing.scale[2]} 0 0 0`,
            paddingLeft: spacing.scale[5],
            fontSize: typography.fontSize.sm,
            lineHeight: typography.lineHeight.relaxed,
            color: primitive.gray[900],
          }}
        >
          <li>
            <strong>一般的なWebサイト</strong>: AA を目指す
          </li>
          <li>
            <strong>公共サービス、医療、金融</strong>: AAA を検討
          </li>
          <li>
            <strong>最低限</strong>: A は避け、少なくとも AA を満たす
          </li>
        </ul>
      </div>
    </div>
  );
};
