import { useState } from "react";
import { Button, Input, Accordion, AccordionSummary, AccordionContent, Breadcrumbs, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, Modal } from "../design-system/components";
import { InfoBox } from "../design-system/components/InfoBox";
import { colors, radii, spacing, typography, icons, borders } from "../design-system/tokens";
import { primitive } from "../design-system/tokens/colors";
import { SectionHeading } from "../components/SectionHeading";
import { Tooltip } from "../components/Tooltip";

export const ARIAGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="aria-guide"
      style={{
        marginBottom: spacing.scale[12],
        padding: spacing.scale[6],
        backgroundColor: colors.background.default,
        borderRadius: radii.borderRadius.lg,
        border: borders.default,
        maxWidth: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <h2 style={{
        marginTop: 0,
        color: primitive.gray[900],
        fontSize: typography.fontSize['2xl'],
        fontWeight: 'bold',
        borderBottom: `${borders.width.thick} solid ${primitive.pink[500]}`,
        paddingBottom: spacing.scale[2],
        marginBottom: spacing.scale[4],
        display: 'flex',
        alignItems: 'center',
        gap: spacing.scale[2]
      }}>
        <icons.philosophy.inclusive size={28} color={primitive.pink[600]} strokeWidth={2} />
        ARIAラベルとrole属性ガイド
      </h2>
      <p style={{ color: primitive.gray[700], marginBottom: spacing.scale[6] }}>
        ARIA（Accessible Rich Internet Applications）は、Webアプリケーションをスクリーンリーダーなどの支援技術に対してアクセシブルにするための仕様です。
        適切なARIA属性を使用することで、視覚障害者やキーボードユーザーに対して、より良いユーザー体験を提供できます。
      </p>

      {/* ARIAの基本概要 */}
      <div style={{
        marginTop: spacing.scale[6],
        marginBottom: spacing.scale[8],
        padding: spacing.scale[6],
        backgroundColor: primitive.blue[50],
        borderRadius: radii.borderRadius.lg,
        border: `${borders.width.base} solid ${primitive.blue[200]}`,
      }}>
        <h3 style={{
          marginTop: 0,
          marginBottom: spacing.scale[4],
          color: primitive.blue[900],
          fontSize: typography.fontSize.xl,
          fontWeight: typography.fontWeight.semibold,
          display: 'flex',
          alignItems: 'center',
          gap: spacing.scale[2]
        }}>
          <icons.concept.wcag size={24} color={primitive.blue[600]} strokeWidth={2} />
          ARIAの基本的な役割
        </h3>

        <div style={{ display: 'grid', gap: spacing.scale[4] }}>
          <div style={{
            padding: spacing.scale[4],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{
              marginTop: 0,
              marginBottom: spacing.scale[2],
              color: primitive.blue[900],
              fontSize: typography.fontSize.base,
              fontWeight: typography.fontWeight.semibold,
            }}>
              🎭 役割（Role）を伝える
            </h4>
            <p style={{ margin: 0, color: primitive.gray[700], fontSize: typography.fontSize.sm, lineHeight: typography.lineHeight.relaxed }}>
              要素が何であるかを支援技術に伝えます。例：<code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>role="button"</code>、
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>role="navigation"</code>など。
              HTMLのセマンティック要素（<code>&lt;button&gt;</code>、<code>&lt;nav&gt;</code>）を使えば、roleは自動的に付与されます。
            </p>
          </div>

          <div style={{
            padding: spacing.scale[4],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{
              marginTop: 0,
              marginBottom: spacing.scale[2],
              color: primitive.blue[900],
              fontSize: typography.fontSize.base,
              fontWeight: typography.fontWeight.semibold,
            }}>
              🏷️ 名前（Name）をつける
            </h4>
            <p style={{ margin: 0, color: primitive.gray[700], fontSize: typography.fontSize.sm, lineHeight: typography.lineHeight.relaxed }}>
              要素に読み上げられる名前を与えます。<code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-label</code>、
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-labelledby</code>などで指定します。
              「閉じるボタン」「メニューを開く」など、要素の目的を明確に伝えます。
            </p>
          </div>

          <div style={{
            padding: spacing.scale[4],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{
              marginTop: 0,
              marginBottom: spacing.scale[2],
              color: primitive.blue[900],
              fontSize: typography.fontSize.base,
              fontWeight: typography.fontWeight.semibold,
            }}>
              📊 状態（State）を伝える
            </h4>
            <p style={{ margin: 0, color: primitive.gray[700], fontSize: typography.fontSize.sm, lineHeight: typography.lineHeight.relaxed }}>
              要素の現在の状態を伝えます。<code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-expanded="true"</code>（展開中）、
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-checked="false"</code>（未チェック）、
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-disabled="true"</code>（無効）など、
              動的に変化する状態を支援技術に伝えます。
            </p>
          </div>

          <div style={{
            padding: spacing.scale[4],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{
              marginTop: 0,
              marginBottom: spacing.scale[2],
              color: primitive.blue[900],
              fontSize: typography.fontSize.base,
              fontWeight: typography.fontWeight.semibold,
            }}>
              🔗 関係性（Relationship）を示す
            </h4>
            <p style={{ margin: 0, color: primitive.gray[700], fontSize: typography.fontSize.sm, lineHeight: typography.lineHeight.relaxed }}>
              要素間の関係を伝えます。<code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-describedby</code>（説明要素）、
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-controls</code>（制御する要素）、
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[1]} ${spacing.scale[2]}`, borderRadius: spacing.scale[2] }}>aria-owns</code>（所有する要素）など、
              要素同士のつながりを明確にします。
            </p>
          </div>
        </div>

        <div style={{
          marginTop: spacing.scale[4],
          padding: spacing.scale[3],
          backgroundColor: primitive.yellow,
          border: `${borders.width.base} solid ${primitive.black}`,
          borderRadius: radii.borderRadius.md,
          fontSize: typography.fontSize.sm,
          color: primitive.gray[900],
        }}>
          <strong>💡 重要な原則:</strong> まずは<strong>セマンティックHTML</strong>（<code>&lt;button&gt;</code>、<code>&lt;nav&gt;</code>、<code>&lt;main&gt;</code>など）を使いましょう。
          ARIAは、HTMLの機能では実現できない場合の「補完」として使用します。
        </div>
      </div>

      <div style={{ marginTop: spacing.scale[8] }}>
        <SectionHeading>主要なARIA属性</SectionHeading>

        <div style={{
          display: 'grid',
          gap: spacing.scale[4],
          marginBottom: spacing.scale[8],
          width: '100%',
          minWidth: 0
        }}>
          {/* aria-label */}
          <div style={{
            padding: spacing.scale[4],
            backgroundColor: primitive.pink[50],
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.pink[200]}`,
            minWidth: 0
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.pink[900] }}>
              <code style={{ backgroundColor: primitive.pink[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>aria-label</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              要素に対して、スクリーンリーダーが読み上げるラベルを指定します。視覚的なテキストがない要素に使用します。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.pink[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
                <code>{`<button aria-label="メニューを開く">
  <icons.menu />
</button>`}</code>
              </pre>
            </div>
            <div style={{ marginTop: spacing.scale[3], display: 'flex', gap: spacing.scale[2], alignItems: 'center', flexWrap: 'wrap' }}>
              <Button
                aria-label="設定を開く"
                icon={<icons.component.button size={16} />}
                variant="outline"
                size="sm"
              >
              </Button>
              <span style={{ fontSize: typography.fontSize.sm, color: primitive.gray[600] }}>
                ← アイコンのみのボタンに aria-label を使用
              </span>
            </div>
          </div>

          {/* aria-labelledby */}
          <div style={{
            padding: spacing.scale[4],
            backgroundColor: primitive.blue[50],
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.blue[200]}`,
            minWidth: 0
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>aria-labelledby</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              他の要素のIDを参照して、その要素のテキストをラベルとして使用します。複数のIDをスペース区切りで指定できます。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.blue[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
            border: `${borders.width.thin} solid ${primitive.green[200]}`,
            minWidth: 0
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.green[900] }}>
              <code style={{ backgroundColor: primitive.green[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>aria-describedby</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              要素の説明や補足情報を提供する他の要素のIDを参照します。エラーメッセージやヒントテキストに使用します。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.green[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
                label="パスワード"
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
            border: `${borders.width.thin} solid ${primitive.orange[200]}`,
            minWidth: 0
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.orange[900] }}>
              <code style={{ backgroundColor: primitive.orange[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>aria-current</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              現在の項目を示します。ナビゲーションやパンくずリストで使用します。
            </p>

            <div style={{
              marginTop: spacing.scale[4],
              padding: spacing.scale[3],
              backgroundColor: primitive.white,
              borderRadius: radii.borderRadius.base,
              border: `${borders.width.thin} solid ${primitive.orange[200]}`,
            }}>
              <h5 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.orange[900], fontSize: typography.fontSize.base }}>
                📋 aria-current の値の種類
              </h5>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: typography.fontSize.sm }}>
                <thead>
                  <tr style={{ borderBottom: `${borders.width.base} solid ${primitive.orange[200]}` }}>
                    <th style={{ textAlign: 'left', padding: spacing.scale[2], color: primitive.orange[900] }}>値</th>
                    <th style={{ textAlign: 'left', padding: spacing.scale[2], color: primitive.orange[900] }}>使用場面</th>
                    <th style={{ textAlign: 'left', padding: spacing.scale[2], color: primitive.orange[900] }}>例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: `${borders.width.thin} solid ${primitive.orange[100]}` }}>
                    <td style={{ padding: spacing.scale[2], fontFamily: 'monospace', color: primitive.orange[800] }}>page</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[700] }}>現在表示中のページ</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[600], fontSize: typography.fontSize.xs }}>パンくずリスト、ページネーション</td>
                  </tr>
                  <tr style={{ borderBottom: `${borders.width.thin} solid ${primitive.orange[100]}` }}>
                    <td style={{ padding: spacing.scale[2], fontFamily: 'monospace', color: primitive.orange[800] }}>step</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[700] }}>ステップ形式の現在位置</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[600], fontSize: typography.fontSize.xs }}>フォームウィザード、チュートリアル</td>
                  </tr>
                  <tr style={{ borderBottom: `${borders.width.thin} solid ${primitive.orange[100]}` }}>
                    <td style={{ padding: spacing.scale[2], fontFamily: 'monospace', color: primitive.orange[800] }}>location</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[700] }}>視覚的にハイライトされた場所</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[600], fontSize: typography.fontSize.xs }}>フローチャート、サイトマップ</td>
                  </tr>
                  <tr style={{ borderBottom: `${borders.width.thin} solid ${primitive.orange[100]}` }}>
                    <td style={{ padding: spacing.scale[2], fontFamily: 'monospace', color: primitive.orange[800] }}>date</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[700] }}>現在選択中の日付</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[600], fontSize: typography.fontSize.xs }}>カレンダー、日付ピッカー</td>
                  </tr>
                  <tr style={{ borderBottom: `${borders.width.thin} solid ${primitive.orange[100]}` }}>
                    <td style={{ padding: spacing.scale[2], fontFamily: 'monospace', color: primitive.orange[800] }}>time</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[700] }}>現在選択中の時刻</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[600], fontSize: typography.fontSize.xs }}>タイムピッカー、スケジュール</td>
                  </tr>
                  <tr style={{ borderBottom: `${borders.width.thin} solid ${primitive.orange[100]}` }}>
                    <td style={{ padding: spacing.scale[2], fontFamily: 'monospace', color: primitive.orange[800] }}>true</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[700] }}>上記に当てはまらない現在項目</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[600], fontSize: typography.fontSize.xs }}>汎用的な「現在」の表示</td>
                  </tr>
                  <tr>
                    <td style={{ padding: spacing.scale[2], fontFamily: 'monospace', color: primitive.orange[800] }}>false</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[700] }}>現在項目ではない（デフォルト）</td>
                    <td style={{ padding: spacing.scale[2], color: primitive.gray[600], fontSize: typography.fontSize.xs }}>通常は省略可能</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[3],
              border: `${borders.width.thin} solid ${primitive.orange[200]}`,
            }}>
              <h5 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.orange[900], fontSize: typography.fontSize.base }}>
                💡 使用例：パンくずリスト
              </h5>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
            border: `${borders.width.thin} solid ${primitive.pink[200]}`,
            minWidth: 0
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.pink[900] }}>
              <code style={{ backgroundColor: primitive.pink[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>aria-expanded</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              要素が展開されているか折りたたまれているかを示します。アコーディオンやドロップダウンメニューで使用します。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.pink[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
            border: `${borders.width.thin} solid ${primitive.gray[300]}`,
            minWidth: 0
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.gray[900] }}>
              <code style={{ backgroundColor: primitive.gray[200], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>aria-hidden</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              要素をスクリーンリーダーから隠します。装飾的なアイコンやSVGに使用します。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.gray[300]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
        <SectionHeading>ツールチップ（role="tooltip"）</SectionHeading>

        <div style={{
          padding: spacing.scale[4],
          backgroundColor: primitive.pink[50],
          borderRadius: radii.borderRadius.md,
          border: `${borders.width.thin} solid ${primitive.pink[200]}`,
        }}>
          <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.pink[900] }}>
            <code style={{ backgroundColor: primitive.pink[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>role="tooltip"</code>
          </h4>
          <p style={{ color: primitive.gray[700], marginTop: 0 }}>
            ツールチップは、要素に関する補足情報を提供するポップアップです。aria-describedby と組み合わせて使用します。
          </p>

          <InfoBox variant="tip" icon="💡" title="ツールチップのアクセシビリティ要件" style={{ marginTop: spacing.scale[3] }}>
            <ul style={{ lineHeight: typography.lineHeight.relaxed, margin: 0, paddingLeft: spacing.scale[5] }}>
              <li>role="tooltip" を使用する</li>
              <li>一意のIDを持つ</li>
              <li>トリガー要素から aria-describedby で参照される</li>
              <li>キーボードフォーカスとマウスホバーの両方に対応</li>
              <li>適切な遅延時間を設定（推奨：300ms）</li>
              <li>視覚的に明確なポジショニング</li>
            </ul>
          </InfoBox>

          <div style={{
            backgroundColor: primitive.white,
            padding: spacing.scale[3],
            borderRadius: radii.borderRadius.base,
            marginTop: spacing.scale[3],
            border: `${borders.width.thin} solid ${primitive.pink[200]}`,
          }}>
            <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
              <code>{`<Tooltip content="追加の説明テキスト" position="top">
  <button>ホバーまたはフォーカス</button>
</Tooltip>`}</code>
            </pre>
          </div>

          <div style={{
            marginTop: spacing.scale[4],
            padding: spacing.scale[3],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.base,
            border: `${borders.width.thin} solid ${primitive.pink[200]}`,
          }}>
            <h5 style={{ marginTop: 0, marginBottom: spacing.scale[3], color: primitive.pink[900], fontSize: typography.fontSize.base }}>
              🎨 実例
            </h5>
            <div style={{ display: 'flex', gap: spacing.scale[4], flexWrap: 'wrap', alignItems: 'center' }}>
              <Tooltip content="これは上に表示されるツールチップです" position="top">
                <Button variant="outline" size="sm">上</Button>
              </Tooltip>
              <Tooltip content="これは下に表示されるツールチップです" position="bottom">
                <Button variant="outline" size="sm">下</Button>
              </Tooltip>
              <Tooltip content="これは左に表示されるツールチップです" position="left">
                <Button variant="outline" size="sm">左</Button>
              </Tooltip>
              <Tooltip content="これは右に表示されるツールチップです" position="right">
                <Button variant="outline" size="sm">右</Button>
              </Tooltip>
              <Tooltip content="このアイコンについての詳細情報" position="top">
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: primitive.pink[100],
                  color: primitive.pink[700],
                  fontSize: typography.fontSize.sm,
                  fontWeight: 'bold',
                  cursor: 'help',
                  textDecoration: 'none',
                }}>
                  ?
                </span>
              </Tooltip>
            </div>
          </div>

          <div style={{
            marginTop: spacing.scale[3],
            padding: spacing.scale[3],
            backgroundColor: primitive.yellow,
            borderRadius: radii.borderRadius.base,
            border: `${borders.width.base} solid ${primitive.black}`,
          }}>
            <h5 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.gray[900], fontSize: typography.fontSize.base }}>
              ⚠️ ツールチップ vs タイトル属性
            </h5>
            <p style={{ color: primitive.gray[900], margin: 0, lineHeight: typography.lineHeight.relaxed }}>
              HTML の title 属性はアクセシビリティの観点から推奨されません。キーボードユーザーには利用できず、タッチデバイスでは表示されないためです。
              代わりに、適切に実装された aria-describedby と role="tooltip" を使用してください。
            </p>
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
            border: `${borders.width.thin} solid ${primitive.blue[200]}`,
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.blue[900] }}>
              <code style={{ backgroundColor: primitive.blue[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>role="button"</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              div や span などの要素をボタンとして扱います。可能な限り &lt;button&gt; 要素を使用してください。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.blue[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
            backgroundColor: primitive.pink[50],
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.pink[200]}`,
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.pink[900] }}>
              <code style={{ backgroundColor: primitive.pink[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>role="dialog"</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              モーダルダイアログを示します。aria-labelledby または aria-label と組み合わせて使用します。
            </p>

            <InfoBox variant="tip" icon="💡" title="モーダルのアクセシビリティ要件" style={{ marginTop: spacing.scale[3] }}>
              <ul style={{ lineHeight: typography.lineHeight.relaxed, margin: 0, paddingLeft: spacing.scale[5] }}>
                <li>role="dialog" と aria-modal="true" を使用</li>
                <li>aria-labelledby でタイトルを参照</li>
                <li>フォーカストラップ（Tab キーでモーダル内を循環）</li>
                <li>Esc キーで閉じる機能</li>
                <li>背景スクロールの防止</li>
                <li>開いた時に最初のフォーカス可能要素にフォーカス</li>
                <li>閉じた時に元の場所にフォーカスを戻す</li>
              </ul>
            </InfoBox>

            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[3],
              border: `${borders.width.thin} solid ${primitive.pink[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
                <code>{`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="確認"
>
  この操作を実行してもよろしいですか？
</Modal>`}</code>
              </pre>
            </div>

            <div style={{ marginTop: spacing.scale[3] }}>
              <Button onClick={() => setIsModalOpen(true)} variant="primary">
                モーダルを開く
              </Button>
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="アクセシブルなモーダル"
                footer={
                  <>
                    <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                      キャンセル
                    </Button>
                    <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                      OK
                    </Button>
                  </>
                }
              >
                <p style={{ margin: 0, color: primitive.gray[700] }}>
                  このモーダルは以下のアクセシビリティ機能を実装しています：
                </p>
                <ul style={{ color: primitive.gray[700], lineHeight: typography.lineHeight.relaxed }}>
                  <li>フォーカストラップ（Tabキーでモーダル内を循環）</li>
                  <li>Escキーで閉じる</li>
                  <li>背景スクロール防止</li>
                  <li>適切なARIA属性（role="dialog", aria-modal="true"）</li>
                  <li>閉じた後、元の要素にフォーカスを戻す</li>
                </ul>
              </Modal>
            </div>
          </div>

          {/* role="navigation" */}
          <div style={{
            padding: spacing.scale[4],
            backgroundColor: primitive.green[50],
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.thin} solid ${primitive.green[200]}`,
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.green[900] }}>
              <code style={{ backgroundColor: primitive.green[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>role="navigation"</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              ナビゲーションリンクのグループを示します。&lt;nav&gt; 要素を使用すれば、暗黙的にこのroleが付与されます。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.green[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
            border: `${borders.width.thin} solid ${primitive.red[200]}`,
          }}>
            <h4 style={{ marginTop: 0, marginBottom: spacing.scale[2], color: primitive.red[900] }}>
              <code style={{ backgroundColor: primitive.red[100], padding: `${spacing.scale[2]} ${spacing.scale[4]}`, borderRadius: spacing.scale[2] }}>role="alert"</code>
            </h4>
            <p style={{ color: primitive.gray[700], marginTop: 0 }}>
              重要なメッセージを即座にスクリーンリーダーに通知します。エラーメッセージや警告に使用します。
            </p>
            <div style={{
              backgroundColor: primitive.white,
              padding: spacing.scale[3],
              borderRadius: radii.borderRadius.base,
              marginTop: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.red[200]}`,
            }}>
              <pre style={{ margin: 0, fontSize: typography.fontSize.sm, overflow: 'auto', color: primitive.gray[900] }}>
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
        border: `${borders.width.base} solid ${primitive.black}`,
      }}>
        <h4 style={{ color: primitive.gray[900], marginTop: 0 }}>
          💡 ARIAの第一原則
        </h4>
        <ul style={{ color: primitive.gray[900], lineHeight: typography.lineHeight.relaxed }}>
          <li><strong>セマンティックHTMLを優先する</strong>: 可能な限り、適切なHTML要素を使用してください</li>
          <li><strong>ARIAは最後の手段</strong>: ネイティブHTML要素で実現できない場合のみARIAを使用</li>
          <li><strong>不要なARIAは追加しない</strong>: &lt;button&gt; に role="button" は不要です</li>
          <li><strong>テストを忘れずに</strong>: スクリーンリーダーで実際に確認してください</li>
        </ul>
      </div>

      {/* 試してみようセクション */}
      <div style={{ marginTop: spacing.scale[8] }}>
        <h3
          style={{
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.semibold,
            color: primitive.pink[700],
            marginBottom: spacing.scale[4],
            display: "flex",
            alignItems: "center",
            gap: spacing.scale[2],
          }}
        >
          <icons.component.button size={24} color={primitive.pink[600]} strokeWidth={2} />
          4. インタラクティブデモ：試してみよう
        </h3>

        <div style={{ display: "grid", gap: spacing.scale[6] }}>
          {/* ARIA属性の有無を比較 */}
          <ARIAComparisonDemo />

          {/* スクリーンリーダーシミュレーター */}
          <ScreenReaderSimulator />

          {/* 動的なaria-live */}
          <LiveRegionDemo />
        </div>
      </div>

      <div style={{
        marginTop: spacing.scale[6],
        padding: spacing.scale[4],
        backgroundColor: primitive.blue[50],
        borderRadius: radii.borderRadius.md,
        border: `${borders.width.thin} solid ${primitive.blue[200]}`,
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
  );
};

// ARIA属性の有無を比較するデモ
function ARIAComparisonDemo() {
  const [selectedExample, setSelectedExample] = useState<'button' | 'input' | 'link'>('button');

  const examples = {
    button: {
      title: "アイコンのみのボタン",
      bad: {
        code: '<button>\n  <XIcon />\n</button>',
        element: (
          <button
            style={{
              padding: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.gray[300]}`,
              borderRadius: radii.borderRadius.md,
              backgroundColor: primitive.white,
              cursor: "pointer",
              color: primitive.gray[900],
              fontSize: typography.fontSize.lg,
            }}
          >
            ✕
          </button>
        ),
        screenReader: "ボタン",
        issue: "何のボタンか分からない",
      },
      good: {
        code: '<button aria-label="閉じる">\n  <XIcon />\n</button>',
        element: (
          <button
            aria-label="閉じる"
            style={{
              padding: spacing.scale[2],
              border: `${borders.width.thin} solid ${primitive.gray[300]}`,
              borderRadius: radii.borderRadius.md,
              backgroundColor: primitive.white,
              cursor: "pointer",
              color: primitive.gray[900],
              fontSize: typography.fontSize.lg,
            }}
          >
            ✕
          </button>
        ),
        screenReader: "閉じる ボタン",
        benefit: "明確な目的を伝える",
      },
    },
    input: {
      title: "エラーのあるフォーム",
      bad: {
        code: '<input type="email" />\n<span style="color: red">\n  無効なメールアドレス\n</span>',
        element: (
          <div>
            <input
              type="email"
              style={{
                padding: spacing.scale[2],
                border: `${borders.width.base} solid ${primitive.red[500]}`,
                borderRadius: radii.borderRadius.md,
                width: "100%",
              }}
            />
            <span style={{ color: primitive.red[700], fontSize: typography.fontSize.sm }}>
              無効なメールアドレス
            </span>
          </div>
        ),
        screenReader: "メールアドレス 編集可能",
        issue: "エラーメッセージが読まれない",
      },
      good: {
        code: '<input\n  type="email"\n  aria-invalid="true"\n  aria-describedby="error-msg"\n/>\n<span id="error-msg" role="alert">\n  無効なメールアドレス\n</span>',
        element: (
          <div>
            <input
              type="email"
              aria-invalid="true"
              aria-describedby="good-error-msg"
              style={{
                padding: spacing.scale[2],
                border: `${borders.width.base} solid ${primitive.red[500]}`,
                borderRadius: radii.borderRadius.md,
                width: "100%",
              }}
            />
            <span
              id="good-error-msg"
              role="alert"
              style={{ color: primitive.red[700], fontSize: typography.fontSize.sm }}
            >
              無効なメールアドレス
            </span>
          </div>
        ),
        screenReader: "メールアドレス 無効 編集可能 無効なメールアドレス",
        benefit: "エラー内容を即座に伝える",
      },
    },
    link: {
      title: "「詳しくはこちら」リンク",
      bad: {
        code: '<a href="/about">詳しくはこちら</a>',
        element: (
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              color: primitive.blue[700],
              textDecoration: "underline",
            }}
          >
            詳しくはこちら
          </a>
        ),
        screenReader: "詳しくはこちら リンク",
        issue: "何について詳しいのか不明",
      },
      good: {
        code: '<a\n  href="/about"\n  aria-label="会社概要について詳しく見る"\n>\n  詳しくはこちら\n</a>',
        element: (
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label="会社概要について詳しく見る"
            style={{
              color: primitive.blue[700],
              textDecoration: "underline",
            }}
          >
            詳しくはこちら
          </a>
        ),
        screenReader: "会社概要について詳しく見る リンク",
        benefit: "リンク先の内容が明確",
      },
    },
  };

  const current = examples[selectedExample];

  return (
    <div
      style={{
        padding: spacing.scale[4],
        backgroundColor: primitive.pink[50],
        borderRadius: radii.borderRadius.md,
        border: `${borders.width.thin} solid ${primitive.pink[200]}`,
        minWidth: 0,
        maxWidth: '100%'
      }}
    >
      <h4
        style={{
          marginTop: 0,
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.semibold,
          color: primitive.pink[900],
        }}
      >
        🔍 ARIA属性の効果を比較
      </h4>

      <div style={{ display: "flex", gap: spacing.scale[2], marginTop: spacing.scale[3], flexWrap: "wrap" }}>
        {(Object.keys(examples) as Array<keyof typeof examples>).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedExample(key)}
            style={{
              padding: `${spacing.scale[2]} ${spacing.scale[3]}`,
              border: `${borders.width.base} solid ${selectedExample === key ? primitive.pink[500] : primitive.gray[300]}`,
              borderRadius: radii.borderRadius.md,
              backgroundColor: selectedExample === key ? primitive.pink[100] : primitive.white,
              color: selectedExample === key ? primitive.pink[900] : primitive.gray[700],
              cursor: "pointer",
              fontWeight: selectedExample === key ? typography.fontWeight.semibold : typography.fontWeight.normal,
            }}
          >
            {examples[key].title}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: spacing.scale[4],
          marginTop: spacing.scale[4],
        }}
      >
        {/* 悪い例 */}
        <div
          style={{
            padding: spacing.scale[3],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.base} solid ${primitive.red[300]}`,
            minWidth: 0
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: spacing.scale[2],
              marginBottom: spacing.scale[2],
            }}
          >
            <span style={{ fontSize: typography.fontSize.lg }}>❌</span>
            <strong style={{ color: primitive.red[700] }}>ARIA属性なし</strong>
          </div>

          <div
            style={{
              padding: spacing.scale[3],
              backgroundColor: primitive.gray[50],
              borderRadius: radii.borderRadius.sm,
              marginBottom: spacing.scale[2],
            }}
          >
            {current.bad.element}
          </div>

          <pre
            style={{
              margin: 0,
              marginBottom: spacing.scale[2],
              padding: spacing.scale[2],
              backgroundColor: primitive.gray[900],
              color: primitive.green[400],
              borderRadius: radii.borderRadius.sm,
              fontSize: typography.fontSize.xs,
              overflow: "auto",
            }}
          >
            {current.bad.code}
          </pre>

          <div
            style={{
              padding: spacing.scale[2],
              backgroundColor: primitive.blue[50],
              borderRadius: radii.borderRadius.sm,
              fontSize: typography.fontSize.sm,
            }}
          >
            <strong style={{ color: primitive.blue[900] }}>スクリーンリーダー:</strong>
            <div style={{ marginTop: spacing.scale[1], color: primitive.gray[700], fontStyle: "italic" }}>
              "{current.bad.screenReader}"
            </div>
          </div>

          <div
            style={{
              marginTop: spacing.scale[2],
              padding: spacing.scale[2],
              backgroundColor: primitive.red[50],
              borderRadius: radii.borderRadius.sm,
              fontSize: typography.fontSize.sm,
              color: primitive.red[900],
            }}
          >
            ⚠️ 問題: {current.bad.issue}
          </div>
        </div>

        {/* 良い例 */}
        <div
          style={{
            padding: spacing.scale[3],
            backgroundColor: primitive.white,
            borderRadius: radii.borderRadius.md,
            border: `${borders.width.base} solid ${primitive.green[300]}`,
            minWidth: 0
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: spacing.scale[2],
              marginBottom: spacing.scale[2],
            }}
          >
            <span style={{ fontSize: typography.fontSize.lg }}>✅</span>
            <strong style={{ color: primitive.green[700] }}>ARIA属性あり</strong>
          </div>

          <div
            style={{
              padding: spacing.scale[3],
              backgroundColor: primitive.gray[50],
              borderRadius: radii.borderRadius.sm,
              marginBottom: spacing.scale[2],
            }}
          >
            {current.good.element}
          </div>

          <pre
            style={{
              margin: 0,
              marginBottom: spacing.scale[2],
              padding: spacing.scale[2],
              backgroundColor: primitive.gray[900],
              color: primitive.green[400],
              borderRadius: radii.borderRadius.sm,
              fontSize: typography.fontSize.xs,
              overflow: "auto",
            }}
          >
            {current.good.code}
          </pre>

          <div
            style={{
              padding: spacing.scale[2],
              backgroundColor: primitive.blue[50],
              borderRadius: radii.borderRadius.sm,
              fontSize: typography.fontSize.sm,
            }}
          >
            <strong style={{ color: primitive.blue[900] }}>スクリーンリーダー:</strong>
            <div style={{ marginTop: spacing.scale[1], color: primitive.gray[700], fontStyle: "italic" }}>
              "{current.good.screenReader}"
            </div>
          </div>

          <div
            style={{
              marginTop: spacing.scale[2],
              padding: spacing.scale[2],
              backgroundColor: primitive.green[50],
              borderRadius: radii.borderRadius.sm,
              fontSize: typography.fontSize.sm,
              color: primitive.green[900],
            }}
          >
            ✓ 改善: {current.good.benefit}
          </div>
        </div>
      </div>
    </div>
  );
}

// スクリーンリーダーシミュレーター
function ScreenReaderSimulator() {
  const [isReading, setIsReading] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const simulateReading = () => {
    setIsReading(true);
    const texts = [
      "ボタン",
      "閉じる",
      "クリック可能",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < texts.length) {
        setCurrentText(texts[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsReading(false);
        setCurrentText("");
      }
    }, 800);
  };

  return (
    <div
      style={{
        padding: spacing.scale[4],
        backgroundColor: primitive.blue[50],
        borderRadius: radii.borderRadius.md,
        border: `${borders.width.thin} solid ${primitive.blue[200]}`,
        minWidth: 0,
        maxWidth: '100%'
      }}
    >
      <h4
        style={{
          marginTop: 0,
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.semibold,
          color: primitive.blue[900],
        }}
      >
        🔊 スクリーンリーダーシミュレーター
      </h4>

      <p style={{ color: primitive.gray[700], fontSize: typography.fontSize.sm }}>
        ボタンをクリックして、スクリーンリーダーがどのように読み上げるかを確認できます
      </p>

      <div style={{ marginTop: spacing.scale[4], display: "flex", gap: spacing.scale[4], alignItems: "center", flexWrap: "wrap" }}>
        <button
          onClick={simulateReading}
          disabled={isReading}
          aria-label="閉じる"
          style={{
            padding: spacing.scale[3],
            border: `${borders.width.base} solid ${primitive.blue[500]}`,
            borderRadius: radii.borderRadius.md,
            backgroundColor: primitive.white,
            cursor: isReading ? "not-allowed" : "pointer",
            fontSize: typography.fontSize.lg,
            opacity: isReading ? 0.6 : 1,
            color: primitive.gray[900],
          }}
        >
          ✕
        </button>

        <div
          style={{
            flex: 1,
            padding: spacing.scale[3],
            backgroundColor: primitive.gray[900],
            color: primitive.green[400],
            borderRadius: radii.borderRadius.md,
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            fontSize: typography.fontSize.lg,
            fontWeight: typography.fontWeight.semibold,
          }}
        >
          {isReading ? (
            <span style={{ animation: "pulse 1s infinite" }}>🔊 {currentText}</span>
          ) : (
            <span style={{ color: primitive.gray[600] }}>クリックして読み上げを開始...</span>
          )}
        </div>
      </div>

      <pre
        style={{
          marginTop: spacing.scale[3],
          padding: spacing.scale[3],
          backgroundColor: primitive.gray[900],
          color: primitive.green[400],
          borderRadius: radii.borderRadius.md,
          fontSize: typography.fontSize.sm,
          overflow: "auto",
        }}
      >
        {`<button aria-label="閉じる">
  ✕
</button>

// スクリーンリーダーが読み上げる内容:
// "ボタン" → "閉じる" → "クリック可能"`}
      </pre>
    </div>
  );
}

// aria-live デモ
function LiveRegionDemo() {
  const [message, setMessage] = useState("");
  const [messageCount, setMessageCount] = useState(0);

  const addMessage = (type: 'success' | 'error' | 'info') => {
    const messages = {
      success: "✓ 保存に成功しました",
      error: "✕ エラーが発生しました",
      info: "ℹ 処理中です...",
    };
    setMessage(messages[type]);
    setMessageCount(messageCount + 1);
  };

  return (
    <div
      style={{
        padding: spacing.scale[4],
        backgroundColor: primitive.green[50],
        borderRadius: radii.borderRadius.md,
        border: `${borders.width.thin} solid ${primitive.green[200]}`,
        minWidth: 0,
        maxWidth: '100%'
      }}
    >
      <h4
        style={{
          marginTop: 0,
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.semibold,
          color: primitive.green[900],
        }}
      >
        📢 aria-live デモ（動的な通知）
      </h4>

      <p style={{ color: primitive.gray[700], fontSize: typography.fontSize.sm }}>
        aria-live を使うと、画面の変更をスクリーンリーダーに自動で通知できます
      </p>

      <div style={{ display: "flex", gap: spacing.scale[2], marginTop: spacing.scale[3], flexWrap: "wrap" }}>
        <Button variant="primary" size="sm" onClick={() => addMessage('success')}>
          成功メッセージ
        </Button>
        <Button variant="danger" size="sm" onClick={() => addMessage('error')}>
          エラーメッセージ
        </Button>
        <Button variant="secondary" size="sm" onClick={() => addMessage('info')}>
          情報メッセージ
        </Button>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          marginTop: spacing.scale[3],
          padding: spacing.scale[3],
          backgroundColor: primitive.white,
          border: `${borders.width.base} solid ${primitive.green[300]}`,
          borderRadius: radii.borderRadius.md,
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: typography.fontSize.base,
        }}
      >
        {message || <span style={{ color: primitive.gray[500] }}>ボタンをクリックしてメッセージを表示</span>}
      </div>

      <pre
        style={{
          marginTop: spacing.scale[3],
          padding: spacing.scale[3],
          backgroundColor: primitive.gray[900],
          color: primitive.green[400],
          borderRadius: radii.borderRadius.md,
          fontSize: typography.fontSize.sm,
          overflow: "auto",
        }}
      >
        {`<div
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>

// aria-live="polite": 適切なタイミングで読み上げ
// aria-live="assertive": すぐに読み上げ（緊急時）
// aria-atomic="true": 領域全体を読み上げ`}
      </pre>

      <div
        style={{
          marginTop: spacing.scale[3],
          padding: spacing.scale[2],
          backgroundColor: primitive.yellow,
          border: `${borders.width.base} solid ${primitive.black}`,
          borderRadius: radii.borderRadius.sm,
          fontSize: typography.fontSize.sm,
          color: primitive.gray[900],
        }}
      >
        <strong>💡 ヒント:</strong> メッセージが変更されると、スクリーンリーダーが自動的に読み上げます（通知回数: {messageCount}回）
      </div>
    </div>
  );
}
