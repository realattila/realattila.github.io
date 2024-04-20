import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.css";
import Header from "@/components/main-layout/header";
import { clsx } from "clsx";
import { APP_KEYS } from "@/utils/keys";
import { serverTranslation } from "@/i18n";
import { cookies } from "next/headers";
import MainLayoutClientStuff from "@/components/main-layout/client-stuff";

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
    <html lang='en' dir='ltr'>
      <head>
        <title>{t("title")}</title>
        <meta content={t("description")} name='description' />
      </head>

      <body className={clsx([inter.className, styles.body, { dark: cookieTheme === "dark" }])}>
        <Header theme={cookieTheme} />
        {children}
      </body>
    </html>
  );
}
