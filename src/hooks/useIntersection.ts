import { RefObject, useEffect, useState } from "react";

const useIntersection = (ref: RefObject<HTMLElement>, frozen: boolean, options: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (ref.current === null) return;
    if (frozen && entry) return;

    const handler = ([entry]: IntersectionObserverEntry[]) => {
      setEntry(entry);
    };

    const observer = new IntersectionObserver(handler, options);
    observer.observe(ref.current);

    return () => {
      setEntry(null);
      observer.disconnect();
    };
  }, [ref, options, entry, frozen]);

  return entry;
};

export default useIntersection;
