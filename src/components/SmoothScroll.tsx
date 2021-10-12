import "scroll-behavior-polyfill";

import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

export const SmoothScroll: FC = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("scroll-behavior", "smooth"); // polyfill
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const debouncedRemoveSmoothScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        html.style.removeProperty("scroll-behavior");
      }, 100);
    };

    const handleHashChangeStart = () => {
      html.style.setProperty("scroll-behavior", "smooth", "important");
      debouncedRemoveSmoothScroll();
    };

    const handleRouteChangeStart = () => {
      html.style.removeProperty("scroll-behavior");
    };

    const handleScroll = () => {
      debouncedRemoveSmoothScroll();
    };

    router.events.on("hashChangeStart", handleHashChangeStart);
    router.events.on("routeChangeStart", handleRouteChangeStart);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(scrollTimeout);
      router.events.off("hashChangeStart", handleHashChangeStart);
      router.events.off("routeChangeStart", handleRouteChangeStart);
      window.removeEventListener("scroll", handleScroll);
      html.style.removeProperty("scroll-behavior");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
