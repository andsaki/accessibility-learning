import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './ToastProvider';
import { Button } from './Button';
import { spacing } from '../tokens';

const meta = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デモ用のコンポーネント
 */
const ToastDemo = () => {
  const { success, error, warning, info, showToast } = useToast();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.scale[4], padding: spacing.scale[8] }}>
      <h2 style={{ margin: 0 }}>Toast デモ</h2>
      <p style={{ margin: 0, color: '#666' }}>
        ボタンをクリックすると、画面右上にトーストが表示されます
      </p>

      <div style={{ display: 'flex', gap: spacing.scale[3], flexWrap: 'wrap' }}>
        <Button
          variant="primary"
          onClick={() => success('操作が成功しました', '成功')}
        >
          Success Toast
        </Button>

        <Button
          variant="primary"
          onClick={() => error('エラーが発生しました。もう一度お試しください。', 'エラー')}
        >
          Error Toast
        </Button>

        <Button
          variant="primary"
          onClick={() => warning('この操作は取り消せません', '警告')}
        >
          Warning Toast
        </Button>

        <Button
          variant="primary"
          onClick={() => info('新しいメッセージがあります', 'お知らせ')}
        >
          Info Toast
        </Button>
      </div>

      <div style={{ marginTop: spacing.scale[4] }}>
        <h3 style={{ margin: 0, marginBottom: spacing.scale[2] }}>カスタム設定</h3>
        <div style={{ display: 'flex', gap: spacing.scale[3], flexWrap: 'wrap' }}>
          <Button
            variant="secondary"
            onClick={() => showToast('タイトルなしのメッセージ', { type: 'success' })}
          >
            タイトルなし
          </Button>

          <Button
            variant="secondary"
            onClick={() => showToast('10秒間表示されます', { type: 'info', title: '長時間表示', duration: 10000 })}
          >
            長時間表示 (10秒)
          </Button>

          <Button
            variant="secondary"
            onClick={() => showToast('自動で閉じません', { type: 'warning', title: '手動クローズ', duration: 0 })}
          >
            自動クローズなし
          </Button>
        </div>
      </div>

      <div style={{ marginTop: spacing.scale[4] }}>
        <h3 style={{ margin: 0, marginBottom: spacing.scale[2] }}>複数表示</h3>
        <Button
          variant="outline"
          onClick={() => {
            success('1つ目のメッセージ');
            setTimeout(() => info('2つ目のメッセージ'), 200);
            setTimeout(() => warning('3つ目のメッセージ'), 400);
          }}
        >
          複数のトーストを表示
        </Button>
      </div>
    </div>
  );
};

/**
 * 基本的な使い方
 *
 * useToast フックを使ってトーストを表示します
 */
export const Default: Story = {
  args: {
    children: <ToastDemo />,
  },
};

