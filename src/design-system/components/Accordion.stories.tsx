import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionSummary, AccordionContent } from './Accordion';

const meta = {
  title: 'Design System/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ネイティブの`<details>`/`<summary>`要素を使用したアクセシブルなアコーディオンコンポーネント。キーボード操作とスクリーンリーダーに完全対応。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: '初期状態で開いているか',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: false,
    children: null,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionSummary>アコーディオンのタイトル</AccordionSummary>
      <AccordionContent>
        <p>
          これはアコーディオンのコンテンツです。クリックまたはEnter/Spaceキーで開閉できます。
        </p>
      </AccordionContent>
    </Accordion>
  ),
};

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionSummary>開いた状態のアコーディオン</AccordionSummary>
      <AccordionContent>
        <p>
          このアコーディオンは初期状態で開いています。`defaultOpen`プロパティを`true`に設定することで実現できます。
        </p>
      </AccordionContent>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    defaultOpen: false,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Accordion>
        <AccordionSummary>質問1: アクセシビリティとは何ですか？</AccordionSummary>
        <AccordionContent>
          <p>
            アクセシビリティとは、障害の有無に関わらず、すべての人がWebサイトやアプリケーションを利用できるようにすることです。
          </p>
          <p style={{ marginTop: '8px' }}>
            視覚障害、聴覚障害、運動障害、認知障害など、さまざまな障害を持つ人々が情報にアクセスできるようにする必要があります。
          </p>
        </AccordionContent>
      </Accordion>

      <Accordion defaultOpen>
        <AccordionSummary>質問2: WCAGとは何ですか？</AccordionSummary>
        <AccordionContent>
          <p>
            WCAG（Web Content Accessibility Guidelines）は、Webコンテンツをよりアクセシブルにするための国際的なガイドラインです。
          </p>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>レベルA: 最低限のアクセシビリティ</li>
            <li>レベルAA: 推奨される標準（ほとんどのサイトで目指すべき）</li>
            <li>レベルAAA: 最高レベルのアクセシビリティ</li>
          </ul>
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionSummary>質問3: デザイントークンとは何ですか？</AccordionSummary>
        <AccordionContent>
          <p>
            デザイントークンは、色、サイズ、間隔などのデザイン要素を変数として定義したものです。
          </p>
          <p style={{ marginTop: '8px' }}>
            一貫性のあるデザインシステムを構築し、保守性を高めるために使用されます。
          </p>
        </AccordionContent>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '複数のアコーディオンを縦に並べた例。それぞれ独立して開閉できます。',
      },
    },
  },
};

export const RichContent: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionSummary>デザイントークンの3層構造</AccordionSummary>
      <AccordionContent>
        <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 600 }}>
          Primitive → Global → Component
        </h3>

        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ marginBottom: '8px', fontWeight: 600 }}>1. Primitive Tokens（基礎トークン）</h4>
          <p style={{ marginBottom: '8px' }}>
            最も基本的な値。色のパレット、フォントサイズなど。
          </p>
          <code style={{
            display: 'block',
            padding: '8px 12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
            blue-500: '#2196f3'
          </code>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ marginBottom: '8px', fontWeight: 600 }}>2. Global Tokens（グローバルトークン）</h4>
          <p style={{ marginBottom: '8px' }}>
            用途別に名前を付けた値。ブランドカラー、フィードバック色など。
          </p>
          <code style={{
            display: 'block',
            padding: '8px 12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
            brand.primary: primitive.blue[500]
          </code>
        </div>

        <div>
          <h4 style={{ marginBottom: '8px', fontWeight: 600 }}>3. Component Tokens（コンポーネントトークン）</h4>
          <p style={{ marginBottom: '8px' }}>
            特定のコンポーネント専用の値。ボタンの背景色、入力欄のボーダー色など。
          </p>
          <code style={{
            display: 'block',
            padding: '8px 12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
            button.primary.bg: brand.primary
          </code>
        </div>
      </AccordionContent>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'リッチなコンテンツ（見出し、リスト、コードブロックなど）を含むアコーディオンの例。',
      },
    },
  },
};

export const Accessibility: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Accordion {...args}>
        <AccordionSummary>アクセシビリティ機能</AccordionSummary>
        <AccordionContent>
          <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 600 }}>
            このアコーディオンコンポーネントの特徴
          </h3>

          <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
            <li><strong>セマンティックHTML</strong>: ネイティブの&lt;details&gt;/&lt;summary&gt;要素を使用</li>
            <li><strong>キーボード操作</strong>: Tab、Enter、Spaceキーで完全に操作可能</li>
            <li><strong>スクリーンリーダー対応</strong>: 自動的に適切なARIA属性が付与される</li>
            <li><strong>フォーカス表示</strong>: キーボード操作時のみ視覚的に表示</li>
            <li><strong>スムーズアニメーション</strong>: アイコンの回転アニメーション</li>
            <li><strong>カラーコントラスト</strong>: WCAG AA準拠</li>
            <li><strong>デザイントークン</strong>: すべてのスタイルはトークンから取得</li>
          </ul>

          <h4 style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 600 }}>
            キーボード操作
          </h4>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
            <li><kbd>Tab</kbd>: 次のアコーディオンにフォーカス移動</li>
            <li><kbd>Shift + Tab</kbd>: 前のアコーディオンにフォーカス移動</li>
            <li><kbd>Enter</kbd> または <kbd>Space</kbd>: アコーディオンを開閉</li>
          </ul>
        </AccordionContent>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### アクセシビリティ機能の詳細

このアコーディオンコンポーネントは、W3Cの推奨に従って実装されています：

- **ネイティブHTML要素**: \`<details>\`と\`<summary>\`を使用することで、ブラウザが自動的にARIA属性を管理
- **キーボードフォーカス検出**: Tabキーとマウスを区別し、キーボード操作時のみフォーカスリングを表示
- **コントラスト比**: テキストと背景のコントラスト比はWCAG AA準拠（4.5:1以上）
- **ホバーフィードバック**: マウス操作時の視覚的フィードバック
- **トークンベース**: すべての色、間隔、タイポグラフィはデザイントークンから取得

### なぜ \`<details>\` を使うのか？

1. **セマンティック**: HTMLの標準要素なので、意味が明確
2. **アクセシビリティ**: ブラウザが自動的に適切なARIA属性を付与
3. **シンプル**: JavaScriptなしでも基本機能が動作
4. **パフォーマンス**: ネイティブ実装なので高速
        `,
      },
    },
  },
};
