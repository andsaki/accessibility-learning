import { defineConfig } from "@pandacss/dev";
import { button } from "./panda-config/recipes/button";
import { input } from "./panda-config/recipes/input";
import { text } from "./panda-config/recipes/text";
import { textarea } from "./panda-config/recipes/textarea";
import { accordion } from "./panda-config/recipes/accordion";
import { breadcrumbs } from "./panda-config/recipes/breadcrumbs";
import { checkbox } from "./panda-config/recipes/checkbox";
import { dropdown } from "./panda-config/recipes/dropdown";
import { loading } from "./panda-config/recipes/loading";
import { infoBox } from "./panda-config/recipes/infobox";
import { modal } from "./panda-config/recipes/modal";
import { pandaSemanticColors } from "./panda-config/types/semanticTokens";
import {
  pandaColors,
  pandaSpacing,
  pandaFontSizes,
  pandaFontWeights,
  pandaLineHeights,
  pandaLetterSpacings,
  pandaRadii,
  pandaShadows,
  pandaDurations,
  pandaEasings,
  pandaBorders,
  pandaBorderWidths,
} from "./panda-config/types/tokens";
// Force rebuild

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Theme conditions
  conditions: {
    // ThemeProviderが付与するdata-theme属性に従って手動切替やlocalStorage保存を反映する。
    // OS依存の@media (prefers-color-scheme: …)だけだとボタン操作で強制切替できないため採用しない。
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        // 型安全なトークン定義
        // panda-config/types/tokens.ts で定義されています
        //
        // 嬉しいポイント:
        // - VSCodeで gray.50, blue.400 などの補完が効く
        // - typoを防げる（存在しないトークン名はエラー）
        // - デザインシステムの一貫性を保てる
        colors: pandaColors,
        spacing: pandaSpacing,
        fontSizes: pandaFontSizes,
        fontWeights: pandaFontWeights,
        lineHeights: pandaLineHeights,
        letterSpacings: pandaLetterSpacings,
        radii: pandaRadii,
        shadows: pandaShadows,
        durations: pandaDurations,
        easings: pandaEasings,
        borders: pandaBorders,
        borderWidths: pandaBorderWidths,
      },
      semanticTokens: {
        // 型安全なセマンティックトークン定義
        // panda-config/types/semanticTokens.ts で定義されています
        //
        // 嬉しいポイント:
        // - VSCodeで bg.primary, contents.primary などの補完が効く
        // - typoを防げる（存在しないトークン名はエラー）
        // - ダークモード対応の定義漏れを防げる
        colors: pandaSemanticColors,
      },
      breakpoints: {
        xs: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      recipes: {
        button,
        input,
        text,
        textarea,
        accordion,
        breadcrumbs,
        checkbox,
        dropdown,
        loading,
        infoBox,
        modal,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Static CSS generation for all button variants
  staticCss: {
    recipes: {
      button: [
        // All size variants
        { size: ['sm', 'md', 'lg'] },
        // All variant + wcagLevel combinations
        { variant: ['outline'], wcagLevel: ['A'] },
        { variant: ['outline'], wcagLevel: ['AA'] },
        { variant: ['outline'], wcagLevel: ['AAA'] },
        { variant: ['primary'], wcagLevel: ['A'] },
        { variant: ['primary'], wcagLevel: ['AA'] },
        { variant: ['primary'], wcagLevel: ['AAA'] },
        { variant: ['secondary'], wcagLevel: ['A'] },
        { variant: ['secondary'], wcagLevel: ['AA'] },
        { variant: ['secondary'], wcagLevel: ['AAA'] },
        { variant: ['danger'], wcagLevel: ['A'] },
        { variant: ['danger'], wcagLevel: ['AA'] },
        { variant: ['danger'], wcagLevel: ['AAA'] },
      ],
      input: [
        { size: ['sm', 'md', 'lg'], state: ['default', 'error'], wcagLevel: ['A', 'AA', 'AAA'] },
      ],
      text: [
        {
          variant: [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'body-large',
            'body',
            'body-small',
            'caption',
            'overline',
          ],
          align: ['left', 'center', 'right', 'justify'],
        },
      ],
      textarea: [
        { state: ['default', 'error'], wcagLevel: ['A', 'AA', 'AAA'] },
      ],
      accordion: [
        { wcagLevel: ['A', 'AA', 'AAA'] },
      ],
      breadcrumbs: [
        { wcagLevel: ['A', 'AA', 'AAA'] },
      ],
      checkbox: [
        { wcagLevel: ['A', 'AA', 'AAA'], state: ['default', 'error'] },
      ],
      dropdown: [
        { state: ['default', 'error'], placeholder: ['empty', 'filled'] },
      ],
      loading: [
        { size: ['sm', 'md', 'lg', 'xl'], color: ['primary', 'secondary', 'white'] },
      ],
      infoBox: [
        { variant: ['info', 'warning', 'success', 'tip'], wcagLevel: ['A', 'AA', 'AAA'], leftBorder: [true] },
      ],
      modal: [
        { size: ['sm', 'md', 'lg'], wcagLevel: ['A', 'AA', 'AAA'] },
      ],
    }
  },

  // Global CSS
  globalCss: {
    html: {
      fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
      lineHeight: '1.5',
      fontWeight: '400',
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    body: {
      margin: '0',
      display: 'flex',
      placeItems: 'center',
      minWidth: '320px',
      minHeight: '100vh',
      color: 'contents.primary',
      backgroundColor: 'bg.primary',
    },
    '#root': {
      width: '100%',
      margin: '0 auto',
      textAlign: 'left',
    },
    'input[type="checkbox"], input[type="radio"]': {
      accentColor: '#3b82f6',
    },
    // Accordion styles
    'details[open] .accordion-icon': {
      transform: 'rotate(180deg)',
    },
    'summary::-webkit-details-marker': {
      display: 'none',
    },
    'summary::marker': {
      display: 'none',
    },
    // Button focus state management (keyboard focus only)
    'button[data-focused]': {
      backgroundColor: 'var(--focus-bg) !important',
      outline: 'var(--focus-outline-width) solid var(--focus-outline) !important',
      outlineOffset: 'var(--focus-outline-offset) !important',
    },
    'button[data-focused]:not([data-focus-text-inherit])': {
      color: 'var(--focus-text) !important',
    },
    'button[data-focused]:hover': {
      backgroundColor: 'var(--focus-bg) !important',
    },
    'button[data-focused]:hover:not([data-focus-text-inherit])': {
      color: 'var(--focus-text) !important',
    },
    'input[data-focused], textarea[data-focused]': {
      backgroundColor: 'var(--focus-bg) !important',
      color: 'var(--focus-text) !important',
      borderColor: 'var(--focus-outline) !important',
      outline: 'var(--focus-outline-width) solid var(--focus-outline) !important',
      outlineOffset: 'var(--focus-outline-offset) !important',
    },
    'input[data-focused]:not([data-focus-text-inherit]), textarea[data-focused]:not([data-focus-text-inherit])': {
      color: 'var(--focus-text) !important',
    },
    'input[data-focused]:hover, textarea[data-focused]:hover': {
      backgroundColor: 'var(--focus-bg) !important',
    },
    'input[data-focused]:hover:not([data-focus-text-inherit]), textarea[data-focused]:hover:not([data-focus-text-inherit])': {
      color: 'var(--focus-text) !important',
    },
  },
});
