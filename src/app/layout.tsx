import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/main-layout/header";
import { clsx } from "clsx";
import { APP_KEYS } from "@/utils/keys";
import { serverTranslation } from "@/i18n";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

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
        <title>{t("title")}</title>
        <meta content={t("description")} name='description' />
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
