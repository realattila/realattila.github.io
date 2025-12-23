import { useEffect, useState } from "react";

const getReduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

export const useWindowMatchMedia = () => {
  const [reduce, setReduce] = useState(getReduceMotion);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduce(media.matches);

    handleChange();

    if ("addEventListener" in media) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }

    return () => {
      if ("removeEventListener" in media) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  return { reduce };
};
