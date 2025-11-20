/**
 * カラートークン (Panda CSS互換レイヤー)
 *
 * Panda CSSのトークンを既存のAPIでエクスポートします
 */

import { token } from '../../../styled-system/tokens';

// プリミティブカラー
export const primitive = {
  gray: {
    50: token('colors.gray.50'),
    100: token('colors.gray.100'),
    200: token('colors.gray.200'),
    300: token('colors.gray.300'),
    400: token('colors.gray.400'),
    500: token('colors.gray.500'),
    600: token('colors.gray.600'),
    700: token('colors.gray.700'),
    800: token('colors.gray.800'),
    900: token('colors.gray.900'),
  },
  blue: {
    50: token('colors.blue.50'),
    100: token('colors.blue.100'),
    200: token('colors.blue.200'),
    300: token('colors.blue.300'),
    400: token('colors.blue.400'),
    500: token('colors.blue.500'),
    600: token('colors.blue.600'),
    700: token('colors.blue.700'),
    800: token('colors.blue.800'),
    900: token('colors.blue.900'),
  },
  red: {
    50: token('colors.red.50'),
    100: token('colors.red.100'),
    200: token('colors.red.200'),
    300: token('colors.red.300'),
    400: token('colors.red.400'),
    500: token('colors.red.500'),
    600: token('colors.red.600'),
    700: token('colors.red.700'),
    800: token('colors.red.800'),
    900: token('colors.red.900'),
  },
  green: {
    50: token('colors.green.50'),
    100: token('colors.green.100'),
    200: token('colors.green.200'),
    300: token('colors.green.300'),
    400: token('colors.green.400'),
    500: token('colors.green.500'),
    600: token('colors.green.600'),
    700: token('colors.green.700'),
    800: token('colors.green.800'),
    900: token('colors.green.900'),
  },
  orange: {
    50: token('colors.orange.50'),
    100: token('colors.orange.100'),
    200: token('colors.orange.200'),
    300: token('colors.orange.300'),
    400: token('colors.orange.400'),
    500: token('colors.orange.500'),
    600: token('colors.orange.600'),
    700: token('colors.orange.700'),
    800: token('colors.orange.800'),
    900: token('colors.orange.900'),
  },
  pink: {
    50: token('colors.pink.50'),
    100: token('colors.pink.100'),
    200: token('colors.pink.200'),
    300: token('colors.pink.300'),
    400: token('colors.pink.400'),
    500: token('colors.pink.500'),
    600: token('colors.pink.600'),
    700: token('colors.pink.700'),
    800: token('colors.pink.800'),
    900: token('colors.pink.900'),
  },
  white: token('colors.white'),
  black: token('colors.black'),
  yellow: token('colors.yellow'),
} as const;

// ブランドカラー
export const brand = {
  primary: token('colors.brand.primary'),
  primaryLight: token('colors.brand.primaryLight'),
  primaryDark: token('colors.brand.primaryDark'),
} as const;

// テキストカラー（ライトモード）
export const text = {
  primary: token('colors.gray.900'),
  secondary: token('colors.gray.700'),
  tertiary: token('colors.gray.600'),
  disabled: token('colors.gray.400'),
  inverse: token('colors.white'),
  link: token('colors.blue.700'),
  linkHover: token('colors.blue.800'),
  error: token('colors.red.700'),
  success: token('colors.green.700'),
  warning: token('colors.orange.800'),
} as const;

// 背景カラー（ライトモード）
export const background = {
  default: token('colors.white'),
  paper: token('colors.gray.50'),
  subtle: token('colors.gray.100'),
  hover: token('colors.gray.100'),
  active: token('colors.gray.200'),
  disabled: token('colors.gray.100'),
} as const;

// ボーダーカラー（ライトモード）
export const border = {
  default: token('colors.gray.300'),
  subtle: token('colors.gray.200'),
  strong: token('colors.gray.400'),
  hover: token('colors.gray.400'),
  focus: token('colors.blue.500'),
  error: token('colors.red.500'),
  success: token('colors.green.500'),
  warning: token('colors.orange.500'),
} as const;

// フォーカス
export const focus = {
  ring: token('colors.blue.500'),
  background: token('colors.yellow'),
  outline: token('colors.black'),
  text: token('colors.black'),
} as const;

// フィードバック
export const feedback = {
  error: {
    bg: token('colors.red.50'),
    border: token('colors.red.300'),
    text: token('colors.red.800'),
    icon: token('colors.red.600'),
  },
  success: {
    bg: token('colors.green.50'),
    border: token('colors.green.300'),
    text: token('colors.green.800'),
    icon: token('colors.green.600'),
  },
  warning: {
    bg: token('colors.orange.50'),
    border: token('colors.orange.300'),
    text: token('colors.orange.900'),
    icon: token('colors.orange.600'),
  },
  info: {
    bg: token('colors.blue.50'),
    border: token('colors.blue.300'),
    text: token('colors.blue.800'),
    icon: token('colors.blue.600'),
  },
} as const;

// コンポーネント固有のカラー
export const button = {
  primary: {
    bg: token('colors.brand.primary'),
    bgHover: token('colors.blue.600'),
    bgActive: token('colors.blue.700'),
    bgDisabled: token('colors.gray.300'),
    text: token('colors.white'),
    textDisabled: token('colors.gray.500'),
    border: token('colors.brand.primary'),
    borderHover: token('colors.blue.600'),
  },
  secondary: {
    bg: token('colors.white'),
    bgHover: token('colors.gray.50'),
    bgActive: token('colors.gray.100'),
    bgDisabled: token('colors.gray.100'),
    text: token('colors.gray.700'),
    textDisabled: token('colors.gray.400'),
    border: token('colors.gray.300'),
    borderHover: token('colors.gray.400'),
  },
  outline: {
    bg: 'transparent',
    bgHover: token('colors.blue.50'),
    bgActive: token('colors.blue.100'),
    bgDisabled: 'transparent',
    text: token('colors.brand.primary'),
    textDisabled: token('colors.gray.400'),
    border: token('colors.brand.primary'),
    borderHover: token('colors.blue.600'),
    borderDisabled: token('colors.gray.300'),
  },
  danger: {
    bg: token('colors.red.600'),
    bgHover: token('colors.red.700'),
    bgActive: token('colors.red.800'),
    bgDisabled: token('colors.gray.300'),
    text: token('colors.white'),
    textDisabled: token('colors.gray.500'),
    border: token('colors.red.600'),
    borderHover: token('colors.red.700'),
  },
} as const;

export const input = {
  bg: token('colors.white'),
  bgDisabled: token('colors.gray.100'),
  text: token('colors.gray.900'),
  textDisabled: token('colors.gray.500'),
  placeholder: token('colors.gray.400'),
  border: token('colors.gray.300'),
  borderHover: token('colors.gray.400'),
  borderFocus: token('colors.brand.primary'),
  borderError: token('colors.red.500'),
  borderSuccess: token('colors.green.500'),
  label: token('colors.gray.700'),
  helperText: token('colors.gray.600'),
  errorText: token('colors.red.700'),
} as const;

export const accordion = {
  bg: token('colors.accordion.bg'),
  bgHover: token('colors.accordion.bgHover'),
  bgActive: token('colors.accordion.bgActive'),
  bgOpen: token('colors.accordion.bgOpen'),
  border: token('colors.accordion.border'),
  text: token('colors.accordion.text'),
  icon: token('colors.accordion.icon'),
} as const;

export const breadcrumbs = {
  text: token('colors.gray.600'),
  textCurrent: token('colors.gray.900'),
  link: token('colors.blue.700'),
  linkHover: token('colors.blue.800'),
  separator: token('colors.gray.400'),
} as const;

// ライトモード用のカラー統合
export const colors = {
  primitive,
  brand,
  text,
  background,
  border,
  focus,
  feedback,
  button,
  input,
  accordion,
  breadcrumbs,
} as const;

// ダークモード用のカラー
export const darkText = {
  primary: token('colors.gray.50'),
  secondary: token('colors.gray.100'),
  tertiary: token('colors.gray.200'),
  disabled: token('colors.gray.600'),
  inverse: token('colors.gray.900'),
  link: token('colors.blue.400'),
  linkHover: token('colors.blue.300'),
  error: token('colors.red.400'),
  success: token('colors.green.400'),
  warning: token('colors.orange.400'),
} as const;

export const darkBackground = {
  default: token('colors.gray.900'),
  paper: token('colors.gray.800'),
  subtle: token('colors.gray.800'),
  hover: token('colors.gray.700'),
  active: token('colors.gray.600'),
  disabled: token('colors.gray.800'),
} as const;

export const darkBorder = {
  default: token('colors.gray.700'),
  subtle: token('colors.gray.800'),
  strong: token('colors.gray.600'),
  hover: token('colors.gray.600'),
  focus: token('colors.blue.500'),
  error: token('colors.red.500'),
  success: token('colors.green.500'),
  warning: token('colors.orange.500'),
} as const;

// ダークモード用のカラー統合
export const darkColors = {
  primitive,
  brand,
  text: darkText,
  background: darkBackground,
  border: darkBorder,
  focus,
  feedback,
  button,
  input,
  accordion,
  breadcrumbs,
} as const;

export type ColorTokens = typeof colors;
export type DarkColorTokens = typeof darkColors;
