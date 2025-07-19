import { Theme } from '../types';

// Base theme structure that both light and dark themes will use
const baseTheme = {
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      secondary: '"Georgia", "Times New Roman", serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace'
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '4rem'      // 64px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  spacing: {
    xs: '0.5rem',      // 8px
    sm: '0.75rem',     // 12px
    md: '1rem',        // 16px
    lg: '1.5rem',      // 24px
    xl: '2rem',        // 32px
    '2xl': '3rem',     // 48px
    '3xl': '4rem',     // 64px
    '4xl': '5rem',     // 80px
    '5xl': '6rem',     // 96px
    '6xl': '8rem'      // 128px
  },
  borderRadius: {
    sm: '0.25rem',     // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    full: '9999px'
  },
  transitions: {
    fast: 'all 0.15s ease-in-out',
    normal: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

// Light theme
export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    background: '#ffffff',
    surface: '#f8f9fa',
    primary: '#000000',
    secondary: '#6c757d',
    accent: '#007bff',
    text: '#000000',
    textSecondary: '#6c757d',
    border: '#e9ecef',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  }
};

// Dark theme
export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    background: '#000000',
    surface: '#1a1a1a',
    primary: '#ffffff',
    secondary: '#a6a6a6',
    accent: '#66b3ff',
    text: '#ffffff',
    textSecondary: '#a6a6a6',
    border: '#333333',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#38bdf8'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
    md: '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
    lg: '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
    xl: '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
    '2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)'
  }
};

// Theme context type
export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
} 