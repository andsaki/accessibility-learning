import { colors, radii, spacing, typography, icons } from "../design-system/tokens";
import { primitive } from "../design-system/tokens/colors";
import { SectionHeading } from "../components/SectionHeading";

export function DesignTokens() {
  return (
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
          <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
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
          <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
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
          <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
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
          <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
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
        <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.green[900] }}>
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
  );
}
