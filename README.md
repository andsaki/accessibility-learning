# アクセシビリティ & デザインシステム学習プロジェクト

このプロジェクトは、**アクセシビリティ（WCAG準拠）** と **デザイントークンシステム** を学ぶための実践的なサンプルアプリケーションです。

## 🎯 プロジェクトの目的

- WCAG 2.1 AA/AAA準拠のコンポーネント実装を学ぶ
- スケーラブルなデザイントークンシステムの構築方法を理解する
- アクセシブルなUIコンポーネントの設計パターンを習得する

## 🚀 技術スタック

- **React 18** + **TypeScript**
- **Vite** - 高速なビルドツール
- **デザイントークン** - カスタム実装
- **CSS-in-JS** - インラインスタイル（学習用）

## 📁 プロジェクト構成

```
src/
├── components/              # UIコンポーネント
│   └── TableOfContents.tsx # 目次ナビゲーション
├── contexts/               # Reactコンテキスト
│   └── ThemeContext.tsx   # テーマ管理（ライト/ダーク）
├── design-system/         # デザインシステム
│   ├── components/        # 再利用可能なコンポーネント
│   │   ├── Button.tsx    # アクセシブルなボタン
│   │   └── Input.tsx     # アクセシブルな入力フィールド
│   └── tokens/           # デザイントークン
│       ├── colors.ts     # カラーパレット
│       ├── spacing.ts    # スペーシングスケール
│       ├── typography.ts # タイポグラフィ
│       ├── radii.ts      # ボーダー半径
│       ├── breakpoints.ts # レスポンシブブレークポイント
│       ├── theme.ts      # テーマトークン
│       └── index.ts      # トークン統合
├── App.tsx               # メインアプリケーション
└── main.tsx             # エントリーポイント
```

## 🎨 デザイントークンシステム

### 3階層のトークン構造

このプロジェクトでは、保守性とスケーラビリティを高めるために3階層のトークンシステムを採用しています。

#### 1. Primitive Tokens（プリミティブトークン）
生の値。意味を持たない基本パーツ。

```typescript
// 例: colors.ts
primitive.gray[900] = "#212121"
primitive.blue[500] = "#3b82f6"
```

#### 2. Global Tokens（グローバルトークン）⭐
Primitiveに意味のある名前を付けたもの。アプリ全体で再利用可能。

```typescript
// 例: tokens/index.ts
colors.text.primary = primitive.gray[900]
spacing.scale[4] = 16px
radii.borderRadius.base = 4px
```

#### 3. Component Tokens（コンポーネントトークン）
特定のコンポーネント専用の値。Globalトークンを組み合わせて作る。

```typescript
// 例: Button.tsx
padding: spacing.scale[3]
borderRadius: radii.borderRadius.base
backgroundColor: colors.button.primary.bg
```

### 主なトークンカテゴリ

#### 📏 Spacing（spacing.ts）
8pxグリッドシステムを採用。

```typescript
spacing.scale[1]  = 4px   // 小さい余白
spacing.scale[2]  = 8px
spacing.scale[4]  = 16px  // 中程度の余白
spacing.scale[8]  = 32px  // 大きい余白
spacing.scale[12] = 48px  // セクション間
```

**なぜ8pxグリッド？**
- 倍数で計算しやすい（2, 4でも割り切れる）
- デザイナーとの共通言語（Figma、Sketchの標準）
- レティナディスプレイ対応
- 業界標準（Material Design、Ant Design等）

#### 🎨 Colors（colors.ts）
プリミティブカラーとセマンティックカラーの2層構造。

```typescript
// Primitive
primitive.gray[50] 〜 primitive.gray[900]
primitive.blue[50] 〜 primitive.blue[900]
primitive.red[50] 〜 primitive.red[900]

// Semantic
colors.text.primary      // メインテキスト
colors.background.default // 背景色
colors.border.focus      // フォーカス時の境界線
```

#### 🔤 Typography（typography.ts）
rem単位を使用してアクセシビリティに配慮。

```typescript
typography.fontSize.xs   = 0.75rem  // 12px
typography.fontSize.base = 1rem     // 16px（基準）
typography.fontSize.xl   = 1.25rem  // 20px

typography.lineHeight.tight   = 1.25   // 大見出し用
typography.lineHeight.normal  = 1.5    // 本文用（WCAG推奨）
typography.lineHeight.relaxed = 1.625  // 長文用
```

**なぜrem？**
- ユーザーのブラウザ設定を尊重
- アクセシビリティ向上（視覚障害者への配慮）
- レスポンシブデザインに最適

#### 📐 Breakpoints（breakpoints.ts）
モバイルファースト設計のブレークポイント。

```typescript
breakpointValues.xs  = 0     // スマホ（デフォルト）
breakpointValues.sm  = 640   // 大きめスマホ
breakpointValues.md  = 768   // タブレット
breakpointValues.lg  = 1024  // ノートPC
breakpointValues.xl  = 1280  // デスクトップ
breakpointValues['2xl'] = 1536  // 大型ディスプレイ
```

## ♿ アクセシビリティ機能

### WCAG 2.1 準拠

このプロジェクトのコンポーネントは、WCAG 2.1 レベルAA/AAAに準拠しています。

#### コントラスト比の基準

| レベル | 通常テキスト | 大きいテキスト | 用途 |
|--------|-------------|---------------|------|
| **A** | なし | 3:1以上 | 最低限（非推奨） |
| **AA** ⭐ | 4.5:1以上 | 3:1以上 | 推奨（標準） |
| **AAA** | 7:1以上 | 4.5:1以上 | 最高（公共機関） |

#### 実装されているアクセシビリティ機能

✅ **キーボード操作対応**
- Tab、Enter、Spaceキーでの操作
- フォーカス管理

✅ **視覚的フィードバック**
- フォーカスインジケーター表示
- マウスクリック時は非表示（`:focus-visible`パターン）

✅ **スクリーンリーダー対応**
- 適切なARIA属性
- セマンティックHTML
- ラベルとフィールドの関連付け

✅ **エラーハンドリング**
- `role="alert"`による即座の通知
- 明確なエラーメッセージ

✅ **色のコントラスト**
- WCAG AA以上のコントラスト比
- カラーブラインドネスへの配慮

## 🧩 コンポーネント

### Button
アクセシブルなボタンコンポーネント。

**Props:**
```typescript
variant?: 'primary' | 'secondary' | 'tertiary'
size?: 'sm' | 'md' | 'lg'
disabled?: boolean
isLoading?: boolean
icon?: string
onClick?: () => void
wcagLevel?: 'AA' | 'AAA'  // WCAGレベルの選択
```

**特徴:**
- WCAGレベルを指定可能
- キーボードフォーカス対応（マウスクリック時は非表示）
- ローディング状態
- アイコンサポート

**使用例:**
```tsx
import { Button } from './design-system/components';

<Button
  variant="primary"
  wcagLevel="AAA"
  onClick={handleClick}
>
  クリック
</Button>
```

### Input
ラベル、エラー表示、ヘルプテキストを備えた入力フィールド。

**Props:**
```typescript
label: string
type?: string
value?: string
placeholder?: string
error?: string
helperText?: string
required?: boolean
disabled?: boolean
size?: 'sm' | 'md' | 'lg'
wcagLevel?: 'AA' | 'AAA'
```

**特徴:**
- 自動的なラベル-フィールド関連付け（`useId`）
- エラーメッセージの即座表示（`role="alert"`）
- 必須項目の明示（`aria-required`）
- アクセシブルな状態管理

**使用例:**
```tsx
import { Input } from './design-system/components';

<Input
  label="メールアドレス"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={error}
  helperText="ログイン時に使用します"
  required
  wcagLevel="AAA"
/>
```

### TableOfContents
スクロール連動型の目次ナビゲーション。

**特徴:**
- Intersection Observerによる自動ハイライト
- スムーズスクロール
- レスポンシブ対応（モバイルでは非表示）
- sticky positioning

**使用例:**
```tsx
import { TableOfContents } from './components/TableOfContents';

const tocItems = [
  { id: "section-1", title: "セクション1" },
  { id: "section-2", title: "セクション2" },
];

<TableOfContents items={tocItems} />
```

## 🌓 テーマシステム

ライト/ダークモード対応のテーマシステム。

```typescript
// ThemeContext.tsx
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

// App全体をラップ
<ThemeProvider>
  <App />
</ThemeProvider>

// コンポーネント内で使用
const { mode, theme, toggleTheme } = useTheme();

// 使用例
<div style={{ backgroundColor: theme.background.default }}>
  <button onClick={toggleTheme}>
    {mode === 'light' ? 'ダーク' : 'ライト'}モードに切り替え
  </button>
</div>
```

**特徴:**
- LocalStorageによる設定保存
- システム設定（`prefers-color-scheme`）の自動検出
- コンテキストAPI経由での状態管理
- `data-theme`属性によるCSS連動

## 🎯 学習ポイント

### 1. デザイントークンの利点
- **一貫性**: アプリ全体で統一された値
- **保守性**: 1箇所の変更で全体に反映
- **スケーラビリティ**: 新しいコンポーネントが既存トークンを再利用
- **テーマ対応**: 簡単な切り替え

### 2. アクセシビリティのベストプラクティス
- セマンティックHTML
- ARIA属性の適切な使用
- キーボードナビゲーション
- 十分なコントラスト比
- フォーカス管理
- `:focus-visible`による適切なフォーカススタイル

### 3. TypeScriptによる型安全性
- コンポーネントのPropsに型定義
- デザイントークンの型推論
- コンパイル時のエラー検出

### 4. レスポンシブデザイン
- モバイルファースト設計
- ブレークポイントトークンの使用
- 動的なレイアウト切り替え

## 🛠️ セットアップ

### 必要なもの
- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/andsaki/accessibility-learning.git
cd accessibility-learning

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

### その他のコマンド

```bash
# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybookビルド
npm run build-storybook
```

## 📚 参考資料

### アクセシビリティ
- [WCAG 2.1 ガイドライン](https://www.w3.org/WAI/WCAG21/quickref/)
- [WCAG 2.1 日本語訳](https://waic.jp/docs/WCAG21/)
- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN: ARIA](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA)

### デザインシステム
- [Material Design](https://m3.material.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)

### 技術記事
- [A Complete Guide to Design Tokens](https://www.designtokens.org/)
- [Inclusive Components](https://inclusive-components.design/)
- [The A11Y Project](https://www.a11yproject.com/)

## 📝 今後の予定

以下のコンポーネント・機能を追加予定：

- [ ] Checkbox / Radio
- [ ] Modal（モーダルダイアログ）
- [ ] Tooltip
- [ ] Alert / Toast
- [ ] Tabs（タブ）
- [ ] Select（ドロップダウン）
- [ ] ダークモードの完全対応
- [ ] アニメーションのアクセシビリティ配慮

## 🤝 コントリビューション

このプロジェクトは学習目的のため、issueやプルリクエストは受け付けていません。

## 📄 ライセンス

MIT

## 👤 作成者

学習プロジェクトとして作成

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
