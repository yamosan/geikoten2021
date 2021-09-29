/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from "react";

// TODO: debounceを使う
const useOnScrolling = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollingElement = (): Element => {
      const browser = window.navigator.userAgent.toLowerCase();
      if ("scrollingElement" in document) return document.scrollingElement;
      if (browser.indexOf("webkit") > 0) return document.body;
      return document.documentElement;
    };

    const handleOnScroll = () => {
      const scrollY = scrollingElement().scrollTop;
      if (scrollY === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    document.addEventListener("scroll", handleOnScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return scrolled;
};

export default useOnScrolling;
