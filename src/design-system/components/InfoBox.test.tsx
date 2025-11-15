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
    it('infoバリアントが適用される（AA）', () => {
      const { container } = render(<InfoBox variant="info">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#e3f2fd' });
    });

    it('warningバリアントが適用される（AA）', () => {
      const { container } = render(<InfoBox variant="warning">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#fff3e0' });
    });

    it('successバリアントが適用される（AA）', () => {
      const { container } = render(<InfoBox variant="success">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#e8f5e9' });
    });

    it('tipバリアントが適用される（AA）', () => {
      const { container } = render(<InfoBox variant="tip">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ backgroundColor: '#e3f2fd' });
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

  describe('左ボーダー', () => {
    it('leftBorder=trueで太いボーダーが表示される', () => {
      const { container } = render(<InfoBox leftBorder>内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ borderLeft: '4px solid #90caf9' });
    });

    it('leftBorder=falseで通常のボーダーが表示される', () => {
      const { container } = render(<InfoBox leftBorder={false}>内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ borderLeft: '1px solid #90caf9' });
    });

    it('デフォルトで通常のボーダーが表示される', () => {
      const { container } = render(<InfoBox>内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ borderLeft: '1px solid #90caf9' });
    });
  });

  describe('WCAGレベル', () => {
    it('デフォルトでAAレベルが適用される', () => {
      const { container } = render(<InfoBox variant="info">内容</InfoBox>);
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({
        backgroundColor: '#e3f2fd',
        color: '#1565c0',
      });
    });

    it('レベルAが適用される', () => {
      const { container } = render(
        <InfoBox variant="info" wcagLevel="A">
          内容
        </InfoBox>
      );
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({
        backgroundColor: '#e3f2fd',
        color: '#1976d2',
      });
    });

    it('レベルAAAが適用される', () => {
      const { container } = render(
        <InfoBox variant="info" wcagLevel="AAA">
          内容
        </InfoBox>
      );
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({
        backgroundColor: '#e3f2fd',
        color: '#0d47a1',
      });
    });

    it('各バリアントでレベルAAAが正しく適用される', () => {
      const { container: infoContainer } = render(
        <InfoBox variant="info" wcagLevel="AAA">
          info
        </InfoBox>
      );
      expect(infoContainer.firstChild).toHaveStyle({ color: '#0d47a1' });

      const { container: warningContainer } = render(
        <InfoBox variant="warning" wcagLevel="AAA">
          warning
        </InfoBox>
      );
      expect(warningContainer.firstChild).toHaveStyle({ color: '#e65100' });

      const { container: successContainer } = render(
        <InfoBox variant="success" wcagLevel="AAA">
          success
        </InfoBox>
      );
      expect(successContainer.firstChild).toHaveStyle({ color: '#1b5e20' });
    });
  });
});
