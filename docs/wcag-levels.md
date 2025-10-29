# WCAGアクセシビリティレベルシステム

コンポーネントをWCAG準拠レベル（A/AA/AAA）で出し分けるシステムです。

## 概要

Web Content Accessibility Guidelines (WCAG) 2.1には、3つの適合レベルがあります：

### ⚪ レベルA（最低限）
法的義務の最低ライン

**特徴:**
- コントラスト比: 3:1（大きいテキストのみ）
- フォーカスインジケーター: 薄い青アウトライン
- 最低限のアクセシビリティ

**推奨用途:**
- 大きなテキストのみの簡易ページ
- プロトタイプやMVP
- 一時的なランディングページ

**注意点:**
- ⚠️ 視覚障害者には使いにくい可能性
- ⚠️ 低コントラストの環境では見えにくい

### 🟢 レベルAA（推奨）★

ほとんどのWebサイトで推奨される標準

**特徴:**
- コントラスト比: 4.5:1（通常テキスト）/ 3:1（大きいテキスト）
- フォーカスインジケーター: 青背景 + 濃い青アウトライン
- バランスの取れたアクセシビリティ

**推奨用途:**
- コーポレートサイト
- ECサイト
- ブログ・メディア
- 一般的なWebアプリケーション

**メリット:**
- ✅ 法的要件を満たす
- ✅ ほとんどのユーザーに使いやすい
- ✅ バランスの取れたデザイン

### 🔵 レベルAAA（最高）

最高レベルのアクセシビリティ

**特徴:**
- コントラスト比: 7:1（通常テキスト）/ 4.5:1（大きいテキスト）
- フォーカスインジケーター: 黄色背景 + 黒アウトライン（コントラスト比 19.56:1）
- 最高レベルの視認性と可読性

**推奨用途:**
- 公共機関のWebサイト
- 医療・福祉サービス
- 金融機関
- 教育機関
- 高齢者向けサービス

**メリット:**
- ✅ すべてのユーザーに優しい
- ✅ 視覚障害者も快適に使用可能
- ✅ ブランド信頼性の向上

## 使い方

### Buttonコンポーネント

```tsx
import { Button } from './design-system/components/Button';

// レベルA（最低限）
<Button wcagLevel="A">保存</Button>

// レベルAA（推奨）★ デフォルト
<Button wcagLevel="AA">保存</Button>
<Button>保存</Button> {/* wcagLevelを省略するとAAになります */}

// レベルAAA（最高）
<Button wcagLevel="AAA">保存</Button>
```

### 各レベルの見た目の違い

#### プライマリボタン

**レベルA:**
- 背景色: `#42a5f5`（薄い青）
- テキスト色: `#ffffff`（白）
- コントラスト比: 3.1:1

**レベルAA:**
- 背景色: `#2196f3`（標準青）
- テキスト色: `#ffffff`（白）
- コントラスト比: 4.5:1

**レベルAAA:**
- 背景色: `#1976d2`（濃い青）
- テキスト色: `#ffffff`（白）
- コントラスト比: 4.59:1（白背景に対して）

#### フォーカス表示

**レベルA:**
```css
/* 薄い青アウトラインのみ */
:focus {
  outline: 2px solid #64b5f6;
}
```

**レベルAA:**
```css
/* 青背景 + 濃い青アウトライン */
:focus {
  background-color: #e3f2fd;
  color: #212121;
  outline: 3px solid #1976d2;
  outline-offset: 2px;
}
```

**レベルAAA:**
```css
/* 黄色背景 + 黒アウトライン */
:focus {
  background-color: #ffff00;
  color: #000000;
  outline: 4px solid #000000;
  outline-offset: 2px;
}
```

## コントラスト比の要件

WCAG 2.1では、テキストサイズによってコントラスト比の要件が異なります：

### 通常サイズのテキスト
- 18px未満、または14px未満の太字

| レベル | コントラスト比 |
|--------|---------------|
| A      | なし          |
| AA     | 4.5:1以上     |
| AAA    | 7:1以上       |

### 大きいテキスト
- 18px以上の通常テキスト、または14px以上の太字

| レベル | コントラスト比 |
|--------|---------------|
| A      | 3:1以上       |
| AA     | 3:1以上       |
| AAA    | 4.5:1以上     |

## サイズ制限

各レベルには、使用できるテキストサイズの制限があります：

**レベルA:**
- 最小フォントサイズ: 24px（通常）/ 18.5px（太字）
- 大きいテキストのみ使用可能

**レベルAA:**
- 最小フォントサイズ: 16px（通常）/ 14px（太字）
- 通常サイズから使用可能

**レベルAAA:**
- 最小フォントサイズ: 12px
- すべてのサイズで最高の可読性

## 実装の詳細

### トークンの構造

```typescript
// src/design-system/tokens/accessibility-levels.ts

export const accessibilityLevels = {
  focus: {
    A: { ... },
    AA: { ... },
    AAA: { ... },
  },
  button: {
    A: { primary: { ... }, secondary: { ... } },
    AA: { primary: { ... }, secondary: { ... } },
    AAA: { primary: { ... }, secondary: { ... } },
  },
  text: {
    A: { primary: '...', secondary: '...', link: '...' },
    AA: { primary: '...', secondary: '...', link: '...' },
    AAA: { primary: '...', secondary: '...', link: '...' },
  },
};
```

### コンポーネント実装例

```typescript
export const Button: React.FC<ButtonProps> = ({
  wcagLevel = 'AA', // デフォルトはAA
  variant = 'primary',
  ...props
}) => {
  // WCAGレベルに応じたトークンを取得
  const levelColors = accessibilityLevels.button[wcagLevel];
  const levelFocus = accessibilityLevels.focus[wcagLevel];

  return (
    <button
      style={{
        backgroundColor: levelColors[variant].bg,
        color: levelColors[variant].text,
      }}
      onFocus={(e) => {
        e.currentTarget.style.backgroundColor = levelFocus.background;
        e.currentTarget.style.outline = `${levelFocus.outlineWidth} solid ${levelFocus.outline}`;
      }}
    >
      {children}
    </button>
  );
};
```

## レベルの選び方

### 🤔 どのレベルを選ぶべきか？

**レベルAを選ぶ場合:**
- プロトタイプやMVPで素早く検証したい
- 一時的なキャンペーンページ
- 大きいテキストのみを使用する

**レベルAAを選ぶ場合:** ★ 推奨
- ほとんどの一般的なWebサイト
- ECサイトやコーポレートサイト
- バランスの取れたアクセシビリティが必要

**レベルAAAを選ぶ場合:**
- 公共機関のWebサイト
- 医療・福祉・金融サービス
- すべてのユーザーに最高の体験を提供したい
- ブランドとして高い信頼性を示したい

### 💡 実践的なアドバイス

1. **まずはレベルAAから始める**
   - ほとんどのケースでレベルAAが最適
   - 法的要件を満たしつつ、デザインの自由度も確保

2. **必要に応じてレベルAAAにアップグレード**
   - ユーザーフィードバックを収集
   - アクセシビリティ監査の結果を反映

3. **レベルAは避ける**
   - 最低限のライン
   - 多くのユーザーにとって使いにくい

## Storybookでの確認

以下のストーリーで各レベルを比較できます：

- **WCAGLevels**: 3つのレベルを並べて比較
- **FocusComparison**: フォーカス表示の違いを確認

```bash
npm run storybook
```

Storybookを起動し、`Design System/Button`を開いてください。

## 参考リンク

- [WCAG 2.1 ガイドライン](https://www.w3.org/WAI/WCAG21/quickref/)
- [WCAG 2.1 日本語訳](https://waic.jp/docs/WCAG21/)
- [コントラストチェッカー](https://webaim.org/resources/contrastchecker/)
- [GOV.UK Design System](https://design-system.service.gov.uk/accessibility/)

## まとめ

✅ **3つのレベル**: A（最低限） / AA（推奨） / AAA（最高）
✅ **簡単な切り替え**: `wcagLevel` プロパティ1つで変更可能
✅ **視覚的な比較**: Storybookで各レベルを並べて確認
✅ **デフォルトはAA**: 迷ったらレベルAAが安全
✅ **トークンベース**: 一元管理で保守性が高い

このシステムにより、プロジェクトの要件に応じて適切なアクセシビリティレベルを選択できます。
