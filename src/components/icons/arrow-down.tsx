import { LegacyRef, forwardRef } from "react";
import type { IconProps } from "./types";

const ArrowDown = forwardRef(({ ...props }: IconProps, ref: LegacyRef<SVGSVGElement>) => {
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
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3' />
    </svg>
  );
});
ArrowDown.displayName = "ArrowDown";
export default ArrowDown;
