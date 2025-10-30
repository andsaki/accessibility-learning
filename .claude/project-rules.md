# プロジェクトルール

このプロジェクトは、アクセシビリティとデザインシステムを学ぶための学習用プロジェクトです。
以下のルールとベストプラクティスに従ってコードを記述してください。

## 🎨 デザイントークンの使用

### 必須ルール

**❌ 禁止: ハードコードされた値の使用**

```tsx
// NG
<div style={{ padding: "16px", color: "#212121", fontSize: "14px" }}>

// NG
<button style={{ margin: 20, borderRadius: 8 }}>
```

**✅ 推奨: デザイントークンの使用**

```tsx
// OK
import { spacing, colors, typography, radii } from './design-system/tokens';
import { primitive } from './design-system/tokens/colors';

<div style={{
  padding: spacing.scale[4],
  color: colors.text.primary,
  fontSize: typography.fontSize.sm
}}>

<button style={{
  margin: spacing.scale[5],
  borderRadius: radii.borderRadius.lg
}}>
```

### トークンの選択基準

1. **Primitive vs Semantic**
   - 基本的に`colors.text.primary`などのセマンティックトークンを使用
   - 特殊な装飾や一時的な用途には`primitive.blue[500]`を使用可

2. **Spacingの使い分け**
   - `spacing.scale[1-2]`: 関連する要素間（4-8px）
   - `spacing.scale[4-6]`: セクション内の要素（16-24px）
   - `spacing.scale[8-12]`: セクション間（32-48px）

3. **Typography**
   - 見出し: `typography.fontSize.xl` 〜 `typography.fontSize['2xl']`
   - 本文: `typography.fontSize.base`（デフォルト16px）
   - 補足: `typography.fontSize.sm` 〜 `typography.fontSize.xs`

4. **Breakpoints**
   - ハードコードされた数値（例: `768`）は禁止
   - 必ず`breakpointValues.md`などを使用

## ♿ アクセシビリティ要件

### WCAG 2.1 準拠

すべてのコンポーネントは最低でも**WCAG 2.1 レベルAA**に準拠すること。

### 必須実装項目

#### 1. キーボード操作
```tsx
// ✅ すべてのインタラクティブ要素はキーボードでアクセス可能
<button onClick={handleClick}>  // tabでフォーカス可能
<a href="#section">             // Enterで動作

// ❌ divやspanをボタンとして使用しない（キーボード操作不可）
<div onClick={handleClick}>     // NG: tabでフォーカスできない
```

#### 2. フォーカス管理
```tsx
// ✅ :focus-visibleパターンの使用
// マウスクリック時はフォーカススタイル非表示
// キーボード操作時のみ表示

const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);

onMouseDown={() => setIsKeyboardFocus(false)}
onKeyDown={() => setIsKeyboardFocus(true)}
style={{
  outline: isKeyboardFocus ? `3px solid ${colors.border.focus}` : 'none'
}}
```

#### 3. ARIA属性
```tsx
// ✅ 適切なARIA属性の使用
<button
  aria-label="メニューを開く"
  aria-expanded={isOpen}
  aria-controls="menu-panel"
>

<input
  aria-required={true}
  aria-invalid={!!error}
  aria-describedby="email-error email-helper"
/>

// エラーメッセージは即座に通知
<div role="alert" aria-live="assertive">
  {error}
</div>
```

#### 4. セマンティックHTML
```tsx
// ✅ 正しいHTML要素を使用
<button type="button">          // インタラクション用
<a href="#section">            // ナビゲーション用
<label htmlFor="email">        // フォームラベル

// ❌ 意味のない要素の使用
<div onClick={...}>            // NG
<span className="button">      // NG
```

#### 5. カラーコントラスト
```tsx
// ✅ WCAG AA以上のコントラスト比を確保
// - 通常テキスト: 4.5:1以上
// - 大きいテキスト（18px以上）: 3:1以上

// WCAGレベルを指定可能なコンポーネント
<Button wcagLevel="AA" />      // デフォルト（推奨）
<Button wcagLevel="AAA" />     // より高いコントラスト
<Input wcagLevel="AA" />       // 入力フィールドも対応
<Accordion wcagLevel="AA" />   // アコーディオンも対応
```

#### 6. WCAGレベルの実装ルール

**すべてのインタラクティブコンポーネントに`wcagLevel`プロパティを実装する**

```tsx
// ✅ 必須実装: wcagLevelプロパティ
export interface ComponentProps {
  /** WCAGアクセシビリティレベル (A/AA/AAA) @default 'AA' */
  wcagLevel?: WCAGLevel;
  // ... 他のprops
}

// ✅ デフォルト値は'AA'
const { wcagLevel = 'AA', ...props } = componentProps;

// ✅ accessibilityLevelsトークンを使用
import { accessibilityLevels } from '../tokens';
const levelFocus = accessibilityLevels.focus[wcagLevel];

// ✅ キーボードフォーカス時にレベル別スタイルを適用
if (isKeyboardFocus) {
  element.style.backgroundColor = levelFocus.background;
  element.style.color = levelFocus.text;
  element.style.outline = `${levelFocus.outlineWidth} solid ${levelFocus.outline}`;
  element.style.outlineOffset = levelFocus.outlineOffset;
}
```

**実装が必要なコンポーネント:**
- ✅ Button（実装済み）
- ✅ Input（実装済み）
- ✅ Accordion（実装済み）
- ⏳ Checkbox（将来）
- ⏳ Radio（将来）
- ⏳ Select（将来）
- ⏳ Modal（将来）

**WCAGレベルの選び方:**
- **Level A**: 最低限（プロトタイプ、MVP）
  - アウトライン: 2px、薄い青
  - 背景: 透明
- **Level AA**: 推奨（デフォルト）★
  - アウトライン: 3px、濃い青
  - 背景: 薄い青
  - オフセット: 2px
- **Level AAA**: 最高（公共機関、医療、金融）
  - アウトライン: 4px、黒
  - 背景: 黄色
  - オフセット: 2px
  - コントラスト比: 19.56:1
```

## 📐 レスポンシブデザイン

### モバイルファースト

```tsx
// ✅ モバイルファーストの設計
const [isMobile, setIsMobile] = useState(
  window.innerWidth < breakpointValues.md  // ✅ トークン使用
);

// ❌ デスクトップファーストは避ける
const [isDesktop, setIsDesktop] = useState(
  window.innerWidth > 768  // ❌ ハードコード
);
```

### ブレークポイントの使用

```tsx
// ✅ ブレークポイントトークンを使用
import { breakpointValues } from './design-system/tokens/breakpoints';

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpointValues.md);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

## 📂 ディレクトリ構造とコンポーネントの配置

### `src/components/` vs `src/design-system/components/`

このプロジェクトでは、コンポーネントを2つのディレクトリに明確に分けています。

#### `src/components/` - アプリケーション固有のコンポーネント

**用途:** このアプリ専用のUI部品

**配置するコンポーネント:**
- アプリの構造や機能に密結合したもの
- 他のプロジェクトで再利用しにくいもの
- ビジネスロジックやページ固有の実装

**例:**
```tsx
// ✅ src/components/ に配置
TableOfContents.tsx    // このアプリの目次ナビゲーション
HamburgerButton.tsx    // このアプリのハンバーガーメニュー
MobileDrawer.tsx       // このアプリのドロワーメニュー
```

#### `src/design-system/components/` - 再利用可能なコンポーネント

**用途:** どんなプロジェクトでも使える汎用的なUI部品

**配置するコンポーネント:**
- プロジェクト非依存の汎用UI
- デザイントークンのみを使用
- WCAG準拠のアクセシビリティ
- 他のプロジェクトにコピー&ペーストで使える

**例:**
```tsx
// ✅ src/design-system/components/ に配置
Button.tsx             // 汎用ボタン
Input.tsx              // 汎用入力フィールド
Modal.tsx              // 汎用モーダル（将来）
Checkbox.tsx           // 汎用チェックボックス（将来）
```

#### 判断基準

新しいコンポーネントを作成する際は、以下の質問で判断してください：

```tsx
// ❓ このコンポーネントはどこに配置すべき？

// ✅ design-system/components/ に入れる条件:
// - 他のプロジェクトでも使えそう？
// - アプリの機能と関係なく動作する？
// - 汎用的なUI部品？
// - デザイントークンのみで実装可能？

// ✅ src/components/ に入れる条件:
// - このアプリ専用の機能？
// - アプリの構造や他のコンポーネントに依存している？
// - 他のプロジェクトで使う予定がない？
// - アプリ固有のロジックを含む？
```

#### 具体例

```tsx
// ❌ design-system/components/ には入れない
// → アプリの目次構造（tocItems）に依存している
// → このアプリ専用の機能
<TableOfContents items={tocItems} />

// ✅ design-system/components/ に入れる
// → どんなプロジェクトでも使える汎用ボタン
// → デザイントークンのみを使用
// → プロジェクト非依存
<Button variant="primary" onClick={handleClick}>
  クリック
</Button>
```

#### メリット

この明確な区別により：
- **デザインシステムの移植が容易**: `design-system/`フォルダをコピーするだけで他のプロジェクトで使用可能
- **保守性の向上**: 責任範囲が明確
- **テストの独立性**: デザインシステムのコンポーネントはStorybookで独立してテスト
- **チーム開発**: デザインシステムチームとアプリ開発チームで分業可能

## 🧩 コンポーネント設計

### Props設計

```tsx
// ✅ 明確で拡張可能なProps
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  wcagLevel?: 'AA' | 'AAA';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: string;
}

// ❌ 曖昧なProps
interface ButtonProps {
  type?: string;      // NG: 何でも入る
  style?: any;        // NG: 型安全性がない
}
```

### デフォルト値

```tsx
// ✅ 合理的なデフォルト値を設定
const {
  variant = 'primary',
  size = 'md',
  wcagLevel = 'AA',
  disabled = false,
  isLoading = false,
} = props;
```

## 🎯 コーディングスタイル

### import順序

```tsx
// 1. React関連
import { useState, useEffect } from 'react';

// 2. 外部ライブラリ
import clsx from 'clsx';

// 3. 内部コンポーネント
import { Button, Input } from './design-system/components';

// 4. デザイントークン
import { colors, spacing, typography } from './design-system/tokens';
import { primitive } from './design-system/tokens/colors';
import { breakpointValues } from './design-system/tokens/breakpoints';

// 5. 型定義
import type { ButtonProps } from './types';

// 6. スタイル・その他
import './App.css';
```

### TypeScript型定義

```tsx
// ✅ 明確な型定義
interface User {
  id: string;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);

// ❌ any型の使用禁止
const [data, setData] = useState<any>(null);  // NG
```

### コメント

```tsx
// ✅ 「なぜ」を説明するコメント
// WCAGレベルAAAでは7:1以上のコントラスト比が必要
const textColor = wcagLevel === 'AAA' ? colors.text.aaa : colors.text.primary;

// ❌ 「何を」説明するコメント（コードを見れば分かる）
// ボタンをクリックしたときの処理
const handleClick = () => { ... };
```

## 🚫 禁止事項

### 絶対に避けるべきこと

1. **ハードコードされた値**
   ```tsx
   // ❌ 禁止
   padding: "16px"
   color: "#3b82f6"
   fontSize: 14

   // ✅ 正しい
   padding: spacing.scale[4]
   color: primitive.blue[500]
   fontSize: typography.fontSize.sm
   ```

2. **非セマンティックなHTML**
   ```tsx
   // ❌ 禁止
   <div onClick={handleClick}>クリック</div>

   // ✅ 正しい
   <button onClick={handleClick}>クリック</button>
   ```

3. **アクセシビリティの無視**
   ```tsx
   // ❌ 禁止: フォーカススタイルの削除
   outline: 'none'  // 代替手段なしで削除しない

   // ✅ 正しい: カスタムフォーカススタイル
   outline: isKeyboardFocus ? `3px solid ${colors.border.focus}` : 'none'
   ```

4. **any型の使用**
   ```tsx
   // ❌ 禁止
   const data: any = ...

   // ✅ 正しい
   const data: User[] = ...
   ```

## 📚 参考資料

### 必読ドキュメント

- [WCAG 2.1 ガイドライン](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [プロジェクトREADME](../README.md)

### デザイントークン一覧

- `spacing.scale[1-12]`: スペーシング（4px-48px）
- `typography.fontSize.xs-2xl`: フォントサイズ（12px-24px）
- `typography.lineHeight.tight/normal/relaxed`: 行高（1.25-1.625）
- `colors.text/background/border`: セマンティックカラー
- `primitive.{color}[50-900]`: プリミティブカラー
- `radii.borderRadius.sm-xl`: ボーダー半径（2px-12px）
- `breakpointValues.xs-2xl`: ブレークポイント（0px-1536px）

## ✅ チェックリスト

新しいコンポーネントを作成する前に確認：

- [ ] デザイントークンのみを使用（ハードコード値なし）
- [ ] WCAG 2.1 AA準拠
- [ ] キーボード操作対応
- [ ] 適切なARIA属性
- [ ] セマンティックHTML
- [ ] TypeScript型定義
- [ ] レスポンシブ対応
- [ ] `:focus-visible`パターン実装

---

このルールに従うことで、保守性が高く、アクセシブルで、一貫性のあるコードベースを維持できます。
