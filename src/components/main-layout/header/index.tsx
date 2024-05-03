"use client";
/* eslint-disable @next/next/no-img-element */
import APP_ASSETS from "@/assets";
import { APP_KEYS, APP_KEYS_VALUES } from "@/utils/keys";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import { clsx } from "clsx";
import Icons from "@/components/icons";
import { useState } from "react";
import jsCookie from "js-cookie";

interface HeaderProps {
  theme: string;
}
export default function MainLayoutHeader({ theme }: HeaderProps) {
  const { t } = useTranslation("en", "mainLayout", {
    keyPrefix: "header",
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
    <button
      aria-label={t("links.theme")}
      className={"tw-justify-start tw-flex  tw-px-2  tw-gap-8 tw-items-center tw-text-neutral-800 dark:tw-text-white"}
      onClick={() => {
        changeThemeUrl();
      }}>
      {theme === "light" || theme === undefined ? (
        <Icons.Sun width={24} height={24} />
      ) : (
        <Icons.Moon width={24} height={24} />
      )}
    </button>
  );

  return (
    <header
      className={
        "tw-w-full tw-sticky tw-top-0 tw-left-0 tw-h-16 tw-px-4 tw-flex tw-justify-center tw-border-b tw-border-neutral-300 tw-backdrop-blur-md tw-bg-white dark:tw-bg-neutral-800 tw-bg-opacity-60 dark:tw-bg-opacity-60 tw-z-10"
      }>
      <div className='tw-mr-auto tw-flex tw-items-center'>
        <Link href={APP_KEYS.ROUTES.HOME({})}>
          <img
            className={clsx([{ [`tw-grayscale tw-invert`]: theme === "dark", [`tw-hidden`]: showMenu }])}
            width={48}
            height={48}
            src={APP_ASSETS.IMAGES.ATTILA}
            alt={t("logo")}
          />
        </Link>
      </div>

      {/* <button
        onClick={() => {
          setShowMenu((pre) => !pre);
        }}
        className='lg:tw-hidden tw-z-10 tw-text-white  tw-p-2'>
        {showMenu ? <Icons.XMark width={32} height={32} /> : <Icons.Bars3 width={32} height={32} />}
      </button> */}

      <nav className={"tw-flex tw-items-center"}>
        <ul className='tw-list-none tw-flex tw-m-0 tw-p-0 tw-gap-4 tw-items-center'>
          <li>
            <a className={navbarItemClass} href='#home'>
              <strong>{t("links.blog")}</strong>
            </a>
          </li>

          <li>{ThemeToggler}</li>
        </ul>
      </nav>
    </header>
  );
}

const navbarItemClass =
  'tw-capitalize tw-inline-block tw-relative tw-transition-all tw-duration-500 before:tw-content-[""] before:tw-absolute before:tw-bottom-0 before:tw-left-0 before:tw-w-0 before:tw-h-1 before:tw-opacity-0 before:tw-transition-all before:tw-duration-500 before:tw-bg-blue-700 hover:before:tw-w-full hover:before:tw-opacity-100 tw-p-2';
