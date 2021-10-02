/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from "react";

// TODO: debounceを使う
const useOnScrolling = (offset = 0) => {
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
      if (scrollY <= offset) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    document.addEventListener("scroll", handleOnScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleOnScroll);
    };
  }, [offset]);

  return scrolled;
};

export default useOnScrolling;
