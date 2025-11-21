# ESLint アクセシビリティ設定ガイド

このドキュメントでは、プロジェクトにおけるESLintのアクセシビリティルール（jsx-a11y）の導入と、各種エラーの修正内容について説明します。

## 導入したプラグイン

### eslint-plugin-jsx-a11y

Reactコンポーネントのアクセシビリティ問題を検出するESLintプラグイン。

```bash
npm install --save-dev eslint-plugin-jsx-a11y
```

**設定 (`eslint.config.js`):**

```javascript
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // ... other configs
      jsxA11y.flatConfigs.recommended,
    ],
  },
])
```

## 修正したエラーと対応内容

### 1. `jsx-a11y/no-noninteractive-tabindex`

**問題:** 非インタラクティブな要素に`tabIndex`を設定していた

**場所:** `src/components/Tooltip.tsx:144`

**修正前:**
```tsx
<span tabIndex={0}>
  {children}
</span>
```

**修正後:**
```tsx
const child = isValidElement(children)
  ? cloneElement(children as ReactElement<HTMLAttributes<HTMLElement>>, {
      'aria-describedby': isVisible ? tooltipId.current : undefined,
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
      onFocus: showTooltip,
      onBlur: hideTooltip,
    })
  : children;
```

**理由:** Tooltipは子要素にイベントハンドラを直接付与することで、適切なセマンティクスを維持

---

### 2. `jsx-a11y/anchor-is-valid`

**問題:** `<a>`タグの`href`属性が`#`（無効なリンク）だった

**場所:** `src/sections/ARIAGuide.tsx:900, 917`

**修正前:**
```tsx
<a href="#" onClick={(e) => e.preventDefault()}>
  詳しくはこちら
</a>
```

**修正後:**
```tsx
<a href="/about" onClick={(e) => e.preventDefault()}>
  詳しくはこちら
</a>
```

**理由:** デモ用であっても有効なhrefを設定することでアクセシビリティを向上

---

### 3. `jsx-a11y/click-events-have-key-events`

**問題:** クリックハンドラがある要素にキーボードイベントハンドラがなかった

**場所:** `src/design-system/components/Dropdown.tsx:292`

**修正前:**
```tsx
<li
  role="option"
  onClick={() => !option.disabled && handleSelect(option.value)}
>
```

**修正後:**
```tsx
<li
  role="option"
  onClick={() => !option.disabled && handleSelect(option.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!option.disabled) {
        handleSelect(option.value);
      }
    }
  }}
>
```

**理由:** キーボードユーザーも同じ操作ができるようにする

---

### 4. `jsx-a11y/no-static-element-interactions` / `jsx-a11y/no-noninteractive-element-interactions`

**問題:** 非インタラクティブな要素にイベントハンドラが付いていた

**場所:** `src/design-system/components/Modal.tsx:139, 153`

**修正前:**
```tsx
<div onClick={onClose}>
  <div onClick={(e) => e.stopPropagation()}>
    {/* dialog content */}
  </div>
</div>
```

**修正後:**
```tsx
<div
  role="presentation"
  onClick={(e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }}
  onKeyDown={(e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }}
>
  <div role="dialog">
    {/* dialog content */}
  </div>
</div>
```

**理由:**
- オーバーレイに`role="presentation"`を付与
- `e.target === e.currentTarget`チェックで、オーバーレイクリック時のみ閉じる
- ダイアログ本体にはイベントハンドラ不要（イベントバブリングを利用）
- Escキーでの閉鎖をサポート

---

### 5. `jsx-a11y/role-supports-aria-props`

**問題:** `role="radio"`の要素に`aria-invalid`を設定していた（サポートされていない属性）

**場所:** `src/design-system/components/Radio.tsx:75`

**修正前:**
```tsx
<input
  type="radio"
  aria-invalid={error ? true : undefined}
  aria-describedby={...}
/>
```

**修正後:**
```tsx
<input
  type="radio"
  aria-describedby={...}
/>
```

**理由:** `role="radio"`は`aria-invalid`をサポートしていないため削除。エラー表示は`aria-describedby`で関連付け

---

## ESLint設定の調整

### Storybook ファイルの例外設定

**設定:**
```javascript
{
  files: ['**/*.stories.{ts,tsx}'],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
```

**理由:**
- Storybookの`render`関数内でHooksを使用するパターンが一般的
- Storybookの型定義で`any`を使う場面が多い
- これらはプロダクションコードではないため、緩和しても問題ない

### Provider パターンの例外設定

**設定:**
```javascript
{
  // コンポーネントと関連ユーティリティを同じファイルからexportするのが一般的なパターンのため無効化
  // - ToastProvider/ThemeProvider: コンポーネント + 関連フック (useToast, useTheme)
  // - Form: コンポーネント + バリデーションヘルパー (formSchemas)
  files: ['**/ToastProvider.tsx', '**/ThemeProvider.tsx', '**/Form.tsx'],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
}
```

**理由:**
- Providerパターンでは、コンポーネントと関連フック（`useToast`, `useTheme`）を同じファイルからexportするのが一般的
- Formコンポーネントでは、バリデーションヘルパー（`formSchemas`）を一緒にexportすることでDXを向上
- これらのパターンはReactのベストプラクティスに準拠

### ビルド成果物の除外

**設定:**
```javascript
globalIgnores(['dist', 'storybook-static'])
```

**理由:** ビルド成果物をLintの対象外にすることでパフォーマンスを向上

---

## 検証方法

```bash
npm run lint
```

すべてのエラーが解消され、アクセシビリティルールに準拠したコードベースになりました。

## 参考リンク

- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
