# アクセシビリティ学習プロジェクト

デザインシステムとアクセシビリティの学習用リポジトリです。WCAG 2.1 AA準拠のアクセシブルなReactコンポーネントを実装しています。

## 📚 学習目的

- **デザインシステム**: 一貫性のあるUIを構築するためのデザイントークンとコンポーネント
- **アクセシビリティ**: 誰もが使えるウェブサイトを作るためのベストプラクティス

## 🚀 セットアップ

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

## 📁 プロジェクト構成

```
accessibility-learning/
├── src/
│   ├── design-system/
│   │   ├── tokens/           # デザイントークン
│   │   │   ├── colors.ts     # カラーパレット
│   │   │   ├── spacing.ts    # スペーシング
│   │   │   └── typography.ts # タイポグラフィ
│   │   └── components/       # アクセシブルなコンポーネント
│   │       ├── Button.tsx
│   │       ├── Button.md
│   │       ├── Input.tsx
│   │       └── Input.md
│   ├── App.tsx              # デモページ
│   └── main.tsx
├── docs/
│   └── color-contrast.md    # カラーコントラストガイド
└── README.md
```

## 🎨 実装済みコンポーネント

### Button コンポーネント

アクセシブルなボタンコンポーネント

**機能:**
- ✅ キーボード操作対応（Tab、Enter、Space）
- ✅ フォーカスインジケーター表示
- ✅ スクリーンリーダー対応（ARIA属性）
- ✅ WCAG AA準拠のカラーコントラスト
- ✅ ローディング状態のサポート
- ✅ 3つのバリエーション（primary、secondary、outline）
- ✅ 3つのサイズ（sm、md、lg）

**使用例:**
```tsx
import { Button } from './design-system/components';

<Button variant="primary" onClick={handleClick}>
  クリック
</Button>
```

詳細: [Button.md](./src/design-system/components/Button.md)

### Input コンポーネント

ラベル、エラー表示、ヘルプテキストを備えたアクセシブルな入力フィールド

**機能:**
- ✅ ラベルとinputの自動関連付け（useId使用）
- ✅ エラーの即座な通知（role="alert"）
- ✅ 必須項目の明示（aria-required）
- ✅ ヘルプテキストのサポート
- ✅ フォーカスインジケーター
- ✅ 3つのサイズ（sm、md、lg）

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
/>
```

詳細: [Input.md](./src/design-system/components/Input.md)

## 🎯 アクセシビリティ機能

このプロジェクトで実装されているアクセシビリティ機能：

### 1. キーボード操作
- **Tab**: フォーカス移動
- **Enter / Space**: ボタンのクリック
- **Shift + Tab**: 逆方向へフォーカス移動

### 2. スクリーンリーダー対応
- 適切なARIA属性（`aria-label`, `aria-required`, `aria-invalid`, `aria-describedby`など）
- `role`属性でコンポーネントの役割を明示
- エラーメッセージの即座な読み上げ（`role="alert"`）

### 3. フォーカス表示
- WCAG 2.1準拠のフォーカスインジケーター
- 3pxの視認性の高いフォーカスリング

### 4. カラーコントラスト
- WCAG AA基準（4.5:1以上）に準拠
- エラーメッセージ、ボタン、テキストすべてで適切なコントラスト比を確保

詳細: [カラーコントラストガイド](./docs/color-contrast.md)

### 5. セマンティックHTML
- 適切なHTML要素の使用（`<button>`, `<input>`, `<label>`など）
- フォームの適切な構造化

## 📖 学習リソース

### ドキュメント
- [Button コンポーネントの使い方](./src/design-system/components/Button.md)
- [Input コンポーネントの使い方](./src/design-system/components/Input.md)
- [カラーコントラストとアクセシビリティ](./docs/color-contrast.md)
- [Storybook A11yアドオンの使い方](./docs/storybook-a11y.md)

### 参考リンク
- [WCAG 2.1 ガイドライン（日本語）](https://waic.jp/docs/WCAG21/)
- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Web Accessibility](https://developer.mozilla.org/ja/docs/Web/Accessibility)

## 🛠️ 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **Storybook** - コンポーネントカタログ
- **デザイントークン** - 一貫性のあるデザイン

## 📚 Storybook

コンポーネントを独立した環境で開発・テストできます。

### Storybookの起動

```bash
npm run storybook
```

ブラウザで http://localhost:6006 を開いてください。

### 主な機能

**1. コンポーネントカタログ**
- すべてのコンポーネントとそのバリエーションを一覧表示
- プロパティをインタラクティブに変更してテスト

**2. アクセシビリティチェック（A11y アドオン）**
- WCAG準拠の自動チェック
- カラーコントラスト比の検証
- ARIA属性の検証
- キーボードナビゲーションのテスト

**3. ドキュメント自動生成**
- プロパティの型情報から自動でドキュメント生成
- 使用例とコード表示

**4. ビジュアルテスト**
- コンポーネントの見た目を比較
- すべての状態を一度に確認

### Storybookでできること

```bash
# 開発サーバーを起動
npm run storybook

# 静的ファイルとしてビルド
npm run build-storybook
```

### アクセシビリティチェックの見方

1. Storybookを起動
2. 任意のストーリーを選択
3. 下部の「Accessibility」タブをクリック
4. WCAG違反がある場合、詳細が表示されます

すべてのコンポーネントでViolations（違反）が0件になるように設計されています。

## 📝 今後の予定

以下のコンポーネントを追加予定：

- [ ] Checkbox / Radio
- [ ] Modal（モーダルダイアログ）
- [ ] Tooltip
- [ ] Alert / Toast
- [ ] Tabs（タブ）
- [ ] Select（ドロップダウン）

## 🤝 コントリビューション

このプロジェクトは学習目的のため、issueやプルリクエストは受け付けていません。

## 📄 ライセンス

MIT

## 👤 作成者

学習プロジェクトとして作成
