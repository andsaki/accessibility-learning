import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InfoBox } from './InfoBox';

describe('InfoBox', () => {
  describe('基本的なレンダリング', () => {
    it('子要素が表示される', () => {
      render(<InfoBox>テスト内容</InfoBox>);
      expect(screen.getByText('テスト内容')).toBeInTheDocument();
    });

    it('タイトルが表示される', () => {
      render(<InfoBox title="テストタイトル">内容</InfoBox>);
      expect(screen.getByText('テストタイトル')).toBeInTheDocument();
    });

    it('アイコンが表示される', () => {
      render(
        <InfoBox icon="💡" title="タイトル">
          内容
        </InfoBox>
      );
      expect(screen.getByText('💡')).toBeInTheDocument();
    });
  });

  describe('バリアント', () => {
    it('infoバリアントが適用される', () => {
      const { container } = render(<InfoBox variant="info">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#f0f9ff' });
    });

    it('warningバリアントが適用される', () => {
      const { container } = render(<InfoBox variant="warning">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#fef3c7' });
    });

    it('successバリアントが適用される', () => {
      const { container } = render(<InfoBox variant="success">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#d1fae5' });
    });

    it('tipバリアントが適用される', () => {
      const { container } = render(<InfoBox variant="tip">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#f0f9ff' });
    });
  });

  describe('タイトルとアイコンのオプション', () => {
    it('タイトルなしで表示できる', () => {
      render(<InfoBox>内容のみ</InfoBox>);
      expect(screen.getByText('内容のみ')).toBeInTheDocument();
    });

    it('アイコンなしで表示できる', () => {
      render(<InfoBox title="タイトルのみ">内容</InfoBox>);
      expect(screen.getByText('タイトルのみ')).toBeInTheDocument();
      expect(screen.queryByText('💡')).not.toBeInTheDocument();
    });
  });

  describe('カスタムスタイル', () => {
    it('カスタムスタイルが適用される', () => {
      const { container } = render(
        <InfoBox style={{ marginTop: '20px' }}>内容</InfoBox>
      );
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ marginTop: '20px' });
    });
  });
});
