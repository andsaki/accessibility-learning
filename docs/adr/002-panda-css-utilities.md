# ADR 002: Panda CSSユーティリティ（css / cx）の積極活用

## ステータス

承認済み (Accepted) - 2025-02-15

## コンテキスト

- これまで `AccessibilityFeatures` や `WCAGLevels` などのセクションは、`useTheme()` や `spacing.scale[...]` で取得した値を **inline style** に直接書き込んでいた。
- inline style は即時性がある反面、以下の課題が顕在化した。
  - **テーマ切り替え時の一貫性**: Panda CSS の semantic tokens を経由しない箇所が散在し、Light / Dark で色がずれる。
  - **再利用性と保守性の低下**: スタイルが分散しておりクラス名から意図を追えない。
  - **組み合わせ難易度**: hover / focus などの擬似クラス、レスポンシブ指定を inline style で表現しづらい。
- Panda CSS の `css()` / `cx()` ユーティリティを使えば、`styled-system` で生成したトークン値を型安全に参照でき、クラスを合成しやすい。

## 検討した選択肢

1. **現状維持**（inline style を継続）
2. **CSS Modules / SCSS へ移行**
3. **Panda CSS の `css` / `cx` を全面利用**

### 1. 現状維持
- ✅ 追加セットアップ不要
- ❌ テーマ差し替えや再利用に弱い
- ❌ レイアウト定義が散在し、レビュー時に diff が追いづらい

### 2. CSS Modules / SCSS
- ✅ クラス単位で整理できる
- ❌ Panda のトークン参照が難しく、テーマ変数との橋渡しが煩雑
- ❌ グローバル設定（recipes / semantic tokens）との整合が取りづらい

### 3. Panda CSS `css` / `cx`
- ✅ `token()` / semantic tokens を型安全に取得
- ✅ 擬似クラスやレスポンシブ指定もユーティリティ内で完結
- ✅ `cx` で任意のクラスを合成し、`data-*` や外部クラスにも対応できる
- ⚠️ `@/styled-system` への alias 設定が必要（tsconfig / Vite で対応済み）

## 決定

**Panda CSS の `css()` / `cx()` を React セクションや主要コンポーネントで活用する。**

- `AccessibilityFeatures`, `WCAGLevelInfo`, `WCAGLevels` など、inline style が中心だったセクションを `css` ユーティリティに置き換える。
- クラスの合成（セクション固有の `className` と Panda レシピ）には `cx` を使用する。
- `Button` など runtime 値を扱うコンポーネントは、必要に応じて CSS 変数 + `cx` / `css` を組み合わせる（例: WCAG フォーカスリング）。

## 根拠

1. **一貫性とテーマ対応**  
   Panda のトークンを通すことで、Light / Dark テーマやセマンティックカラー変更に追従しやすくなる。

2. **保守性の向上**  
   スタイルを関数化しておくと差分がクラス単位で可視化され、レビューやリファクタリングが容易。

3. **開発体験**  
   TypeScript の補完・型チェックが効き、`cx` で条件付きクラスも安全に記述できる。

4. **将来拡張**  
   追加セクションや Storybook への転用時も `css` 定義を再利用できる。フォーカスリングやアクセシビリティ要件も CSS Vars で一括制御できる。

## 影響範囲

- `tsconfig.*` と `vite.config.ts` に `@/styled-system` エイリアスを設定。
- 該当セクション/コンポーネントが `css` / `cx` を import し、inline style を段階的に廃止。
- CSS 変数でテーマ依存値を注入するケース（フォーカスリングなど）は、ドキュメント化して他コンポーネントの指針とする。

## 本PRでの適用例

- `AccessibilityFeatures.tsx`  
  `useTheme` や `spacing.scale` を使っていた inline style を排し、Panda トークンを `css()` クラスにラップ。セクション固有クラスと `cx` で合成。

- `WCAGLevelInfo.tsx`  
  情報カード・リストのスタイルを `css` で共通化し、`token()` でアクセントカラーを取得。

- `WCAGLevels.tsx`  
  大規模な inline style を `css` ユーティリティに置き換え、カード／デモ／リストなどの共通クラスを定義。`cx` で条件付きクラスや既存クラスとの合成を行った。

- `design-system/Button.tsx`  
  WCAG レベルに応じたフォーカスリングを CSS 変数にまとめ、`cx` でレシピクラスに合成。recipe だけでは任意値を注入できない事情をコメントで明示。
  - Panda の recipe はトークン/リテラル値しか扱えず、実行時にアクセシビリティ情報から得た値を直接バインドできないため、CSS カスタムプロパティで値を注入し、グローバルスタイル側で `var(--focus-outline)` などを参照する。

- 設定面  
  TypeScript / Vite で `@/styled-system/*` を解決できるよう `baseUrl` + `paths` を整備し、Panda 生成物にアクセスしやすくした。

この方針により、inline style 依存が減り、Panda トークンの恩恵を得ながらスタイルを再利用できる土台が整った。

## フォローアップ

- 既存セクション以外でも inline style を見つけたら `css` 化するガイドラインを作成。
- Storybook ドキュメントに `css` / `cx` の使い方を記載し、デザイナー・開発者間の共通言語にする。
- `TypeScript での型推論 / 補完`  
  Panda の `css` / `token` を経由することで、VSCode などでトークン名の補完・型エラー検知が効く。デザイナーと同じ語彙でスペーシングやカラーを選択でき、ヒューマンエラーを抑制。
