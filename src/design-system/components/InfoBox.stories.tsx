import type { Meta, StoryObj } from '@storybook/react';
import { InfoBox } from './InfoBox';
import { spacing } from '../tokens';

const meta = {
  title: 'Design System/InfoBox',
  component: InfoBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
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
