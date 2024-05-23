import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./styles.module.css";

interface SkillBarProps {
  colorClassName: string;
  skillPercent: number;
  skillName: string;
}
const HomePageAboutMeSkillBar = forwardRef<HTMLDivElement, SkillBarProps>((props, ref) => (
  <div
    ref={ref}
    className={clsx([
      "sm:tw-h-7 tw-h-5 before:tw-shadow tw-bg-gray-200 dark:tw-bg-gray-600",
      styles.skillBar,
      props.colorClassName,
    ])}
    style={{ ["--progress" as any]: 0 as any, ["--skill" as any]: props.skillPercent }}>
    <div className={clsx([styles.skillBarLabel, styles.head])}>
      <h3 className='tw-pb-1 tw-flex tw-items-center tw-gap-2'>{props.skillName}</h3>
    </div>
  </div>
));

HomePageAboutMeSkillBar.displayName = "HomePageAboutMeSkillBar";

export default HomePageAboutMeSkillBar;
