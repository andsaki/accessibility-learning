export const colors = {
  // Primary colors
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    500: '#2196f3',
    700: '#1976d2',
    900: '#0d47a1',
  },
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    500: '#9e9e9e',
    700: '#616161',
    900: '#212121',
  },
  // Semantic colors
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',

  // Text colors (WCAG AA compliant)
  text: {
    primary: '#212121',
    secondary: '#616161',
    disabled: '#9e9e9e',
    inverse: '#ffffff',
  },

  // Background colors
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
    dark: '#212121',
  },

  // Focus colors (デジタル庁スタイル)
  focus: {
    background: '#ffff00',  // 黄色背景
    outline: '#000000',     // 黒いアウトライン
    text: '#000000',        // 黒いテキスト（フォーカス時）
  },
} as const;
