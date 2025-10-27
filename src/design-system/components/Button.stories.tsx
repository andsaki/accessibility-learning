import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * アクセシブルなボタンコンポーネント
 *
 * WCAG 2.1 AA準拠のボタンコンポーネントです。
 * キーボード操作、スクリーンリーダー対応、適切なカラーコントラストを備えています。
 */
const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    // a11yアドオンの設定
    a11y: {
      config: {
        rules: [
          {
            // ボタンの名前が必須
            id: 'button-name',
            enabled: true,
          },
          {
            // カラーコントラスト
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
      options: ['primary', 'secondary', 'outline'],
      description: 'ボタンのバリエーション',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'ボタンのサイズ',
    },
    isLoading: {
      control: 'boolean',
      description: 'ローディング状態',
    },
    disabled: {
      control: 'boolean',
      description: '無効化状態',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * プライマリボタン（デフォルト）
 *
 * 主要なアクションに使用します。
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '保存',
  },
};

/**
 * セカンダリボタン
 *
 * 副次的なアクションに使用します。
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'キャンセル',
  },
};

/**
 * アウトラインボタン
 *
 * 控えめなアクションに使用します。
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '詳細を見る',
  },
};

/**
 * 小サイズ
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: '小さいボタン',
  },
};

/**
 * 中サイズ（デフォルト）
 */
export const Medium: Story = {
  args: {
    size: 'md',
    children: '普通のボタン',
  },
};

/**
 * 大サイズ
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: '大きいボタン',
  },
};

/**
 * ローディング状態
 *
 * 非同期処理中の状態を示します。
 * aria-busy属性でスクリーンリーダーに状態を伝えます。
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    children: '送信中...',
  },
};

/**
 * 無効化状態
 *
 * ボタンが使用できない状態を示します。
 * aria-disabled属性でスクリーンリーダーに状態を伝えます。
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: '無効なボタン',
  },
};

/**
 * アイコン付きボタン
 *
 * アイコンは装飾的なのでaria-hidden="true"を設定しています。
 */
export const WithIcon: Story = {
  args: {
    icon: '🚀',
    children: 'ロケットを発射',
  },
};

/**
 * すべてのバリエーション
 *
 * 各バリエーションを並べて比較できます。
 */
export const AllVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

/**
 * すべてのサイズ
 *
 * 各サイズを並べて比較できます。
 */
export const AllSizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * すべての状態
 *
 * 通常、ローディング、無効化の状態を比較できます。
 */
export const AllStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button>通常</Button>
      <Button isLoading>ローディング</Button>
      <Button disabled>無効化</Button>
    </div>
  ),
};
