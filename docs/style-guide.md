# Style Guide

このプロジェクトで UI を実装するときの約束事をまとめる。特に Panda CSS の `css()` ユーティリティの使い方はリポジトリ全体へ影響するため、ここに記した方針を優先する。

## 1. スタイルは JSX 内へ inline `css()` で記述する

- セクションやページ固有のレイアウトは `<div className={css({ ... })}>` のように **JSX のすぐ近く** で宣言する。
- `const heroRow = css(...)` といったトップレベルの定数は作らない。DOM 構造とスタイルを同じ場所で把握できることを優先するため。
- 例外は「デザインシステムとして再利用する抽象化（Button / Card / Recipeなど）」。それ以外は inline をデフォルトとする。
- ESLint に `custom/no-top-level-css-const` ルールを入れてあり、`const foo = css(...)` のようなトップレベル宣言は warning になる。

### `custom/no-top-level-css-const`

- `eslint.config.js` で有効化しているカスタムルール。
- 警告: `const foo = css({ ... })` のようなトップレベル宣言を検出した場合に「JSX 近傍で inline 化する / デザインシステムへ昇格する」ことを促す。
- 例外を設けたい場合は `eslint.config.js` の `files`/`ignores` で適用範囲を調整する。

```tsx
// ✅ 推奨
<section
  className={css({
    display: "grid",
    gap: 4,
    borderRadius: "xl",
  })}
>
  ...
</section>
```

```tsx
// ❌ 非推奨 (セクション固有スタイルの const 定義)
const heroRow = css({ display: "flex" });

<div className={heroRow}>...</div>
```

## 2. BEM 由来の文字列をそのまま `className` に書く場合のみ定数化

- 文字列クラス（例: `"heroBanner__title"`）をそのまま `className` へ入れたい場合は `className="..."` を優先する。
- `css()` との組み合わせが必要なら `cx("heroBanner__title", css({ ... }))` を利用する。`const heroBannerStyles` のような中間オブジェクトは原則作らない。

## 3. 再利用が必要な場合はコンポーネント化を検討する

- 「同じ塊をコピーしたい」＝「それはデザインシステム化すべきもの」とみなす。
- 繰り返し色・余白の組み合わせを使う場合は `design-system` 配下のコンポーネント or recipe を作り、そこではじめて `const foo = css(...)` を許容する。

## 4. レビュー時のチェック項目

- [ ] JSX のすぐ近くで `css({ ... })` が記述されているか？
- [ ] 再利用すべき塊はデザインシステムへ昇格できないか検討したか？
- [ ] クラス命名（文字列）は BEM などで構造が伝わるか？

## 5. 参考

- [ADR 002: Panda CSSユーティリティの積極活用](./adr/002-panda-css-utilities.md)
