import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'Components/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '絵文字付き見出しコンポーネント。App.tsxで頻繁に使用される「絵文字 + 見出し」パターンを統一します。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    emoji: {
      control: 'text',
      description: '見出しの前に表示する絵文字',
    },
    level: {
      control: 'select',
      options: ['h2', 'h3', 'h4'],
      description: '見出しレベル',
      defaultValue: 'h3',
    },
    children: {
      control: 'text',
      description: '見出しテキスト',
    },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'セクション見出し',
  },
};

export const WithEmoji: Story = {
  args: {
    emoji: '🎨',
    children: 'カラー（colors.ts）',
  },
  parameters: {
    docs: {
      description: {
        story: '絵文字付きの見出し。デザイントークンセクションでよく使用されるパターン。',
      },
    },
  },
};

export const AllLevels: Story = {
  args: {
    children: 'Default (h3)',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SectionHeading level="h2" emoji="📦">
        Level H2 - 大見出し
      </SectionHeading>
      <SectionHeading level="h3" emoji="🎨">
        Level H3 - 中見出し（デフォルト）
      </SectionHeading>
      <SectionHeading level="h4" emoji="💡">
        Level H4 - 小見出し
      </SectionHeading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '見出しレベル（h2/h3/h4）の違いを表示。デフォルトはh3。',
      },
    },
  },
};

export const VariousEmojis: Story = {
  args: {
    children: 'Default',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SectionHeading emoji="🎨">カラー（colors.ts）</SectionHeading>
      <SectionHeading emoji="🌍">トークンの3階層とは？</SectionHeading>
      <SectionHeading emoji="📐">ボーダー半径（radii.ts）</SectionHeading>
      <SectionHeading emoji="📏">スペーシング（spacing.ts）</SectionHeading>
      <SectionHeading emoji="🔤">タイポグラフィ（typography.ts）</SectionHeading>
      <SectionHeading emoji="💡">ヒントとコツ</SectionHeading>
      <SectionHeading emoji="⚠️">注意事項</SectionHeading>
      <SectionHeading emoji="✅">完了したタスク</SectionHeading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'App.tsxで実際に使用されている絵文字の例。用途に応じて適切な絵文字を選択できます。',
      },
    },
  },
};

export const WithoutEmoji: Story = {
  args: {
    children: '絵文字なしの見出し',
  },
  parameters: {
    docs: {
      description: {
        story: '絵文字なしの通常の見出し。スタイルは統一されています。',
      },
    },
  },
};

export const UsageExample: Story = {
  args: {
    children: 'Default',
  },
  render: () => (
    <div>
      <SectionHeading emoji="🎯">コンポーネントの使い方</SectionHeading>
      <p style={{ lineHeight: 1.6, color: '#4a5568' }}>
        このコンポーネントは、App.tsx内で繰り返し使用される「絵文字 + 見出し」パターンを統一するために作成されました。
      </p>
      <pre style={{
        marginTop: '16px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        overflow: 'auto',
      }}>
        <code>{`// 絵文字付き
<SectionHeading emoji="🎨">カラー</SectionHeading>

// 絵文字なし
<SectionHeading>基本的な使い方</SectionHeading>

// 見出しレベル指定
<SectionHeading level="h2" emoji="📦">
  大見出し
</SectionHeading>`}</code>
      </pre>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### 使用方法

このコンポーネントは、App.tsxで頻繁に使用される見出しパターンを統一します。

**メリット:**
- コードの重複削減（スタイル定義が1箇所に）
- 見出しスタイルの統一
- メンテナンス性向上
- 絵文字の追加が簡単

**配置場所:**
\`src/components/\` - アプリ固有のコンポーネント

**Props:**
- \`emoji?: string\` - 見出しの前に表示する絵文字
- \`level?: 'h2' | 'h3' | 'h4'\` - 見出しレベル（デフォルト: h3）
- \`children: React.ReactNode\` - 見出しテキスト
- \`style?: React.CSSProperties\` - カスタムスタイル
        `,
      },
    },
  },
};
