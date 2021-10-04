import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const useWindowSize = () => {
  const [state, setState] = useState<{ width: number; height: number }>({
    width: isBrowser ? innerWidth : Infinity,
    height: isBrowser ? innerHeight : Infinity,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: innerWidth,
        height: innerHeight,
      });
    };
    onResize();

    // debounce
    let timeoutId: ReturnType<typeof setTimeout>;
    const onResizeDebounce = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(onResize, 200);
    };

    window.addEventListener("resize", onResizeDebounce);
    return () => {
      window.removeEventListener("resize", onResizeDebounce);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return state;
};

export default useWindowSize;
