import type { Meta, StoryObj } from '@storybook/react';
import { TableOfContents } from './TableOfContents';

const meta = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'デスクトップ用の目次ナビゲーション。スクロール位置に応じて自動的にハイライトし、sticky positioningで追従します。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: '目次項目の配列',
    },
  },
} satisfies Meta<typeof TableOfContents>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { id: 'section-1', title: 'はじめに' },
  { id: 'section-2', title: 'インストール' },
  { id: 'section-3', title: '使い方' },
  { id: 'section-4', title: 'API リファレンス' },
  { id: 'section-5', title: 'トラブルシューティング' },
];

// スクロール可能なデモページ
const ScrollableDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '32px', minHeight: '200vh' }}>
      <div style={{ width: '280px', flexShrink: 0 }}>
        <TableOfContents items={mockItems} />
      </div>

      <div style={{ flex: 1 }}>
        <h1>デモページ</h1>
        <p>このページをスクロールすると、左側の目次が自動的にハイライトされます。</p>

        {mockItems.map((item) => (
          <section
            key={item.id}
            id={item.id}
            style={{
              minHeight: '400px',
              padding: '20px',
              marginBottom: '20px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
            }}
          >
            <h2>{item.title}</h2>
            <p>
              これは「{item.title}」セクションのコンテンツです。
              スクロールすると目次のハイライトが変わります。
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export const Default: Story = {
  args: {
    items: mockItems,
  },
  render: () => <ScrollableDemo />,
  parameters: {
    docs: {
      description: {
        story: 'ページをスクロールすると、現在表示されているセクションが目次でハイライトされます。目次項目をクリックすると該当セクションにスムーズスクロールします。',
      },
    },
  },
};

export const BasicList: Story = {
  args: {
    items: mockItems,
  },
  parameters: {
    docs: {
      description: {
        story: '基本的な目次のリスト表示。実際のページでは、Intersection Observerによって現在のセクションが検出されます。',
      },
    },
  },
};

export const LongList: Story = {
  args: {
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `section-${i + 1}`,
      title: `セクション ${i + 1}`,
    })),
  },
  parameters: {
    docs: {
      description: {
        story: '長いリストの場合、目次コンテナ内でスクロール可能です（max-height設定により）。',
      },
    },
  },
};

export const ShortList: Story = {
  args: {
    items: [
      { id: 'intro', title: 'イントロダクション' },
      { id: 'conclusion', title: 'まとめ' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: '項目が少ない場合のシンプルな目次。',
      },
    },
  },
};

export const Accessibility: Story = {
  args: {
    items: mockItems,
  },
  render: () => <ScrollableDemo />,
  parameters: {
    docs: {
      description: {
        story: `
### アクセシビリティ機能

- **nav要素**: セマンティックなナビゲーション要素を使用
- **aria-label="目次"**: ナビゲーションの目的を明示
- **キーボードナビゲーション**: Tabキーで項目を移動、Enterキーで選択
- **視覚的フィードバック**: ホバー時とアクティブ時の明確なスタイル変化
- **フォーカス表示**: キーボード操作時にフォーカスが明確に表示
- **スムーズスクロール**: behavior: 'smooth'による視覚的な移動
- **コントラスト比**: WCAG AA準拠のカラーコントラスト
- **sticky positioning**: スクロール時も常に表示されて操作可能

### Intersection Observer

このコンポーネントは、Intersection Observer APIを使用して現在表示されているセクションを自動検出します。

- **rootMargin**: '-20% 0px -70% 0px' で検出範囲を調整
- **自動ハイライト**: 画面に入ったセクションを自動的にハイライト
- **パフォーマンス**: スクロールイベントではなくIntersection Observerを使用
`,
      },
    },
  },
};
