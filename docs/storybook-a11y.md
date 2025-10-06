# Storybook A11y アドオンの使い方

Storybookのアクセシビリティアドオン（@storybook/addon-a11y）を使って、コンポーネントのアクセシビリティを自動チェックする方法を説明します。

## 🚀 基本的な使い方

### 1. Storybookを起動

```bash
npm run storybook
```

ブラウザで http://localhost:6006 が自動的に開きます。

### 2. コンポーネントを選択

左側のサイドバーから、チェックしたいコンポーネントのストーリーを選択します。

例：
- Design System > Button > Primary
- Design System > Input > Default

### 3. Accessibilityタブを開く

画面下部のパネルに複数のタブが表示されます：
- **Controls** - プロパティの変更
- **Actions** - イベントのログ
- **Accessibility** ← これをクリック！

### 4. チェック結果を確認

Accessibilityタブには以下の情報が表示されます：

**✅ Violations（違反）**
- WCAG基準に違反している項目
- 0件が理想的な状態

**⚠️ Incomplete（不完全）**
- 自動チェックできなかった項目
- 手動での確認が必要

**✓ Passes（合格）**
- チェックに合格した項目

## 📊 チェック項目の見方

### Violationsの例

もし違反がある場合、以下のように表示されます：

```
🔴 color-contrast
Elements must have sufficient color contrast

Impact: serious
Help: https://dequeuniversity.com/rules/axe/4.7/color-contrast

Affected nodes:
- <button>Click me</button>
```

**表示内容の意味：**
- **ルール名**: `color-contrast` - カラーコントラスト
- **説明**: 要素は十分なコントラストが必要
- **Impact**: `serious` - 深刻度（critical > serious > moderate > minor）
- **Help**: 詳細情報へのリンク
- **Affected nodes**: 問題のある要素

### 深刻度のレベル

| レベル | 説明 | 対応の優先度 |
|--------|------|------------|
| **Critical** | 致命的 | 即座に修正が必要 |
| **Serious** | 深刻 | 早急に修正が必要 |
| **Moderate** | 中程度 | 修正を推奨 |
| **Minor** | 軽微 | 可能であれば修正 |

## 🔍 主なチェック項目

### 1. カラーコントラスト（color-contrast）

**チェック内容：**
- テキストと背景のコントラスト比
- WCAG AA基準（4.5:1以上）に準拠しているか

**例：**
```tsx
// ❌ 違反例
<button style={{ background: '#eee', color: '#ddd' }}>
  低コントラスト
</button>

// ✅ 合格例
<button style={{ background: '#2196f3', color: '#ffffff' }}>
  高コントラスト
</button>
```

### 2. ラベル（label）

**チェック内容：**
- フォーム要素に適切なラベルがあるか
- `<label>`要素が正しく関連付けられているか

**例：**
```tsx
// ❌ 違反例
<input type="text" placeholder="お名前" />

// ✅ 合格例
<label htmlFor="name">お名前</label>
<input id="name" type="text" />
```

### 3. ボタン名（button-name）

**チェック内容：**
- ボタンに認識可能な名前があるか
- アイコンのみのボタンにaria-labelがあるか

**例：**
```tsx
// ❌ 違反例
<button>
  <span>×</span>
</button>

// ✅ 合格例
<button aria-label="閉じる">
  <span aria-hidden="true">×</span>
</button>
```

### 4. ARIAの使用（aria-*)

**チェック内容：**
- ARIA属性が正しく使用されているか
- 無効なaria-*属性がないか

**例：**
```tsx
// ❌ 違反例
<div aria-invalid="yes">Error</div>  // "yes"ではなく"true"

// ✅ 合格例
<input aria-invalid="true" aria-describedby="error-msg" />
<div id="error-msg">エラーメッセージ</div>
```

### 5. フォーカス可能な要素（focus-order-semantics）

**チェック内容：**
- フォーカス可能な要素が適切なHTML要素か
- divやspanに無理にtabindexを付けていないか

**例：**
```tsx
// ❌ 違反例
<div tabIndex={0} onClick={handleClick}>
  クリック
</div>

// ✅ 合格例
<button onClick={handleClick}>
  クリック
</button>
```

## 🛠️ 実際の使用例

### Buttonコンポーネントのチェック

1. **Storybookを開く**
   ```bash
   npm run storybook
   ```

2. **"Design System > Button > Primary"を選択**

3. **Accessibilityタブで確認**
   - Violations: 0件 ✅
   - カラーコントラスト: 合格
   - ボタン名: 合格
   - ARIA属性: 合格

4. **Controlsタブでテスト**
   - `children`を空にしてみる → Violationが表示される
   - `disabled`をtrueにする → aria-disabledが適切に設定されているか確認

### Inputコンポーネントのチェック

1. **"Design System > Input > Default"を選択**

2. **Accessibilityタブで確認**
   - Violations: 0件 ✅
   - ラベルの関連付け: 合格
   - フォームフィールド: 合格

3. **Controlsタブでテスト**
   - `label`を空にしてみる → Violationが表示される
   - `error`にメッセージを入力 → role="alert"が機能しているか確認

## 📝 実践的なチェックリスト

### コンポーネント作成時

- [ ] Storybookでストーリーを作成
- [ ] すべてのバリエーションをストーリーに追加
- [ ] Accessibilityタブで違反がないか確認
- [ ] Controlsタブで各プロパティをテスト
- [ ] エラー状態、無効化状態もチェック

### レビュー時

- [ ] Violations（違反）が0件か
- [ ] Incompleteの項目を手動で確認
- [ ] キーボード操作をテスト（Tab、Enter、Space）
- [ ] スクリーンリーダーで読み上げテスト（オプション）

## 🎯 よくある問題と解決方法

### 問題1: "Elements must have sufficient color contrast"

**原因:** テキストと背景のコントラスト比が不足

**解決方法:**
```tsx
// デザイントークンの色を使用
import { colors } from '../tokens/colors';

// WCAG AA準拠の色の組み合わせ
const styles = {
  color: colors.text.primary,      // #212121
  backgroundColor: colors.background.default, // #ffffff
  // コントラスト比: 16.1:1 ✅
};
```

### 問題2: "Form elements must have labels"

**原因:** input要素にラベルが関連付けられていない

**解決方法:**
```tsx
// useIdでユニークなIDを生成
const inputId = useId();

<label htmlFor={inputId}>お名前</label>
<input id={inputId} type="text" />
```

### 問題3: "Buttons must have discernible text"

**原因:** ボタンに認識可能なテキストがない

**解決方法:**
```tsx
// アイコンのみのボタンにaria-labelを追加
<button aria-label="閉じる">
  <span aria-hidden="true">×</span>
</button>
```

### 問題4: "ARIA attributes must be valid"

**原因:** ARIA属性の値が不正

**解決方法:**
```tsx
// ❌ 不正な値
<input aria-invalid="yes" />

// ✅ 正しい値
<input aria-invalid={true} />  // または "true"
```

## 🔧 高度な使い方

### ストーリーごとにルールをカスタマイズ

```tsx
// Button.stories.tsx
export const Primary: Story = {
  args: {
    children: '保存',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // 特定のルールを無効化（推奨しません）
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};
```

### すべてのストーリーに共通設定

```tsx
// .storybook/preview.ts
const preview = {
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // デフォルトで厳格なチェック
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};

export default preview;
```

### 特定の要素を除外

```tsx
export const CustomButton: Story = {
  args: {
    children: 'ボタン',
  },
  parameters: {
    a11y: {
      element: '#root',  // チェック対象の要素
      config: {
        rules: [
          {
            id: 'color-contrast',
            selector: '*:not(.excluded)',  // .excludedクラスを除外
          },
        ],
      },
    },
  },
};
```

## 📚 参考資料

### axe-coreのルール一覧

A11yアドオンは内部でaxe-coreを使用しています。

- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- すべてのチェックルールと説明が記載されています

### WCAG基準

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- 各ルールがWCAGのどの基準に対応しているか確認できます

### Deque University

- [Deque University](https://dequeuniversity.com/)
- 各ルールの詳細な説明と修正方法

## 💡 ベストプラクティス

### 1. すべてのストーリーでチェック

各コンポーネントのすべてのバリエーション・状態をストーリーとして作成し、それぞれでアクセシビリティをチェックします。

```tsx
export const Primary: Story = { /* ... */ };
export const Secondary: Story = { /* ... */ };
export const Disabled: Story = { /* ... */ };
export const Loading: Story = { /* ... */ };
export const WithError: Story = { /* ... */ };
```

### 2. 継続的なチェック

コンポーネントを変更するたびにStorybookで確認し、違反が発生していないかチェックします。

### 3. 自動化

CI/CDパイプラインにStorybookのビルドとアクセシビリティテストを組み込むことも可能です。

```bash
# Storybookをビルド
npm run build-storybook

# テストランナーでa11yチェック（別途設定が必要）
npm run test-storybook
```

### 4. 手動テストも忘れずに

自動チェックでは検出できない問題もあります：
- キーボード操作の流れ
- スクリーンリーダーの読み上げ順序
- フォーカスの移動

これらは実際にキーボードやスクリーンリーダーでテストしましょう。

## まとめ

Storybook A11yアドオンは、開発中にリアルタイムでアクセシビリティ問題を発見できる強力なツールです。

**基本的な流れ:**
1. Storybookを起動
2. ストーリーを選択
3. Accessibilityタブを確認
4. Violationsを0件にする
5. Incompleteは手動確認

これにより、WCAG準拠のアクセシブルなコンポーネントを効率的に開発できます！
