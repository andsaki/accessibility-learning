# Accordion コンポーネント技術解説

## 概要

Accordionは`<details>`/`<summary>`要素をベースにした、JavaScriptを使わないネイティブな開閉コンポーネントです。

## ファイル構成

- **場所**: `src/components/Accordion/Accordion.tsx`
- **構成**: 単一ファイルに4つのコンポーネントを定義

## コンポーネント一覧

### 1. Accordion (親コンテナ)

```tsx
<details className="group/accordion ...">
```

- `<details>` 要素ベース
- CSS変数 `--icon-size` でアイコンサイズを管理
- `group/accordion` でグループ化し、子要素から開閉状態を参照可能

### 2. AccordionSummary (ヘッダー)

```tsx
<summary className="group/summary ...">
```

- `<summary>` 要素ベース
- クリック可能な領域
- カスタムアイコン(青い丸の下向き矢印)を表示
- `group-open/accordion:rotate-180` で開閉時に180度回転

### 3. AccordionContent (コンテンツ)

```tsx
<div className="...">
```

- 展開時に表示される内容エリア
- サマリーと同じ左パディングで視覚的に整列

### 4. AccordionBackLink (戻るリンク)

```tsx
<a href="#summary-id" className="...">
```

- コンテンツ末尾の「先頭に戻る」リンク
- 上向き矢印アイコン付き
- アンカーリンクでサマリー位置へスクロール

## 主要な技術解説

### Tailwind CSS の名前付きグループ

#### `group/accordion`
```tsx
<details className="group/accordion">
  <span className="group-open/accordion:rotate-180">
```

- `<details open>` 状態を子孫要素から参照
- アイコンの回転アニメーションに使用

#### `group/summary`
```tsx
<summary className="group/summary">
  <span className="group-hover/summary:outline">
```

- `<summary>` のホバー状態を子孫要素から参照
- アイコンへの追加スタイル適用に使用

**ポイント**: ネストされたグループの競合を防ぐため、名前付きグループを使用

### CSS変数によるレスポンシブ対応

```tsx
[--icon-size:calc(20/16*1rem)]           // モバイル: 20px
desktop:[--icon-size:calc(32/16*1rem)]   // デスクトップ: 32px
```

- カスタムCSS変数でアイコンサイズを定義
- `size-[var(--icon-size)]` で参照
- モバイル/デスクトップで統一的にサイズ変更

### デフォルトマーカーの非表示

```tsx
marker:[content:'']                    // 標準仕様
[&::-webkit-details-marker]:hidden     // WebKit独自仕様
```

- ブラウザデフォルトの▶マーカーを削除
- カスタムアイコンに置き換え
- ブラウザ互換性のため2つの手法を併用

### カーソル制御

```tsx
cursor-default  // ↖ 矢印カーソル
```

- `<summary>` のデフォルト `cursor: pointer` を上書き
- デジタル庁のアクセシビリティガイドラインに準拠
- ホバー時の背景色変化で十分なフィードバックを提供

### アウトラインの重ね合わせ

```tsx
border border-current                      // 常に表示される1px枠
group-hover/summary:outline                // ホバー時に追加される外枠
group-hover/summary:outline-2              // 太さ2px
group-hover/summary:outline-current        // 色はcurrentColor
```

- `outline` はレイアウトに影響しない
- `border` の上に重ねて強調表示
- レイアウトシフトを防ぐ

### `currentColor` による色管理

```tsx
text-blue-1000                    // color: blue-1000
border-current                    // border-color: currentColor (blue-1000)
outline-current                   // outline-color: currentColor (blue-1000)
fill='currentColor'               // SVG塗りも同じ色
```

- テキスト色を基準に他のプロパティが連動
- 1箇所の変更で全体の色を統一
- メンテナンス性向上

### フォーカス管理

```tsx
focus-visible:bg-yellow-300
focus-visible:outline
focus-visible:outline-4
focus-visible:outline-black
```

- `focus-visible:` はキーボード操作時のみ発動
- マウスクリックでは発動しない
- アクセシビリティとUXの両立

### pointer-events の制御

```tsx
<svg className="pointer-events-none">
```

- SVGアイコンはマウスイベントを透過
- 親要素のクリックイベントに影響しない
- 装飾要素がインタラクションを邪魔しない

### レスポンシブブレークポイント

```tsx
desktop:py-3.5
desktop:text-std-18N-160
```

- `desktop:` は `@digital-go-jp/tailwind-theme-plugin` が提供
- デジタル庁デザインシステム専用のブレークポイント
- モバイル/デスクトップの2段階設計

### インラインフレックス

```tsx
inline-flex items-center justify-center
```

- アイコンコンテナに使用
- コンテンツサイズに合わせた要素
- SVGを中央配置

## 使用例

```tsx
<Accordion className="text-std-16N-170">
  <AccordionSummary
    className="desktop:text-std-18N-160"
    id="accordion-summary-1"
  >
    <h3>タイトル</h3>
  </AccordionSummary>
  <AccordionContent>
    <p>コンテンツ...</p>
    <AccordionBackLink href="#accordion-summary-1">
      「タイトル」の先頭に戻る
    </AccordionBackLink>
  </AccordionContent>
</Accordion>
```

## 主な特徴

- **ネイティブHTML**: JavaScriptなしで動作
- **アクセシビリティ**: キーボード操作・スクリーンリーダー対応
- **レスポンシブ**: モバイル/デスクトップで最適化
- **メンテナンス性**: CSS変数・currentColorで統一的な管理

## ブラウザ互換性

- `<details>`/`<summary>` 要素のサポートが必要
- モダンブラウザ (Chrome, Firefox, Safari, Edge) で動作
- WebKit固有プロパティの対応を含む
