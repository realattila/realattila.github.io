"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function HomePageGlowMouse() {
  const [divLocation, setDivLocation] = useState({ left: -1, top: -1 });
  useEffect(() => {
    const handleEvent = (e: MouseEvent) => {
      setTimeout(() => {
        setDivLocation({ left: e.pageX - 100, top: e.pageY - 100 });
      }, 100);
    };
    document.addEventListener("mousemove", handleEvent);

    return () => {
      document.removeEventListener("mousemove", handleEvent);
    };
  });
  if (divLocation.left === -1 && divLocation.top === -1) {
    return null;
  }
  return <div className={styles.glowDiv} style={{ left: divLocation.left, top: divLocation.top }}></div>;
}
