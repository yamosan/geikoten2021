import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

// TODO: isMobileとreact-div-100vhを独自実装する
// https://github.com/mvasin/react-div-100vh/blob/master/packages/react-div-100vh/src/index.tsx
/* 
・use100vhのラッパー 
スマホの時はスクロールの向きによってアドレスバーの高さが変わる。それに伴い100vhも変わりかなりがたついてしまう。
このhooksでは、スマホ時に100vhを再取得しないようにする
*/

export const use100vh = (): number | null => {
  const [height, setHeight] = useState<number | null>(measureHeight);

  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();

  useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce) return;

    const setMeasuredHeight = () => {
      const measuredHeight = measureHeight();
      setHeight(measuredHeight);
    };

    if (!isMobile) {
      window.addEventListener("resize", setMeasuredHeight);
    }

    return () => window.removeEventListener("resize", setMeasuredHeight);
  }, [wasRenderedOnClientAtLeastOnce]);

  return wasRenderedOnClientAtLeastOnce ? height : null;
};

const isBrowser = () => {
  return typeof window !== "undefined" && typeof document !== "undefined";
};

const measureHeight = () => {
  if (!isBrowser()) return null;
  return document.documentElement?.clientHeight || window.innerHeight;
};

const useWasRenderedOnClientAtLeastOnce = () => {
  const [wasRenderedOnClientAtLeastOnce, setWasRenderedOnClientAtLeastOnce] = useState(false);

  useEffect(() => {
    if (isBrowser()) {
      setWasRenderedOnClientAtLeastOnce(true);
    }
  }, []);
  return wasRenderedOnClientAtLeastOnce;
};
