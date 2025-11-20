import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Theme conditions
  conditions: {
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // Primitive colors (基礎色)
          gray: {
            50: { value: '#fafafa' },
            100: { value: '#f5f5f5' },
            200: { value: '#eeeeee' },
            300: { value: '#e0e0e0' },
            400: { value: '#bdbdbd' },
            500: { value: '#9e9e9e' },
            600: { value: '#757575' },
            700: { value: '#616161' },
            800: { value: '#424242' },
            900: { value: '#212121' },
          },
          blue: {
            50: { value: '#e3f2fd' },
            100: { value: '#bbdefb' },
            200: { value: '#90caf9' },
            300: { value: '#64b5f6' },
            400: { value: '#42a5f5' },
            500: { value: '#2196f3' },
            600: { value: '#1e88e5' },
            700: { value: '#1976d2' },
            800: { value: '#1565c0' },
            900: { value: '#0d47a1' },
          },
          red: {
            50: { value: '#ffebee' },
            100: { value: '#ffcdd2' },
            200: { value: '#ef9a9a' },
            300: { value: '#e57373' },
            400: { value: '#ef5350' },
            500: { value: '#f44336' },
            600: { value: '#e53935' },
            700: { value: '#d32f2f' },
            800: { value: '#c62828' },
            900: { value: '#b71c1c' },
          },
          green: {
            50: { value: '#e8f5e9' },
            100: { value: '#c8e6c9' },
            200: { value: '#a5d6a7' },
            300: { value: '#81c784' },
            400: { value: '#66bb6a' },
            500: { value: '#4caf50' },
            600: { value: '#43a047' },
            700: { value: '#388e3c' },
            800: { value: '#2e7d32' },
            900: { value: '#1b5e20' },
          },
          orange: {
            50: { value: '#fff3e0' },
            100: { value: '#ffe0b2' },
            200: { value: '#ffcc80' },
            300: { value: '#ffb74d' },
            400: { value: '#ffa726' },
            500: { value: '#ff9800' },
            600: { value: '#fb8c00' },
            700: { value: '#f57c00' },
            800: { value: '#ef6c00' },
            900: { value: '#e65100' },
          },
          pink: {
            50: { value: '#fce4ec' },
            100: { value: '#f8bbd0' },
            200: { value: '#f48fb1' },
            300: { value: '#f06292' },
            400: { value: '#ec407a' },
            500: { value: '#e91e63' },
            600: { value: '#d81b60' },
            700: { value: '#c2185b' },
            800: { value: '#ad1457' },
            900: { value: '#880e4f' },
          },
          white: { value: '#ffffff' },
          black: { value: '#000000' },
          yellow: { value: '#ffff00' },
        },
        spacing: {
          0: { value: '0' },
          0.5: { value: '0.125rem' },
          0.75: { value: '0.1875rem' },
          1: { value: '0.25rem' },
          2: { value: '0.5rem' },
          3: { value: '0.75rem' },
          4: { value: '1rem' },
          5: { value: '1.25rem' },
          6: { value: '1.5rem' },
          8: { value: '2rem' },
          10: { value: '2.5rem' },
          12: { value: '3rem' },
          16: { value: '4rem' },
          20: { value: '5rem' },
          24: { value: '6rem' },
          32: { value: '8rem' },
          40: { value: '10rem' },
          48: { value: '12rem' },
          56: { value: '14rem' },
          64: { value: '16rem' },
        },
        fontSizes: {
          xs: { value: '0.75rem' },
          sm: { value: '0.875rem' },
          base: { value: '1rem' },
          lg: { value: '1.125rem' },
          xl: { value: '1.25rem' },
          '2xl': { value: '1.5rem' },
          '3xl': { value: '1.875rem' },
          '4xl': { value: '2.25rem' },
          '5xl': { value: '3rem' },
          '6xl': { value: '3.75rem' },
        },
        fontWeights: {
          light: { value: 300 },
          normal: { value: 400 },
          medium: { value: 500 },
          semibold: { value: 600 },
          bold: { value: 700 },
          extrabold: { value: 800 },
        },
        lineHeights: {
          none: { value: 1 },
          tight: { value: 1.25 },
          snug: { value: 1.375 },
          normal: { value: 1.5 },
          relaxed: { value: 1.625 },
          loose: { value: 2 },
        },
        letterSpacings: {
          tighter: { value: '-0.05em' },
          tight: { value: '-0.025em' },
          normal: { value: '0em' },
          wide: { value: '0.025em' },
          wider: { value: '0.05em' },
          widest: { value: '0.1em' },
        },
        radii: {
          none: { value: '0' },
          sm: { value: '0.125rem' },
          base: { value: '0.25rem' },
          md: { value: '0.375rem' },
          lg: { value: '0.5rem' },
          xl: { value: '0.75rem' },
          '2xl': { value: '1rem' },
          '3xl': { value: '1.5rem' },
          full: { value: '9999px' },
        },
        shadows: {
          none: { value: 'none' },
          sm: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
          base: { value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' },
          md: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
          lg: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
          xl: { value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' },
          '2xl': { value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' },
          inner: { value: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' },
          focusRing: { value: '0 0 0 3px rgba(66, 153, 225, 0.5)' },
          focusRingError: { value: '0 0 0 3px rgba(245, 101, 101, 0.5)' },
          focusRingSuccess: { value: '0 0 0 3px rgba(72, 187, 120, 0.5)' },
        },
        durations: {
          fast: { value: '150ms' },
          base: { value: '200ms' },
          slow: { value: '300ms' },
          slower: { value: '500ms' },
        },
        easings: {
          linear: { value: 'linear' },
          easeIn: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
          easeOut: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
          easeInOut: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
          smooth: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
          bounce: { value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
        },
        borders: {
          none: { value: 'none' },
        },
        borderWidths: {
          none: { value: '0' },
          thin: { value: '1px' },
          base: { value: '2px' },
          thick: { value: '3px' },
          thicker: { value: '4px' },
        },
      },
      semanticTokens: {
        colors: {
          // Brand colors
          brand: {
            primary: { value: '#2196f3' },
            primaryLight: { value: '#64b5f6' },
            primaryDark: { value: '#1976d2' },
          },
          // Text colors
          text: {
            primary: { value: { base: '#212121', _dark: '#fafafa' } },
            secondary: { value: { base: '#616161', _dark: '#f5f5f5' } },
            tertiary: { value: { base: '#757575', _dark: '#eeeeee' } },
            disabled: { value: { base: '#bdbdbd', _dark: '#757575' } },
            inverse: { value: { base: '#ffffff', _dark: '#212121' } },
            link: { value: { base: '#1976d2', _dark: '#42a5f5' } },
            linkHover: { value: { base: '#1565c0', _dark: '#64b5f6' } },
            error: { value: { base: '#d32f2f', _dark: '#ef5350' } },
            success: { value: { base: '#388e3c', _dark: '#66bb6a' } },
            warning: { value: { base: '#ef6c00', _dark: '#ffa726' } },
          },
          // Background colors
          bg: {
            canvas: { value: { base: '#ffffff', _dark: '#212121' } },
            paper: { value: { base: '#fafafa', _dark: '#424242' } },
            subtle: { value: { base: '#f5f5f5', _dark: '#424242' } },
            hover: { value: { base: '#f5f5f5', _dark: '#616161' } },
            active: { value: { base: '#eeeeee', _dark: '#757575' } },
            disabled: { value: { base: '#f5f5f5', _dark: '#424242' } },
          },
          // Border colors
          border: {
            default: { value: { base: '#e0e0e0', _dark: '#616161' } },
            subtle: { value: { base: '#eeeeee', _dark: '#424242' } },
            strong: { value: { base: '#bdbdbd', _dark: '#757575' } },
            hover: { value: { base: '#bdbdbd', _dark: '#757575' } },
            focus: { value: '#2196f3' },
            error: { value: '#f44336' },
            success: { value: '#4caf50' },
            warning: { value: '#ff9800' },
          },
          // Accordion colors
          accordion: {
            bg: { value: { base: '#ffffff', _dark: '#424242' } },
            bgHover: { value: { base: '#fafafa', _dark: '#616161' } },
            bgActive: { value: { base: '#f5f5f5', _dark: '#757575' } },
            bgOpen: { value: { base: '#fafafa', _dark: '#424242' } },
            border: { value: { base: '#e0e0e0', _dark: '#616161' } },
            text: { value: { base: '#212121', _dark: '#fafafa' } },
            icon: { value: { base: '#757575', _dark: '#eeeeee' } },
          },
          // Input colors
          input: {
            bg: { value: { base: '#ffffff', _dark: '#424242' } },
            bgDisabled: { value: { base: '#f5f5f5', _dark: '#616161' } },
            text: { value: { base: '#212121', _dark: '#fafafa' } },
            textDisabled: { value: { base: '#9e9e9e', _dark: '#757575' } },
            placeholder: { value: { base: '#bdbdbd', _dark: '#9e9e9e' } },
            border: { value: { base: '#e0e0e0', _dark: '#616161' } },
            borderHover: { value: { base: '#bdbdbd', _dark: '#757575' } },
            borderFocus: { value: '#2196f3' },
            borderError: { value: '#f44336' },
            borderSuccess: { value: '#4caf50' },
            label: { value: { base: '#616161', _dark: '#eeeeee' } },
            helperText: { value: { base: '#757575', _dark: '#bdbdbd' } },
            errorText: { value: { base: '#d32f2f', _dark: '#ef5350' } },
          },
        },
      },
      breakpoints: {
        xs: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

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
      color: 'text.primary',
      backgroundColor: 'bg.canvas',
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
    // Button styles - hover and focus state management
    'button': {
      borderColor: 'var(--border-color)',
    },
    'button:hover:not([data-focused]):not(:disabled)': {
      backgroundColor: 'var(--hover-bg) !important',
      borderColor: 'var(--hover-border) !important',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    },
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
  },
});
