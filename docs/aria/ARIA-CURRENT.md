# aria-current 属性の使い方

## 概要

`aria-current` は **現在アクティブなページや項目を示す WAI-ARIA 属性** です。

## 基本構文

```html
<a href="/home">ホーム</a>
<a href="/about" aria-current="page">アバウト</a>  <!-- 現在のページ -->
<a href="/contact">お問い合わせ</a>
```

## 利用可能な値

| 値 | 用途 | 例 |
|---|------|---|
| `page` | 現在のページ | パンくずリスト、ナビゲーション |
| `step` | 現在のステップ | フォームのステップ表示 |
| `location` | 現在の位置 | フローチャート、マップ |
| `date` | 現在の日付 | カレンダー |
| `time` | 現在の時刻 | タイムピッカー |
| `true` | その他の現在項目 | 汎用的な使用 |

## Breadcrumbs での使用例

### コード

```tsx
// src/components/Breadcrumbs/Breadcrumbs.tsx
export const BreadcrumbItem = ({ isCurrent = false, children, ...rest }) => {
  if (isCurrent) {
    return (
      <li aria-current='page' className="inline break-words text-oln-16N-100">
        {children}
      </li>
    );
  }
  return (
    <li className="inline break-words">
      {children}
      <svg><!-- 区切り矢印 --></svg>
    </li>
  );
};
```

### 実装例

```tsx
<Breadcrumbs aria-labelledby="breadcrumb-label">
  <BreadcrumbsLabel className="sr-only" id="breadcrumb-label">
    現在位置
  </BreadcrumbsLabel>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/organization">組織情報</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrent>
      長いページタイトルが入ります  <!-- aria-current="page" が自動付与 -->
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumbs>
```

### レンダリング結果

```html
<nav aria-labelledby="breadcrumb-label">
  <span class="sr-only" id="breadcrumb-label">現在位置</span>
  <ol class="inline">
    <li class="inline break-words">
      <a href="/">ホーム</a>
      <svg><!-- > --></svg>
    </li>
    <li class="inline break-words">
      <a href="/organization">組織情報</a>
      <svg><!-- > --></svg>
    </li>
    <li aria-current="page" class="inline break-words text-oln-16N-100">
      長いページタイトルが入ります
    </li>
  </ol>
</nav>
```

## その他の使用例

### ナビゲーション

```html
<nav>
  <ul>
    <li><a href="/home">ホーム</a></li>
    <li><a href="/about" aria-current="page">アバウト</a></li>
    <li><a href="/contact">お問い合わせ</a></li>
  </ul>
</nav>
```

### ステップ表示

```html
<ol>
  <li>
    <a href="/checkout/shipping">配送先 ✓</a>
  </li>
  <li aria-current="step">
    支払い方法 ←  <!-- 現在のステップ -->
  </li>
  <li>
    確認
  </li>
</ol>
```

### カレンダー

```html
<table>
  <tr>
    <td><button>1</button></td>
    <td><button>2</button></td>
    <td><button aria-current="date">3</button></td>  <!-- 今日 -->
    <td><button>4</button></td>
  </tr>
</table>
```

## スクリーンリーダーでの読み上げ

### aria-current なし
```
ホーム、リンク
組織情報、リンク
長いページタイトルが入ります
```

### aria-current="page" あり
```
ホーム、リンク
組織情報、リンク
長いページタイトルが入ります、現在のページ  ← "現在のページ" が追加される
```

## CSSでのスタイリング

### 属性セレクタ

```css
/* aria-current が設定されている要素 */
[aria-current] {
  font-weight: bold;
}

/* 現在のページ */
[aria-current="page"] {
  color: var(--color-primary);
  text-decoration: none;
}

/* 現在のステップ */
[aria-current="step"] {
  background-color: var(--color-accent);
  border: 2px solid var(--color-primary);
}
```

### Tailwind CSS

```tsx
// グループバリアント
<a className="group-aria-[current=page]:font-bold">

// データ属性として
<a data-current={isCurrent ? "page" : undefined}
   className="data-[current=page]:font-bold">
```

## メリット

### 1. アクセシビリティの向上
- スクリーンリーダーユーザーに現在位置を明確に伝える
- キーボードナビゲーションの改善

### 2. セマンティックHTML
- JavaScript や CSS に依存せず、HTML だけで意味を表現
- 検索エンジンにもコンテキストを提供

### 3. 柔軟なスタイリング
- 属性セレクタで簡単にスタイル適用
- 状態管理が HTML 属性で完結

## ベストプラクティス

### ✅ 良い例

```html
<!-- 現在のページをリンクにしない -->
<li aria-current="page">現在のページ</li>

<!-- または、リンクだが視覚的に区別 -->
<a href="/current" aria-current="page" aria-disabled="true">
  現在のページ
</a>
```

### ❌ 悪い例

```html
<!-- aria-current を複数の要素に設定 -->
<a href="/home" aria-current="page">ホーム</a>
<a href="/about" aria-current="page">アバウト</a>  <!-- NG: 2つ以上設定しない -->

<!-- 間違った値 -->
<a aria-current="current">リンク</a>  <!-- NG: "current" は無効 -->
```

## 注意点

1. **1つのコンテキストに1つだけ** - 同じ `aria-current` の値を複数の要素に設定しない
2. **適切な値を選択** - `page`, `step`, `location` など、用途に応じた値を使う
3. **視覚的なフィードバックも必要** - CSSでも現在位置を示す

## 関連する ARIA 属性

| 属性 | 用途 |
|------|------|
| `aria-selected` | 選択可能なリスト項目の選択状態 (タブなど) |
| `aria-checked` | チェックボックス・ラジオボタンの状態 |
| `aria-pressed` | トグルボタンの押下状態 |
| `aria-current` | ナビゲーション内の現在位置 |

## 参考リンク

- [WAI-ARIA 1.2 - aria-current](https://www.w3.org/TR/wai-aria-1.2/#aria-current)
- [MDN - aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)
