import { LegacyRef, forwardRef } from "react";
import type { IconProps } from "./types";

const XMark = forwardRef(({ ...props }: IconProps, ref: LegacyRef<SVGSVGElement>) => {
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
      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
    </svg>
  );
});
XMark.displayName = "XMark";
export default XMark;
