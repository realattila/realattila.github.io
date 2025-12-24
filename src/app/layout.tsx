import { Geist, Geist_Mono } from "next/font/google";
import { APP_CONSTS } from "@/lib";
import { APP_THEMES } from "@/lib/themes";
import { ReactNode } from "react";
import { AppProviders } from "@/components/app-providers";

import "./globals.css";

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
        <title>[ATTILA] | Professional Software Engineer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders defaultTheme={APP_THEMES.DARK}>{children}</AppProviders>
      </body>
    </html>
  );
}
