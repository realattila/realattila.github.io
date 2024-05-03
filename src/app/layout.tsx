import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/main-layout/header";
import { clsx } from "clsx";
import { APP_KEYS } from "@/utils/keys";
import { serverTranslation } from "@/i18n";
import { cookies } from "next/headers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({}): Promise<Metadata> {
  const { t } = await serverTranslation("en", "main", {
    keyPrefix: "mainLayout.metadata",
  });

  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = await serverTranslation("en", "main", {
    keyPrefix: "mainLayout.metadata",
  });
  const cookie = cookies();
  const cookieTheme = cookie.get(APP_KEYS.COOKIES.THEME)?.value || "light";

  return (
    <html lang='en' dir='ltr' className={clsx([{ ["tw-dark"]: cookieTheme === "dark" }])}>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css'></link>
      </head>

      <body
        className={clsx([
          inter.className,
          "tw-bg-white dark:tw-bg-neutral-800 tw-text-neutral-800 dark:tw-text-white tw-relative",
        ])}>
        <main>
          <Header theme={cookieTheme} />
          {children}
        </main>
      </body>
    </html>
  );
}
