import { useTheme as NextUseTheme } from "next-themes";
import jsCookie from "js-cookie";
import { APP_CONSTS } from "@/lib";

export const APP_THEMES = {
  DARK: "dark",
  LIGHT: "light",
} as const;

type Themes = (typeof APP_THEMES)[keyof typeof APP_THEMES];
export const useTheme = () => {
  const nextTheme = NextUseTheme();

  const setTheme = (theme: Themes) => {
    jsCookie.set(APP_CONSTS.COOKIES.THEME, theme);
    nextTheme.setTheme(theme);
  };

  return { ...nextTheme, setTheme };
};
