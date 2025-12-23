export const APP_THEMES = {
  DARK: "dark",
  LIGHT: "light",
} as const;

export type AppTheme = (typeof APP_THEMES)[keyof typeof APP_THEMES];
