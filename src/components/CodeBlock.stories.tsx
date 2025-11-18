import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

/**
 * アクセシブルなコードブロックコンポーネント
 *
 * シンタックスハイライト付きのコードブロックを表示します。
 * コピー機能、行番号表示、説明文表示に対応しています。
 */
const meta = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'region',
            enabled: true,
          },
        ],
      },
    },
    docs: {
      description: {
        component: `アクセシブルなコードブロックコンポーネント

シンタックスハイライト付きのコードブロックを表示します。コピー機能、行番号表示、説明文表示に対応しています。

## 機能レベル比較

### A) Basic（最小限）
- 言語指定とコピーボタンのみ
- 短いコードスニペットに最適

### AA) With Description（推奨）⭐
- 説明文が追加
- ARIA属性の効果説明に便利
- アクセシビリティ学習に最適

### AAA) With Line Numbers（最高）
- 行番号 + 説明文の両方
- 長いコードや複雑なコードに最適
- 特定行を参照したい場合に便利`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: '表示するコードの内容',
    },
    language: {
      control: 'text',
      description: 'プログラミング言語（html, jsx, typescript など）',
    },
    description: {
      control: 'text',
      description: 'コードブロックの説明やコメント',
    },
    showCopyButton: {
      control: 'boolean',
      description: 'コピーボタンを表示するか',
    },
    showLineNumbers: {
      control: 'boolean',
      description: '行番号を表示するか',
    },
    ariaLabel: {
      control: 'text',
      description: 'スクリーンリーダー用のラベル（role="region"）',
    },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A) 基本的なコードブロック（最小限の機能）
 *
 * シンプルなHTMLコードの表示例です。
 *
 * **機能:**
 * - 言語指定: html
 * - コピーボタン: あり（デフォルト）
 * - 行番号: なし
 * - 説明文: なし
 *
 * **用途:**
 * - 短いコードスニペット
 * - 簡単なHTMLタグの例示
 */
export const A: Story = {
  name: 'A) Basic（最小限）',
  args: {
    code: `<button>
  <XIcon />
</button>`,
    language: 'html',
  },
  parameters: {
    docs: {
      description: {
        story: `シンプルなHTMLコードの表示例です。言語指定とコピーボタンのみが有効です。

**特徴:**
- 最も基本的な形式
- 短いコードスニペットに最適
- コピーボタンで簡単にコードをコピー可能`,
      },
    },
  },
};

/**
 * AA) 説明文付きコードブロック（推奨）⭐
 *
 * コードの下に説明文を追加した例です。
 *
 * **機能:**
 * - 言語指定: html
 * - コピーボタン: あり
 * - 行番号: なし
 * - 説明文: あり ← **A) との違い**
 *
 * **用途:**
 * - ARIA属性の効果説明
 * - コードの動作説明
 * - スクリーンリーダーの読み上げ内容の説明
 */
export const AA: Story = {
  name: 'AA) With Description（推奨）⭐',
  args: {
    code: `<button aria-label="閉じる">
  <XIcon />
</button>`,
    language: 'html',
    description: '// スクリーンリーダーが読み上げる内容:\n// "ボタン" → "閉じる" → "クリック可能"',
  },
  parameters: {
    docs: {
      description: {
        story: `コードの下に説明文を表示した例です。ARIA属性の効果やコードの動作を説明する際に便利です。

**A) との違い:**
- 説明文が追加されています

**おすすめの使い方:**
- アクセシビリティの学習教材として
- コードの意図や効果を明確に伝えたい場合
- スクリーンリーダーの動作を説明する場合`,
      },
    },
  },
};

/**
 * AAA) 行番号付きコードブロック（最高）
 *
 * 説明文と行番号の両方を表示した、最も機能が充実した例です。
 *
 * **機能:**
 * - 言語指定: jsx
 * - コピーボタン: あり
 * - 行番号: あり ← **AA) との違い**
 * - 説明文: あり
 *
 * **用途:**
 * - 長いコードの説明
 * - 特定の行を参照したい場合
 * - 複数行にわたるコードの詳細解説
 */
export const AAA: Story = {
  name: 'AAA) With Line Numbers（最高）',
  args: {
    code: `<div
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>`,
    language: 'jsx',
    showLineNumbers: true,
    description: '// aria-live="polite": 適切なタイミングで読み上げ\n// aria-live="assertive": すぐに読み上げ（緊急時）\n// aria-atomic="true": 領域全体を読み上げ',
  },
  parameters: {
    docs: {
      description: {
        story: `説明文と行番号の両方を表示した、最も機能が充実した例です。長いコードや複数行のコードを説明する際に適しています。

**AA) との違い:**
- 行番号が表示されます

**おすすめの使い方:**
- 複雑なコンポーネントの実装例
- コードレビューで特定行を参照したい場合
- 教育目的で詳細な説明が必要な場合

**⚠️ 確認ポイント:**
- 行番号により、コードの特定箇所を正確に参照できます
- 長いコードでも見やすく整理されています`,
      },
    },
  },
};

/**
 * デフォルト
 */
export const Default: Story = {
  args: {
    code: `<button>
  <XIcon />
</button>`,
    language: 'html',
  },
};

/**
 * 説明文付き
 */
export const WithDescription: Story = {
  args: {
    code: `<button aria-label="閉じる">
  <XIcon />
</button>`,
    language: 'html',
    description: '// スクリーンリーダーが読み上げる内容:\n// "ボタン" → "閉じる" → "クリック可能"',
  },
};

/**
 * 行番号付き
 */
export const WithLineNumbers: Story = {
  args: {
    code: `<div
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>`,
    language: 'jsx',
    showLineNumbers: true,
    description: '// aria-live="polite": 適切なタイミングで読み上げ\n// aria-live="assertive": すぐに読み上げ（緊急時）\n// aria-atomic="true": 領域全体を読み上げ',
  },
};

/**
 * JavaScript コード
 */
export const JavaScript: Story = {
  args: {
    code: `const handleClick = () => {
  console.log('Button clicked');
};

return (
  <button onClick={handleClick}>
    Click me
  </button>
);`,
    language: 'javascript',
    showLineNumbers: true,
  },
};

/**
 * TypeScript コード
 */
export const TypeScript: Story = {
  args: {
    code: `interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};`,
    language: 'typescript',
    showLineNumbers: true,
  },
};

/**
 * CSS スタイル
 */
export const CSS: Story = {
  args: {
    code: `.button {
  padding: 8px 16px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #1976d2;
}

.button:focus-visible {
  outline: 2px solid #2196f3;
  outline-offset: 2px;
}`,
    language: 'css',
  },
};

/**
 * 長いコード
 */
export const LongCode: Story = {
  args: {
    code: `import React, { useState, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const showTooltip = () => {
    const id = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  return (
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && <div role="tooltip">{content}</div>}
    </div>
  );
};`,
    language: 'tsx',
    showLineNumbers: true,
    description: 'Tooltipコンポーネントの実装例です。',
  },
};

/**
 * ARIA 例1: ラベルなし
 */
export const ARIAExample1: Story = {
  args: {
    code: `<button>
  <XIcon />
</button>`,
    language: 'html',
    description: '// スクリーンリーダーが読み上げる内容:\n// "ボタン" → "クリック可能"',
  },
};

/**
 * ARIA 例2: ラベルあり
 */
export const ARIAExample2: Story = {
  args: {
    code: `<button aria-label="閉じる">
  <XIcon />
</button>`,
    language: 'html',
    description: '// スクリーンリーダーが読み上げる内容:\n// "ボタン" → "閉じる" → "クリック可能"',
  },
};

/**
 * ARIA Live Region
 */
export const ARIALiveExample: Story = {
  args: {
    code: `<div
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>`,
    language: 'jsx',
    description: '// aria-live="polite": 適切なタイミングで読み上げ\n// aria-live="assertive": すぐに読み上げ（緊急時）\n// aria-atomic="true": 領域全体を読み上げ',
  },
};

/**
 * コピーボタンなし
 */
export const WithoutCopyButton: Story = {
  args: {
    code: `const greeting = "Hello, World!";
console.log(greeting);`,
    language: 'javascript',
    showCopyButton: false,
  },
};

/**
 * 言語指定なし
 */
export const WithoutLanguage: Story = {
  args: {
    code: `Hello, World!
This is a simple text block.
No syntax highlighting here.`,
  },
};

/**
 * 最小限の例
 */
export const MinimalExample: Story = {
  args: {
    code: `console.log('Hello');`,
    language: 'js',
    showCopyButton: false,
  },
};
