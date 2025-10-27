# Breadcrumbs（パンくずリスト）のアクセシビリティ

## 概要

Breadcrumbsコンポーネントは、ユーザーがサイト内の現在位置を把握し、上位階層に移動するためのナビゲーション要素です。適切なアクセシビリティ実装により、すべてのユーザーが効果的に利用できます。

## 実装ファイル

`design-system-example-components-react/src/components/Breadcrumbs/Breadcrumbs.tsx`

## コンポーネント構成

### 主要コンポーネント

1. **Breadcrumbs** (`<nav>`)
   - パンくずリスト全体のラッパー

2. **BreadcrumbList** (`<ol>`)
   - 順序付きリストでアイテムをグループ化

3. **BreadcrumbItem** (`<li>`)
   - 各パンくずアイテム
   - `isCurrent` プロパティで現在のページを示す

4. **BreadcrumbLink** (`<a>`)
   - 他のページへのリンク
   - 現在のページには使用しない

5. **BreadcrumbsLabel** (`<span>`)
   - 視覚的に隠れたラベル用（オプション）

### isCurrentプロパティについて

`isCurrent` は `BreadcrumbItem` のブーリアン型プロパティで、そのアイテムが現在表示しているページかどうかを示します。

**注意**: `isCurrent` はリンク（`<a>` 要素）とは無関係で、リストアイテム（`<li>` 要素）の状態を制御します。

#### isCurrent={true} の場合

- `aria-current="page"` 属性が付与される
- リンクではなく通常のテキストとして表示
- 異なるスタイル（`text-oln-16N-100`）が適用される
- 右側の矢印アイコンは表示されない

```tsx
<BreadcrumbItem isCurrent>
  現在のページ
</BreadcrumbItem>
```

#### isCurrent={false} または未指定の場合（デフォルト）

- 通常のリストアイテムとして表示
- 中に `BreadcrumbLink` を配置してリンクを提供
- 右側に矢印アイコンが表示される

```tsx
<BreadcrumbItem>
  <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
</BreadcrumbItem>
```

## 実装されているアクセシビリティ機能

### 1. aria-current="page" の使用

**実装箇所**: `Breadcrumbs.tsx:17`

```tsx
<li
  aria-current='page'
  className={`inline break-words text-oln-16N-100 ${className ?? ''}`}
  {...rest}
>
  {children}
</li>
```

**目的**:
- 現在表示しているページを明示的に示す
- スクリーンリーダーユーザーに「現在のページ」であることを伝える

**効果**:
- スクリーンリーダーが「現在のページ」とアナウンス
- ユーザーがパンくずリスト内での現在位置を理解できる

**重要**: 現在のページにはリンク（`BreadcrumbLink`）を使用せず、テキストのみを配置します。これにより、ユーザーが既にいるページへのリンクをクリックするという無意味な操作を防ぎます。

### 2. aria-hidden="true" による装飾要素の非表示

**実装箇所**: `Breadcrumbs.tsx:29`

```tsx
<svg
  aria-hidden={true}
  className='mx-2 inline'
  fill='none'
  height='12'
  viewBox='0 0 12 12'
  width='12'
>
```

**目的**:
- 視覚的な装飾（区切り文字の矢印アイコン）を支援技術から隠す
- スクリーンリーダーが不要な情報を読み上げないようにする

**効果**:
- スクリーンリーダーユーザーに不要なノイズを提供しない
- コンテンツの意味に集中できる

### 3. セマンティックHTML構造

**実装箇所**: `Breadcrumbs.tsx:80-84, 100-107`

```tsx
// nav要素でナビゲーション領域を明示
<nav className={`${className ?? ''}`} {...rest}>
  {children}
</nav>

// ol要素で順序付きリストを使用
<ol className={`inline ${className ?? ''}`} {...rest}>
  {children}
</ol>
```

**目的**:
- `<nav>` 要素でナビゲーションランドマークを提供
- `<ol>` 要素で階層構造を明確に表現
- `<li>` 要素で各項目を適切にマークアップ

**効果**:
- スクリーンリーダーがナビゲーション領域として認識
- ユーザーがランドマークを使って効率的に移動できる
- 階層構造が支援技術に正しく伝わる

### 4. フォーカスインジケーター

**実装箇所**: `Breadcrumbs.tsx:49`

```tsx
focus-visible:rounded-4
focus-visible:outline
focus-visible:outline-4
focus-visible:outline-black
focus-visible:outline-offset-[calc(2/16*1rem)]
focus-visible:bg-yellow-300
focus-visible:text-blue-1000
focus-visible:ring-[calc(2/16*1rem)]
focus-visible:ring-yellow-300
```

**目的**:
- キーボードフォーカス時に明確な視覚的フィードバックを提供
- マウス使用時には表示されない（focus-visible疑似クラス）

**効果**:
- キーボードユーザーが現在のフォーカス位置を明確に把握できる
- WCAG 2.4.7（フォーカスの可視化）に準拠
- 高コントラストの背景色で視認性を確保

### 5. リンクの視覚的識別

**実装箇所**: `Breadcrumbs.tsx:46-49`

```tsx
text-blue-1000 text-oln-16N-100 underline underline-offset-[calc(3/16*1rem)]
hover:text-blue-900 hover:decoration-[calc(3/16*1rem)]
active:text-orange-700 active:decoration-1
```

**目的**:
- リンクを視覚的に識別可能にする
- 色以外の手がかり（下線）を提供
- インタラクション状態を明確に示す

**効果**:
- 色覚異常のユーザーでもリンクを識別できる
- ホバー・アクティブ状態の変化で操作性向上
- WCAG 1.4.1（色の使用）に準拠

## 推奨される改善点

### 1. aria-labelの追加

**現在の実装**:
```tsx
<nav className={`${className ?? ''}`} {...rest}>
  {children}
</nav>
```

**推奨される実装**:
```tsx
<nav aria-label="パンくずリスト" className={`${className ?? ''}`} {...rest}>
  {children}
</nav>
```

**理由**:
- 複数のナビゲーション要素がある場合に区別できる
- スクリーンリーダーユーザーがナビゲーションの目的を理解しやすい

### 2. BreadcrumbsLabelのアクセシビリティ強化

視覚的に隠れたラベルとして使用する場合:

```tsx
<BreadcrumbsLabel className="sr-only" id="breadcrumb-label">
  現在位置
</BreadcrumbsLabel>
```

対応するCSSクラス:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

#### BreadcrumbsLabelの技術的な仕組み

`BreadcrumbsLabel` コンポーネントは、JavaScriptの**残余パラメータ（rest parameters）**と**スプレッド構文（spread syntax）**を使用して、柔軟にHTML属性を受け取れます。

**実装**:
```tsx
export const BreadcrumbsLabel = (props: BreadcrumbsLabelProps) => {
  const { children, className, ...rest } = props;

  return (
    <span className={`${className ?? ''}`} {...rest}>
      {children}
    </span>
  );
};
```

**使用例**:
```tsx
<BreadcrumbsLabel
  className="sr-only"
  id="my-id"
  aria-hidden="true"
  data-testid="label"
>
  現在位置
</BreadcrumbsLabel>
```

**レンダリング結果**:
```html
<span
  class="sr-only"
  id="my-id"
  aria-hidden="true"
  data-testid="label"
>
  現在位置
</span>
```

**技術解説**:

1. **`const { children, className, ...rest } = props`**
   - `children` と `className` を個別に取り出す
   - 残りのすべてのプロパティを `rest` オブジェクトに格納
   - これはJavaScript（ES6）の標準機能

2. **`{...rest}`**
   - `rest` オブジェクトのすべてのプロパティを要素に展開
   - `id`、`aria-*`、`data-*` などの属性を自動的に渡せる

3. **メリット**
   - コンポーネントが明示的に定義していない属性も使える
   - HTML標準属性をすべて手動で定義する必要がない
   - テストID、カスタムデータ属性などを柔軟に追加できる

## アクセシビリティチェックリスト

- [x] `aria-current="page"` が現在のページに設定されている
- [x] 現在のページはリンクではなくテキストとして表示
- [x] 装飾的な要素に `aria-hidden="true"` が設定されている
- [x] セマンティックHTML（`<nav>`, `<ol>`, `<li>`）を使用
- [x] キーボードフォーカスインジケーターが実装されている
- [x] リンクに下線があり、色以外で識別可能
- [ ] `<nav>` 要素に `aria-label` が設定されている（推奨）

## 参考資料

### WCAG 2.1ガイドライン

- **2.4.8 Location (AAA)**: ユーザーが現在位置を把握できる仕組み
- **2.4.7 Focus Visible (AA)**: キーボードフォーカスが視覚的に識別可能
- **1.4.1 Use of Color (A)**: 色だけに依存しない情報伝達
- **4.1.3 Status Messages (AA)**: 現在のページ状態を適切に伝える

### ARIAパターン

- [WAI-ARIA Authoring Practices - Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

## 使用例

### 基本的な使用例

```tsx
import { Breadcrumbs, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from './Breadcrumbs';

<Breadcrumbs>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/category">カテゴリ</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrent>
      現在のページ
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumbs>
```

### よくある間違い

❌ **間違い**: 現在のページにリンクを使用
```tsx
<BreadcrumbItem isCurrent>
  <BreadcrumbLink href="/current">現在のページ</BreadcrumbLink>
</BreadcrumbItem>
```

✅ **正しい**: 現在のページはテキストのみ
```tsx
<BreadcrumbItem isCurrent>
  現在のページ
</BreadcrumbItem>
```
