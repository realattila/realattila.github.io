import { useTheme as NextUseTheme } from "next-themes";
import jsCookie from "js-cookie";
import { APP_CONSTS } from "@/lib";
import { APP_THEMES, type AppTheme } from "@/lib/themes";
export const useTheme = () => {
  const nextTheme = NextUseTheme();

  const setTheme = (theme: AppTheme) => {
    jsCookie.set(APP_CONSTS.COOKIES.THEME, theme);
    nextTheme.setTheme(theme);
  };

  return { ...nextTheme, setTheme };
};
