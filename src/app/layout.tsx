"use client";

import { Geist, Geist_Mono } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ThemeProvider } from "@/components/theme-provider";
import jsCookie from "js-cookie";
import { APP_CONSTS } from "@/lib";
import { APP_THEMES } from "@/hook";
import { ReactNode } from "react";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import "./globals.css";

gsap.registerPlugin(useGSAP, SplitText, MotionPathPlugin, ScrambleTextPlugin);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const current_theme =
    jsCookie.get(APP_CONSTS.COOKIES.THEME) || APP_THEMES.DARK;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />

        <link
          rel="preload"
          href="/home-background.jpg"
          as="image"
          type="image/jpeg"
        />
        <title>[ATTILA] | Professional frontend developer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={current_theme}
          themes={[APP_THEMES.DARK, APP_THEMES.LIGHT]}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
