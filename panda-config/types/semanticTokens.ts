import type { GetPandaSemanticToken } from "./interfaces";

/**
 * セマンティックカラートークンの型安全な定義
 *
 * 嬉しいポイント:
 * 1. VSCodeで補完が効く
 *    - bg.canvas, bg.paper, text.primary など、定義済みのトークンが候補に出る
 *    - 存在しないトークン名を書くとエラーになる（typo防止）
 *
 * 2. ダークモード対応が型安全
 *    - { base: string, _dark: string } の形式を強制
 *    - ダークモードの定義漏れを防げる
 *
 * 3. リファクタリングが安全
 *    - トークン名変更時、全ての使用箇所がエラーになる
 *    - 変更漏れを防げる
 *
 * 4. ドキュメント効果
 *    - どんなセマンティックトークンが存在するか一目瞭然
 *    - コメントで各トークンの用途を説明できる
 */
export const pandaSemanticColors: GetPandaSemanticToken<"colors"> = {
  // ブランドカラー - サイト全体で使用するプライマリカラー
  brand: {
    primary: { value: "#2196f3" },
    primaryLight: { value: "#64b5f6" },
    primaryDark: { value: "#1976d2" },
  },

  // テキストカラー - ライト/ダークモード対応
  text: {
    primary: { value: { base: "#212121", _dark: "#fafafa" } },
    secondary: { value: { base: "#616161", _dark: "#f5f5f5" } },
    tertiary: { value: { base: "#757575", _dark: "#eeeeee" } },
    disabled: { value: { base: "#bdbdbd", _dark: "#757575" } },
    inverse: { value: { base: "#ffffff", _dark: "#212121" } },
    link: { value: { base: "#1976d2", _dark: "#42a5f5" } },
    linkHover: { value: { base: "#1565c0", _dark: "#64b5f6" } },
    error: { value: { base: "#d32f2f", _dark: "#ef5350" } },
    success: { value: { base: "#388e3c", _dark: "#66bb6a" } },
    warning: { value: { base: "#ef6c00", _dark: "#ffa726" } },
  },

  // 背景カラー - ライト/ダークモード対応
  bg: {
    canvas: { value: { base: "#ffffff", _dark: "#212121" } },
    paper: { value: { base: "#fafafa", _dark: "#424242" } },
    subtle: { value: { base: "#f5f5f5", _dark: "#424242" } },
    hover: { value: { base: "#f5f5f5", _dark: "#616161" } },
    active: { value: { base: "#eeeeee", _dark: "#757575" } },
    disabled: { value: { base: "#f5f5f5", _dark: "#424242" } },
  },

  // ボーダーカラー - ライト/ダークモード対応
  border: {
    default: { value: { base: "#e0e0e0", _dark: "#616161" } },
    subtle: { value: { base: "#eeeeee", _dark: "#424242" } },
    strong: { value: { base: "#bdbdbd", _dark: "#757575" } },
    hover: { value: { base: "#bdbdbd", _dark: "#757575" } },
    focus: { value: "#2196f3" },
    error: { value: "#f44336" },
    success: { value: "#4caf50" },
    warning: { value: "#ff9800" },
  },

  // アコーディオンカラー - コンポーネント固有
  accordion: {
    bg: { value: { base: "#ffffff", _dark: "#424242" } },
    bgHover: { value: { base: "#fafafa", _dark: "#616161" } },
    bgActive: { value: { base: "#f5f5f5", _dark: "#757575" } },
    bgOpen: { value: { base: "#fafafa", _dark: "#424242" } },
    border: { value: { base: "#e0e0e0", _dark: "#616161" } },
    text: { value: { base: "#212121", _dark: "#fafafa" } },
    icon: { value: { base: "#757575", _dark: "#eeeeee" } },
  },

  // インプットカラー - フォーム要素用
  input: {
    bg: { value: { base: "#ffffff", _dark: "#424242" } },
    bgDisabled: { value: { base: "#f5f5f5", _dark: "#616161" } },
    text: { value: { base: "#212121", _dark: "#fafafa" } },
    textDisabled: { value: { base: "#9e9e9e", _dark: "#757575" } },
    placeholder: { value: { base: "#bdbdbd", _dark: "#9e9e9e" } },
    border: { value: { base: "#e0e0e0", _dark: "#616161" } },
    borderHover: { value: { base: "#bdbdbd", _dark: "#757575" } },
    borderFocus: { value: "#2196f3" },
    borderError: { value: "#f44336" },
    borderSuccess: { value: "#4caf50" },
    label: { value: { base: "#616161", _dark: "#eeeeee" } },
    helperText: { value: { base: "#757575", _dark: "#bdbdbd" } },
    errorText: { value: { base: "#d32f2f", _dark: "#ef5350" } },
  },
};
