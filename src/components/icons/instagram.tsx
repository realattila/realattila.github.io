import { LegacyRef, forwardRef } from "react";
import type { IconProps } from "./types";

const Telegram = forwardRef(({ ...props }: IconProps, ref: LegacyRef<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' {...props}>
      <defs>
        <linearGradient id='InstagramGradient' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' style={{ stopColor: "#f09433", stopOpacity: 1 }} />
          <stop offset='25%' style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
          <stop offset='50%' style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
          <stop offset='75%' style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: "#bc1888", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill='url(#InstagramGradient)'
        d='M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z'
      />
    </svg>
  );
});
Telegram.displayName = "Telegram";
export default Telegram;
