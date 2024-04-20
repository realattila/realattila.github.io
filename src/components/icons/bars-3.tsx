import { LegacyRef, forwardRef } from "react";
import type { IconProps } from "./types";

const Bars3 = forwardRef(({ ...props }: IconProps, ref: LegacyRef<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={16}
      ref={ref}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
    </svg>
  );
});
Bars3.displayName = "Bars3";
export default Bars3;
