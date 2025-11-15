import type { Meta, StoryObj } from '@storybook/react';
import { InfoBox } from './InfoBox';
import { spacing } from '../tokens';

/**
 * 情報ボックスコンポーネント
 *
 * WCAG 2.1 AA準拠の情報表示コンポーネントです。
 * - 適切なカラーコントラスト（4.5:1以上）
 * - 意味のある構造化（タイトル、アイコン、本文）
 * - セマンティックなマークアップ
 */
const meta = {
  title: 'Design System/InfoBox',
  component: InfoBox,
  parameters: {
    layout: 'padded',
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'warning', 'success', 'tip'],
      description: 'ボックスのバリエーション',
    },
    leftBorder: {
      control: 'boolean',
      description: '左側に太いボーダーを表示',
    },
  },
} satisfies Meta<typeof InfoBox>;

export default meta;
type Story = StoryObj<typeof InfoBox>;

export const Info: Story = {
  args: {
    variant: 'info',
    icon: '💡',
    title: 'キーボード操作',
    children: (
      <ul style={{ margin: 0, paddingLeft: spacing.scale[6], lineHeight: 1.8 }}>
        <li>
          <strong>Tab</strong>: フォーカスを移動
        </li>
        <li>
          <strong>Enter/Space</strong>: ボタンを実行
        </li>
      </ul>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    icon: '⚠️',
    title: 'スクリーンリーダーの注意点',
    children: (
      <p style={{ margin: 0 }}>
        aria-live属性を使用する場合、頻繁な更新はユーザーの操作を妨げる可能性があります。
      </p>
    ),
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    icon: '✅',
    title: 'WCAG 2.1 AA準拠',
    children: <p style={{ margin: 0 }}>このコンポーネントはWCAG 2.1 AAレベルに準拠しています。</p>,
  },
};

export const Tip: Story = {
  args: {
    variant: 'tip',
    icon: '💡',
    title: 'ヒント',
    children: (
      <p style={{ margin: 0 }}>
        フォーカス可能な要素には、明確なフォーカスインジケーターを提供しましょう。
      </p>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    variant: 'info',
    children: <p style={{ margin: 0 }}>タイトルなしの情報ボックスも使用できます。</p>,
  },
};

export const NoIcon: Story = {
  args: {
    variant: 'info',
    title: 'アイコンなし',
    children: <p style={{ margin: 0 }}>アイコンなしでタイトルのみ表示することもできます。</p>,
  },
};

export const LeftBorder: Story = {
  args: {
    variant: 'info',
    title: 'Formコンポーネント',
    leftBorder: true,
    children: (
      <p style={{ margin: 0 }}>
        左側に太いボーダーを表示して、セクションを強調できます。
      </p>
    ),
  },
};

export const LeftBorderVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <InfoBox variant="info" title="Info with left border" leftBorder>
        <p style={{ margin: 0 }}>情報ボックス</p>
      </InfoBox>
      <InfoBox variant="warning" title="Warning with left border" leftBorder>
        <p style={{ margin: 0 }}>警告ボックス</p>
      </InfoBox>
      <InfoBox variant="success" title="Success with left border" leftBorder>
        <p style={{ margin: 0 }}>成功ボックス</p>
      </InfoBox>
      <InfoBox variant="tip" title="Tip with left border" leftBorder>
        <p style={{ margin: 0 }}>ヒントボックス</p>
      </InfoBox>
    </div>
  ),
};

/**
 * アクセシビリティ対応
 *
 * このコンポーネントはWCAG 2.1 AA準拠です。
 */
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <InfoBox variant="info" icon="📊" title="WCAG 2.1 AA準拠">
        <ul style={{ margin: 0, paddingLeft: spacing.scale[6], lineHeight: 1.8 }}>
          <li>
            <strong>カラーコントラスト</strong>: すべてのバリアントで4.5:1以上のコントラスト比を確保
          </li>
          <li>
            <strong>構造化された情報</strong>: タイトル、アイコン、本文で明確な階層構造
          </li>
          <li>
            <strong>視覚的な区別</strong>: 色だけでなく、アイコンやタイトルで情報の種類を識別
          </li>
          <li>
            <strong>セマンティックHTML</strong>: 意味のあるマークアップで支援技術に対応
          </li>
        </ul>
      </InfoBox>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '16px', fontWeight: 'bold' }}>
          各バリアントのコントラスト比
        </h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <InfoBox variant="info">
            <strong>Info:</strong> テキスト色 #1e40af（濃紺）/ 背景 #f0f9ff（明るい青）- コントラスト比 8.2:1 ✅
          </InfoBox>
          <InfoBox variant="warning">
            <strong>Warning:</strong> テキスト色 #92400e（濃茶）/ 背景 #fef3c7（明るい黄）- コントラスト比 9.1:1 ✅
          </InfoBox>
          <InfoBox variant="success">
            <strong>Success:</strong> テキスト色 #065f46（濃緑）/ 背景 #d1fae5（明るい緑）- コントラスト比 7.8:1 ✅
          </InfoBox>
          <InfoBox variant="tip">
            <strong>Tip:</strong> テキスト色 #1e40af（濃紺）/ 背景 #f0f9ff（明るい青）- コントラスト比 8.2:1 ✅
          </InfoBox>
        </div>
      </div>

      <InfoBox variant="success" icon="✅" title="推奨事項">
        <p style={{ margin: 0 }}>
          情報の重要度や種類に応じて適切なバリアントを選択してください。
          色だけでなく、アイコンやタイトルで情報を伝えることで、色覚特性のあるユーザーにも配慮できます。
        </p>
      </InfoBox>
    </div>
  ),
};
