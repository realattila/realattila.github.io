import React, { FC } from "react";
import { motion } from "framer-motion";

interface PathDrawingAnimationProps {
  width?: number;
}
const MainPageHeroPathDrawingAnimation: FC<PathDrawingAnimationProps> = (props) => {
  const paths = [
    "M0,46.3V.07h10.63v3.18H3.98v39.86h6.65v3.18H0Z",
    "M21.84,27.5l-4.04,12.29h-5.23L25.86.7h6.07l13.35,39.09h-5.4l-4.19-12.29h-13.86ZM34.68,23.55l-3.87-11.25c-.85-2.56-1.44-4.89-2.01-7.13h-.14c-.56,2.29-1.17,4.67-1.94,7.06l-3.85,11.32h11.81Z",
    "M53.99,4.96h-11.91V.7h28.95v4.27h-11.96v34.83h-5.08V4.96Z",
    "M85.02,4.96h-11.91V.7h28.95v4.27h-11.96v34.83h-5.08V4.96Z",
    "M111.46.7v39.09h-5.08V.7h5.08Z",
    "M120.24.7h5.08v34.83h16.71v4.26h-21.79V.7Z",
    "M154.08,27.5l-4.04,12.29h-5.24L158.1.7h6.07l13.35,39.09h-5.4l-4.19-12.29h-13.86ZM166.92,23.55l-3.87-11.25c-.85-2.56-1.44-4.89-2.01-7.13h-.14c-.56,2.29-1.17,4.67-1.94,7.06l-3.85,11.32h11.81Z",
    "M190.06,0v46.28h-10.63v-3.18h6.64V3.18h-6.64V0h10.63Z",
  ];

  const pathVariants = {
    hidden: { pathLength: 0, fill: "rgba(0, 0, 0, 0)" },
    visible: {
      pathLength: 1,
      fill: "currentColor",
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        fill: { duration: 1, ease: "easeInOut", delay: 2 }, // Fill animation starts after the stroke animation
      },
    },
  };

  return (
    <svg
      className='tw-fill-neutral-800'
      width={props.width}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 190.06 46.3'>
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          strokeWidth={0.5}
          className={"tw-stroke-neutral-800 dark:tw-stroke-neutral-50"}
          initial='hidden'
          animate='visible'
          variants={pathVariants}
        />
      ))}
    </svg>
  );
};

export default MainPageHeroPathDrawingAnimation;
