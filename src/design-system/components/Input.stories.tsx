import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';

/**
 * アクセシブルな入力フィールドコンポーネント
 *
 * WCAG 2.1 AA準拠の入力フィールドです。
 * ラベルとの関連付け、エラー表示、ヘルプテキストをサポートしています。
 */
const meta = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    // a11yアドオンの設定
    a11y: {
      config: {
        rules: [
          {
            // ラベルが必須
            id: 'label',
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
    label: {
      control: 'text',
      description: 'ラベルテキスト（必須）',
    },
    error: {
      control: 'text',
      description: 'エラーメッセージ',
    },
    helperText: {
      control: 'text',
      description: 'ヘルプテキスト',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '入力欄のサイズ',
    },
    required: {
      control: 'boolean',
      description: '必須項目かどうか',
    },
    disabled: {
      control: 'boolean',
      description: '無効化状態',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本的な入力欄
 */
export const Default: Story = {
  args: {
    label: 'お名前',
    placeholder: '山田太郎',
  },
};

/**
 * 必須項目
 *
 * required属性とaria-required属性が設定されます。
 */
export const Required: Story = {
  args: {
    label: 'メールアドレス',
    type: 'email',
    placeholder: 'example@example.com',
    required: true,
  },
};

/**
 * ヘルプテキスト付き
 *
 * aria-describedby属性でヘルプテキストと関連付けられます。
 */
export const WithHelperText: Story = {
  args: {
    label: 'パスワード',
    type: 'password',
    helperText: '8文字以上の英数字を入力してください',
    placeholder: '••••••••',
  },
};

/**
 * エラー状態
 *
 * role="alert"とaria-live="polite"でエラーが即座に読み上げられます。
 */
export const WithError: Story = {
  args: {
    label: 'メールアドレス',
    type: 'email',
    value: 'invalid-email',
    error: '正しいメールアドレスを入力してください',
  },
};

/**
 * エラー状態（ヘルプテキストあり）
 *
 * エラーがある場合、ヘルプテキストの代わりにエラーメッセージが表示されます。
 */
export const ErrorWithHelperText: Story = {
  args: {
    label: 'パスワード',
    type: 'password',
    value: 'short',
    helperText: '8文字以上で入力してください',
    error: 'パスワードは8文字以上で入力してください',
  },
};

/**
 * 小サイズ
 */
export const Small: Story = {
  args: {
    label: '小サイズ',
    size: 'sm',
    placeholder: '小さい入力欄',
  },
};

/**
 * 中サイズ（デフォルト）
 */
export const Medium: Story = {
  args: {
    label: '中サイズ',
    size: 'md',
    placeholder: '標準の入力欄',
  },
};

/**
 * 大サイズ
 */
export const Large: Story = {
  args: {
    label: '大サイズ',
    size: 'lg',
    placeholder: '大きい入力欄',
  },
};

/**
 * 無効化状態
 *
 * aria-disabled属性が設定されます。
 */
export const Disabled: Story = {
  args: {
    label: '無効な入力欄',
    value: '編集できません',
    disabled: true,
    helperText: 'この項目は編集できません',
  },
};

/**
 * 各種input type
 *
 * 様々なタイプの入力欄を表示します。
 */
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label="テキスト" type="text" placeholder="テキストを入力" />
      <Input label="メール" type="email" placeholder="example@example.com" />
      <Input label="パスワード" type="password" placeholder="••••••••" />
      <Input label="電話番号" type="tel" placeholder="090-1234-5678" />
      <Input label="URL" type="url" placeholder="https://example.com" />
      <Input label="数値" type="number" placeholder="0" />
      <Input label="日付" type="date" />
    </div>
  ),
};

/**
 * インタラクティブな例（制御されたコンポーネント）
 *
 * リアルタイムバリデーションのデモです。
 */
export const Interactive: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (value: string) => {
      if (!value) {
        setError('メールアドレスを入力してください');
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setError('正しいメールアドレスを入力してください');
      } else {
        setError('');
      }
    };

    return (
      <Input
        label="メールアドレス"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        error={error}
        helperText="ログイン時に使用します"
        required
      />
    );
  },
};

/**
 * フォームの例
 *
 * 複数の入力欄を組み合わせたフォームのデモです。
 */
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });

    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="お名前"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="メールアドレス"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          helperText="ログイン時に使用します"
          required
        />
        <Input
          label="パスワード"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          helperText="8文字以上の英数字を入力してください"
          required
        />
      </form>
    );
  },
};

/**
 * すべてのサイズ比較
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label="小サイズ" size="sm" placeholder="小さい入力欄" />
      <Input label="中サイズ" size="md" placeholder="標準の入力欄" />
      <Input label="大サイズ" size="lg" placeholder="大きい入力欄" />
    </div>
  ),
};

/**
 * すべての状態比較
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label="通常" placeholder="テキストを入力" />
      <Input label="必須" placeholder="必須項目" required />
      <Input
        label="ヘルプテキスト"
        placeholder="テキストを入力"
        helperText="これはヘルプテキストです"
      />
      <Input
        label="エラー"
        value="invalid"
        error="エラーメッセージが表示されます"
      />
      <Input label="無効化" value="編集不可" disabled />
    </div>
  ),
};
