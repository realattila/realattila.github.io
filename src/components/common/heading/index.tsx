import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

const H1 = forwardRef<
  HTMLDivElement,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">
>(({ className = "", ...props }, ref) => (
  <h1 {...props} ref={ref} className={`sm:tw-text-4xl tw-text-3xl tw-mb-4 ${className}`} />
));

H1.displayName = "H1";

const H2 = forwardRef<
  HTMLDivElement,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">
>(({ className = "", ...props }, ref) => (
  <h2 {...props} ref={ref} className={`sm:tw-text-3xl tw-text-2xl  tw-mb-4 ${className}`} />
));

H2.displayName = "H2";

const H3 = forwardRef<
  HTMLDivElement,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">
>(({ className = "", ...props }, ref) => (
  <h2 {...props} ref={ref} className={`sm:tw-text-2xl tw-text-xl  tw-mb-4 ${className}`} />
));

H3.displayName = "H3";

const H4 = forwardRef<
  HTMLDivElement,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">
>(({ className = "", ...props }, ref) => (
  <h2 {...props} ref={ref} className={`sm:tw-text-xl tw-text-lg  tw-mb-4 ${className}`} />
));

H4.displayName = "H4";

const H5 = forwardRef<
  HTMLDivElement,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">
>(({ className = "", ...props }, ref) => (
  <h2 {...props} ref={ref} className={`sm:tw-text-lg tw-text-base  tw-mb-4 ${className}`} />
));

H5.displayName = "H5";

const H6 = forwardRef<
  HTMLDivElement,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">
>(({ className = "", ...props }, ref) => <h2 {...props} ref={ref} className={`tw-text-base  tw-mb-4 ${className}`} />);

H6.displayName = "H6";

const Heading = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} as const;
export default Heading;
