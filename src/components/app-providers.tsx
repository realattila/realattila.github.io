"use client";

import { ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ThemeProvider } from "@/components/theme-provider";
import { APP_THEMES, type AppTheme } from "@/lib/themes";

gsap.registerPlugin(useGSAP, SplitText, MotionPathPlugin, ScrambleTextPlugin);

type AppProvidersProps = {
  children: ReactNode;
  defaultTheme: AppTheme;
};

export function AppProviders({ children, defaultTheme }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      themes={[APP_THEMES.DARK, APP_THEMES.LIGHT]}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
