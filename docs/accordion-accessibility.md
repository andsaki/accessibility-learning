# Accordion（アコーディオン）のアクセシビリティ

アクセシビリティに配慮したアコーディオンコンポーネントの実装ガイド

## 基本的な使い方

```tsx
import { Accordion, AccordionSummary, AccordionContent, AccordionBackLink } from './design-system/components';

function App() {
  return (
    <Accordion>
      <AccordionSummary id="accordion-summary-1">
        <h3 className="text-std-16N-170 desktop:text-std-18N-160">
          アコーディオンのタイトル
        </h3>
      </AccordionSummary>
      <AccordionContent>
        <p className="text-std-16N-170">
          ここにアコーディオンのコンテンツが表示されます。
        </p>
        <AccordionBackLink href="#accordion-summary-1">
          「アコーディオンのタイトル」の先頭に戻る
        </AccordionBackLink>
      </AccordionContent>
    </Accordion>
  );
}
```

## コンポーネント構成

Accordionは4つのサブコンポーネントで構成されています：

| コンポーネント | 役割 |
|--------------|------|
| `Accordion` | アコーディオン全体のコンテナ |
| `AccordionSummary` | クリック可能なヘッダー部分 |
| `AccordionContent` | 展開時に表示されるコンテンツ |
| `AccordionBackLink` | コンテンツ末尾の「先頭に戻る」リンク |

## Props

### Accordion

`<details>` 要素の全プロパティに加えて：

| プロパティ | 型 | デフォルト | 説明 |
|----------|-----|----------|------|
| `children` | `React.ReactNode` | 必須 | AccordionSummary と AccordionContent |
| `className` | `string` | `''` | 追加のCSSクラス |
| `open` | `boolean` | `false` | 初期状態で開いているか |

### AccordionSummary

`<summary>` 要素の全プロパティに加えて：

| プロパティ | 型 | デフォルト | 説明 |
|----------|-----|----------|------|
| `children` | `React.ReactNode` | 必須 | タイトルコンテンツ（通常は見出し） |
| `className` | `string` | `''` | 追加のCSSクラス |
| `id` | `string` | - | BackLinkのターゲットとして使用 |

### AccordionContent

`<div>` 要素の全プロパティに加えて：

| プロパティ | 型 | デフォルト | 説明 |
|----------|-----|----------|------|
| `children` | `React.ReactNode` | 必須 | 展開時に表示するコンテンツ |
| `className` | `string` | `''` | 追加のCSSクラス |

### AccordionBackLink

`<a>` 要素の全プロパティに加えて：

| プロパティ | 型 | デフォルト | 説明 |
|----------|-----|----------|------|
| `children` | `React.ReactNode` | 必須 | リンクテキスト |
| `className` | `string` | `''` | 追加のCSSクラス |
| `href` | `string` | `'#'` | 戻り先のid（AccordionSummaryのid） |

## 使用例

### 基本的なアコーディオン

```tsx
<Accordion>
  <AccordionSummary id="faq-1">
    <h3 className="text-std-16N-170 desktop:text-std-18N-160">
      よくある質問 1
    </h3>
  </AccordionSummary>
  <AccordionContent>
    <p className="text-std-16N-170">
      回答内容がここに表示されます。
    </p>
    <AccordionBackLink href="#faq-1">
      「よくある質問 1」の先頭に戻る
    </AccordionBackLink>
  </AccordionContent>
</Accordion>
```

### 初期状態で開いているアコーディオン

```tsx
<Accordion open>
  <AccordionSummary id="faq-2">
    <h3 className="text-std-16N-170 desktop:text-std-18N-160">
      開いた状態のアコーディオン
    </h3>
  </AccordionSummary>
  <AccordionContent>
    <p className="text-std-16N-170">
      このアコーディオンは最初から開いた状態で表示されます。
    </p>
    <AccordionBackLink href="#faq-2">
      「開いた状態のアコーディオン」の先頭に戻る
    </AccordionBackLink>
  </AccordionContent>
</Accordion>
```

### 複数のアコーディオンを並べる

```tsx
<div className="flex flex-col gap-4">
  <Accordion>
    <AccordionSummary id="faq-1">
      <h3 className="text-std-16N-170 desktop:text-std-18N-160">
        よくある質問 1
      </h3>
    </AccordionSummary>
    <AccordionContent>
      <p className="text-std-16N-170">回答 1</p>
      <AccordionBackLink href="#faq-1">
        「よくある質問 1」の先頭に戻る
      </AccordionBackLink>
    </AccordionContent>
  </Accordion>

  <Accordion>
    <AccordionSummary id="faq-2">
      <h3 className="text-std-16N-170 desktop:text-std-18N-160">
        よくある質問 2
      </h3>
    </AccordionSummary>
    <AccordionContent>
      <p className="text-std-16N-170">回答 2</p>
      <AccordionBackLink href="#faq-2">
        「よくある質問 2」の先頭に戻る
      </AccordionBackLink>
    </AccordionContent>
  </Accordion>
</div>
```

### 長いコンテンツ

```tsx
<Accordion>
  <AccordionSummary id="long-content">
    <h3 className="text-std-16N-170 desktop:text-std-18N-160">
      長いコンテンツの例
    </h3>
  </AccordionSummary>
  <AccordionContent>
    <div className="flex flex-col gap-4 text-std-16N-170">
      <p>
        これは長いコンテンツの例です。
      </p>
      <ul className="list-inside list-disc space-y-2">
        <li>リストアイテム 1</li>
        <li>リストアイテム 2</li>
        <li>リストアイテム 3</li>
      </ul>
      <p>
        コンテンツが長い場合、「先頭に戻る」リンクが便利です。
      </p>
      <AccordionBackLink href="#long-content">
        「長いコンテンツの例」の先頭に戻る
      </AccordionBackLink>
    </div>
  </AccordionContent>
</Accordion>
```

## アクセシビリティ機能

### 1. ネイティブHTML要素

- `<details>` と `<summary>` 要素を使用
- JavaScriptなしで動作
- ブラウザ標準のキーボード操作をサポート

### 2. キーボード操作

- **Tab**: フォーカス移動
- **Enter / Space**: アコーディオンを開閉
- フォーカス時に視覚的なインジケーター（黄色背景 + 黒枠）を表示

### 3. スクリーンリーダー対応

- `<details>` 要素は自動的に展開/折りたたみ状態を伝える
- `aria-hidden="true"`: 装飾的なアイコンをスクリーンリーダーから隠す
- 見出し要素（`<h3>` など）でセマンティックな構造を提供

### 4. フォーカス表示

- `focus-visible:` でキーボード操作時のみフォーカス表示
- デジタル庁デザインシステムの黄色フォーカスインジケーター
- 4pxの黒いアウトラインで視認性を確保

### 5. カラーコントラスト

- WCAG AA準拠のカラーコントラスト比を確保
- テキスト色とアイコン色を統一（`currentColor`）

### 6. バックリンク

- 長いコンテンツでもアンカーリンクで簡単に先頭に戻れる
- キーボードユーザーにも便利

## ベストプラクティス

### ✅ 良い例

```tsx
// 明確な見出しとid
<AccordionSummary id="accordion-summary-1">
  <h3 className="text-std-16N-170 desktop:text-std-18N-160">
    よくある質問
  </h3>
</AccordionSummary>

// BackLinkで対応するidを指定
<AccordionBackLink href="#accordion-summary-1">
  「よくある質問」の先頭に戻る
</AccordionBackLink>

// 複数のアコーディオンは適切な間隔で配置
<div className="flex flex-col gap-4">
  <Accordion>...</Accordion>
  <Accordion>...</Accordion>
</div>
```

### ❌ 悪い例

```tsx
// idなし（BackLinkが機能しない）
<AccordionSummary>
  <h3>タイトル</h3>
</AccordionSummary>

// 見出し要素なし（セマンティクスが失われる）
<AccordionSummary id="accordion-1">
  タイトル
</AccordionSummary>

// BackLinkのhrefが間違っている
<AccordionBackLink href="#wrong-id">
  先頭に戻る
</AccordionBackLink>
```

## デザイントークン

このコンポーネントは以下のデザイントークンを使用しています：

- **colors**: デジタル庁デザインシステムの色
  - `text-blue-1000`: テキスト・アイコン色
  - `bg-solid-grey-50`: サマリー背景色
  - `bg-blue-100`: ホバー時背景色
  - `bg-yellow-300`: フォーカス時背景色
  - `border-solid-grey-420`: ボーダー色

- **typography**: デジタル庁デザインシステムのタイポグラフィ
  - `text-std-16N-170`: モバイル用テキスト（16px, 行間1.7）
  - `text-std-18N-160`: デスクトップ用テキスト（18px, 行間1.6）

- **spacing**: Tailwind標準のスペーシング
  - `px-4 py-2.5`: モバイル用パディング
  - `desktop:px-6 desktop:py-3.5`: デスクトップ用パディング

## 技術詳細

コンポーネントの実装詳細については [accordion.md](./accordion.md) を参照してください。

## 参考リンク

- [デジタル庁デザインシステム](https://design.digital.go.jp/)
- [WCAG 2.1 ガイドライン](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN - details 要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/details)
- [MDN - summary 要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/summary)
