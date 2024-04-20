"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.scss";
import APP_ASSETS from "@/assets";
import { APP_KEYS, APP_KEYS_VALUES } from "@/utils/keys";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import useStoreApp from "@/store/app";
import { clsx } from "clsx";
import Icons from "@/components/icons";
import Button from "@/components/common/button";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import jsCookie from "js-cookie";

interface HeaderProps {
  theme: string;
}
export default function MainLayoutHeader({ theme }: HeaderProps) {
  const { t } = useTranslation("en", "main", {
    keyPrefix: "mainLayout.header",
  });

  const [showMenu, setShowMenu] = useState(false);

  const changeThemeUrl = () => {
    if (theme === "light") {
      jsCookie.set(APP_KEYS.COOKIES.THEME, APP_KEYS_VALUES.COOKIES.THEME.DARK);
    } else {
      jsCookie.set(APP_KEYS.COOKIES.THEME, APP_KEYS_VALUES.COOKIES.THEME.LIGHT);
    }
    window.location.reload();
  };

  const ThemeToggler = (
    <Button
      noStyle
      className={styles.themeToggleButton}
      onClick={() => {
        changeThemeUrl();
      }}>
      {theme === "light" || theme === undefined ? (
        <Icons.Sun width={24} height={24} />
      ) : (
        <Icons.Moon width={24} height={24} />
      )}
    </Button>
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href={APP_KEYS.ROUTES.HOME({})}>
          <img
            className={clsx([{ [`${styles.darkLogo}`]: theme === "dark", [`${styles.hideLogo}`]: showMenu }])}
            width={48}
            height={48}
            src={APP_ASSETS.IMAGES.ATTILA}
            alt={t("logo")}
          />
        </Link>

        <Button
          onClick={() => {
            setShowMenu((pre) => !pre);
          }}
          noStyle
          className={styles.menuToggle}>
          {showMenu ? <Icons.XMark width={32} height={32} /> : <Icons.Bars3 width={32} height={32} />}
        </Button>

        <div
          className={clsx([
            styles.mobileMenuWrapper,
            {
              [`${styles.mobileMenuWrapperOpen}`]: showMenu,
            },
          ])}>
          <nav
            className={clsx([
              styles.mobileNav,
              {
                [`${styles.mobileNavShow}`]: showMenu,
              },
            ])}>
            <ul className={styles.mobileList}>
              <li>
                <a className={styles.listItemLink} href='#home'>
                  <strong>HOME</strong>
                </a>
              </li>
              <li>
                <a className={styles.listItemLink} href='#about_me'>
                  <strong>ABOUT ME</strong>
                </a>
              </li>
              <li>
                <a className={styles.listItemLink} href='#contact_me'>
                  <strong>CONTACT ME</strong>
                </a>
              </li>
              {ThemeToggler}
            </ul>
          </nav>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <a className={styles.listItemLink} href='#home'>
                <strong>HOME</strong>
              </a>
            </li>
            <li>
              <a className={styles.listItemLink} href='#about_me'>
                <strong>ABOUT ME</strong>
              </a>
            </li>
            <li>
              <a className={styles.listItemLink} href='#contact_me'>
                <strong>CONTACT ME</strong>
              </a>
            </li>
            {ThemeToggler}
          </ul>
        </nav>
      </div>
    </header>
  );
}
