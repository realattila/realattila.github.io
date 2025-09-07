import { useEffect, useReducer, useRef } from "react";

export function useSafeUrlHash() {
  const hashRef = useRef<string>("");
  const [, force] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    hashRef.current = window.location.hash || "";
    const onHashChange = () => {
      hashRef.current = window.location.hash || "";
      force();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hashRef.current;
}
