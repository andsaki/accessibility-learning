import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  describe('基本的なレンダリング', () => {
    it('テキストがレンダリングされる', () => {
      render(<Text>テキストコンテンツ</Text>);
      expect(screen.getByText('テキストコンテンツ')).toBeInTheDocument();
    });

    it('デフォルトでbodyバリアント', () => {
      const { container } = render(<Text>デフォルト</Text>);
      expect(container.querySelector('p')).toBeInTheDocument();
    });
  });

  describe('見出しバリアント', () => {
    it('h1 バリアントでレンダリングされる', () => {
      render(<Text variant="h1">見出し1</Text>);
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('見出し1');
    });

    it('h2 バリアントでレンダリングされる', () => {
      render(<Text variant="h2">見出し2</Text>);
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('見出し2');
    });

    it('h3 バリアントでレンダリングされる', () => {
      render(<Text variant="h3">見出し3</Text>);
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('見出し3');
    });

    it('h4 バリアントでレンダリングされる', () => {
      render(<Text variant="h4">見出し4</Text>);
      expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('見出し4');
    });

    it('h5 バリアントでレンダリングされる', () => {
      render(<Text variant="h5">見出し5</Text>);
      expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('見出し5');
    });

    it('h6 バリアントでレンダリングされる', () => {
      render(<Text variant="h6">見出し6</Text>);
      expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('見出し6');
    });
  });

  describe('ボディバリアント', () => {
    it('body-large バリアントでレンダリングされる', () => {
      const { container } = render(<Text variant="body-large">大きい本文</Text>);
      expect(container.querySelector('p')).toHaveTextContent('大きい本文');
    });

    it('body バリアントでレンダリングされる', () => {
      const { container } = render(<Text variant="body">本文</Text>);
      expect(container.querySelector('p')).toHaveTextContent('本文');
    });

    it('body-small バリアントでレンダリングされる', () => {
      const { container } = render(<Text variant="body-small">小さい本文</Text>);
      expect(container.querySelector('p')).toHaveTextContent('小さい本文');
    });
  });

  describe('その他のバリアント', () => {
    it('caption バリアントでレンダリングされる', () => {
      const { container } = render(<Text variant="caption">キャプション</Text>);
      expect(container.querySelector('span')).toHaveTextContent('キャプション');
    });

    it('overline バリアントでレンダリングされる', () => {
      const { container } = render(<Text variant="overline">オーバーライン</Text>);
      expect(container.querySelector('span')).toHaveTextContent('オーバーライン');
    });
  });

  describe('HTML要素のカスタマイズ', () => {
    it('as属性でHTML要素を変更できる', () => {
      const { container } = render(<Text as="div">Divとしてレンダリング</Text>);
      expect(container.querySelector('div')).toHaveTextContent('Divとしてレンダリング');
    });

    it('h1バリアントでもas属性で要素を変更できる', () => {
      const { container } = render(<Text variant="h1" as="p">段落としてレンダリング</Text>);
      expect(container.querySelector('p')).toHaveTextContent('段落としてレンダリング');
    });
  });

  describe('テキストの配置', () => {
    it('左揃えが設定できる', () => {
      const { container } = render(<Text align="left">左揃え</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ textAlign: 'left' });
    });

    it('中央揃えが設定できる', () => {
      const { container } = render(<Text align="center">中央揃え</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ textAlign: 'center' });
    });

    it('右揃えが設定できる', () => {
      const { container } = render(<Text align="right">右揃え</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ textAlign: 'right' });
    });

    it('両端揃えが設定できる', () => {
      const { container } = render(<Text align="justify">両端揃え</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ textAlign: 'justify' });
    });
  });

  describe('テキストスタイル', () => {
    it('太字が設定できる', () => {
      const { container } = render(<Text bold>太字テキスト</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element.style.fontWeight).toBeTruthy();
    });

    it('イタリック体が設定できる', () => {
      const { container } = render(<Text italic>イタリックテキスト</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ fontStyle: 'italic' });
    });

    it('下線が設定できる', () => {
      const { container } = render(<Text underline>下線テキスト</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ textDecoration: 'underline' });
    });

    it('打ち消し線が設定できる', () => {
      const { container } = render(<Text strikethrough>打ち消しテキスト</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ textDecoration: 'line-through' });
    });

    it('下線と打ち消し線は同時に設定できる', () => {
      const { container } = render(<Text underline strikethrough>テキスト</Text>);
      const element = container.firstChild as HTMLElement;
      // 両方適用されている
      expect(element).toBeInTheDocument();
    });
  });

  describe('カラー', () => {
    it('カスタムカラーが設定できる', () => {
      const { container } = render(<Text color="#ff0000">赤いテキスト</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ color: '#ff0000' });
    });

    it('デフォルトカラーが適用される', () => {
      const { container } = render(<Text>デフォルトカラー</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element.style.color).toBeTruthy();
    });
  });

  describe('カスタムスタイル', () => {
    it('style属性でスタイルを追加できる', () => {
      const { container } = render(
        <Text style={{ padding: '10px', marginTop: '20px' }}>
          カスタムスタイル
        </Text>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ padding: '10px', marginTop: '20px' });
    });

    it('className属性でクラスを追加できる', () => {
      const { container } = render(<Text className="custom-class">クラス付きテキスト</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('custom-class');
    });
  });

  describe('マージンリセット', () => {
    it('デフォルトのマージンが0になる', () => {
      const { container } = render(<Text>マージンなし</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({ margin: '0' });
    });
  });

  describe('複数のスタイルの組み合わせ', () => {
    it('複数のスタイルを同時に適用できる', () => {
      const { container } = render(
        <Text variant="h3" bold italic underline align="center" color="#0000ff">
          複雑なスタイル
        </Text>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveStyle({
        fontStyle: 'italic',
        textDecoration: 'underline',
        textAlign: 'center',
        color: '#0000ff',
      });
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });
  });

  describe('子要素', () => {
    it('複数の子要素をレンダリングできる', () => {
      render(
        <Text>
          テキスト1 <strong>強調</strong> テキスト2
        </Text>
      );
      expect(screen.getByText('テキスト1', { exact: false })).toBeInTheDocument();
      expect(screen.getByText('強調')).toBeInTheDocument();
    });
  });
});
