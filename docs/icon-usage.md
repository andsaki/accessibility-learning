# アイコンの使い方

このプロジェクトでは、[lucide-react](https://lucide.dev/)のアイコンを`src/design-system/tokens/icons.ts`で一元管理しています。

## 登録されているアイコン

### 📚 philosophy（デザイン哲学）
| プロパティ | アイコン | 用途 |
|-----------|---------|------|
| `kind` | Flower2 | 優しい体験 |
| `inclusive` | HandHeart | 誰一人として置き去りにしない |
| `pleasant` | Sparkles | 心地よさを感じる体験 |
| `scalable` | Sprout | 成長し続ける仕組み |
| `overview` | Rainbow | デザイン哲学全体 |

### 🧩 component（コンポーネント）
| プロパティ | アイコン | 用途 |
|-----------|---------|------|
| `button` | MousePointer2 | Buttonコンポーネント |
| `input` | FileText | Inputコンポーネント |
| `form` | ClipboardList | Formコンポーネント |
| `modal` | ClipboardList | Modalコンポーネント |
| `accordion` | FolderOpen | Accordionコンポーネント |
| `toast` | Bell | Toastコンポーネント |
| `text` | Type | Textコンポーネント |
| `breadcrumbs` | Navigation | Breadcrumbsコンポーネント |
| `navigation` | Navigation | ナビゲーション |

### 💡 concept（機能・概念）
| プロパティ | アイコン | 用途 |
|-----------|---------|------|
| `wcag` | Target | WCAGアクセシビリティ |
| `designTokens` | Palette | デザイントークン |
| `theme.light` | Sun | ライトモード |
| `theme.dark` | Moon | ダークモード |

## 使い方

### 基本的な使い方

```tsx
import { icons } from "../design-system/tokens";

// デザイン哲学のアイコン
<icons.philosophy.kind size={32} color="#FF69B4" strokeWidth={2} />

// コンポーネントのアイコン
<icons.component.button size={24} />

// 機能・概念のアイコン
<icons.concept.wcag size={20} />

// テーマのアイコン
<icons.concept.theme.light size={16} />
```

### プロパティ

lucide-reactのアイコンは以下のプロパティを受け取れます：

```tsx
<icons.philosophy.kind
  size={24}              // アイコンのサイズ（数値）
  color="#FF0000"        // 色（CSS color）
  strokeWidth={2}        // 線の太さ（1-3推奨）
  className="icon-class" // CSSクラス
  style={{ ... }}        // インラインスタイル
/>
```

## 新しいアイコンを追加する方法

### 1. lucide-reactからインポート

`src/design-system/tokens/icons.ts`の冒頭でインポート：

```typescript
import {
  // 既存のインポート...
  Settings,  // 追加したいアイコン
} from 'lucide-react';
```

### 2. 適切なカテゴリに追加

```typescript
export const component = {
  button: MousePointer2,
  // ... 既存のアイコン
  settings: Settings,  // ← 追加
} as const;
```

### 3. 使用する

```tsx
<icons.component.settings size={24} />
```

## アイコンを探す

lucide-reactの全アイコンは公式サイトで検索できます：
https://lucide.dev/icons/

## 注意事項

- ✅ **推奨**: `icons.component.button` のように、このファイル経由で使用する
- ❌ **非推奨**: `import { MousePointer2 } from 'lucide-react'` と直接インポートしない
- 理由: 一元管理により、プロジェクト全体でアイコンの一貫性を保つため

## トラブルシューティング

### Q: 新しいアイコンを追加したのに型エラーが出る

A: TypeScriptの型推論が追いついていない可能性があります。エディタを再起動してください。

### Q: アイコンが表示されない

A:
1. インポートパスが正しいか確認
2. ブラウザの開発者ツールでエラーを確認
3. `size`プロパティが設定されているか確認

### Q: アイコンの色が変わらない

A: `color`プロパティではなく、親要素の`color`スタイルを継承しています。明示的に色を指定する場合は`color`プロパティを使用してください。
