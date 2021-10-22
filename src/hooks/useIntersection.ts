import { RefObject, useEffect, useState } from "react";

export const useIntersection = (ref: RefObject<HTMLElement>, frozen: boolean, options?: IntersectionObserverInit) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (ref.current === null) return;
    if (frozen && state) return;

    const handler = ([entry]: IntersectionObserverEntry[]) => {
      setState(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handler, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options, state, frozen]);

  return state;
};
