import { clsx } from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, LegacyRef, forwardRef } from "react";
import styles from "./button.module.css";

interface buttonProps
  extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> {
  noStyle?: boolean;
}
const Button = forwardRef(({ noStyle, className = "", ...props }: buttonProps, ref: LegacyRef<HTMLButtonElement>) => (
  <button
    ref={ref}
    className={clsx([
      className,
      {
        [`${styles.noStyle}`]: noStyle,
      },
    ])}
    {...props}
  />
));

Button.displayName = "Button";

export default Button;
