import { useIsClient } from "@/hook";
import { cn } from "@/lib";

import Image from "next/image";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import { NavHoverLockA11y } from "./header-navbar";
import { Menu } from "./menu";

export const Header = () => {
  // const { setTheme, theme } = useTheme();
  // const isDarkTheme = theme === "dark";

  const { y } = useWindowScroll();
  const isClient = useIsClient();

  // const handleToggleTheme = () => {
  //   setTheme(isDarkTheme ? "light" : "dark");
  // };

  return (
    <header
      className={cn([
        "fixed left-0 w-full transition-all duration-500 top-0 border-b-1 border-transparent z-20",
        {
          "dark:border-white/10 border-black/10 shadow-xs bg-black/90":
            isClient && y > 0,
        },
      ])}
    >
      <div className="w-full h-2 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 animate-pulse"></div>

      <nav
        className={cn(["container mx-auto p-3 transition-all duration-500"])}
      >
        <div className="flex items-center w-full">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={48} height={48} />
          </Link>
          <div className="mx-auto lg:flex hidden">
            <NavHoverLockA11y />
          </div>
          <div className="lg:hidden flex ml-auto">
            <Menu />
          </div>
          {/* <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-8 cursor-pointer ml-auto"
            onClick={handleToggleTheme}
          >
            <Moon className="dark:hidden" />
            <Sun className="hidden dark:block" />
          </Button> */}
        </div>
      </nav>
    </header>
  );
};
