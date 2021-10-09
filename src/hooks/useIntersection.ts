import { RefObject, useEffect, useState } from "react";

const useIntersection = (ref: RefObject<HTMLElement>, options: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (ref.current === null) return;
    if (!entry) return;

    const handler = ([entries]: IntersectionObserverEntry[]) => {
      setEntry(entries);
    };

    const observer = new IntersectionObserver(handler, options);
    observer.observe(ref.current);

    return () => {
      setEntry(null);
      observer.disconnect();
    };
  }, [ref, options, entry]);

  return entry;
};

export default useIntersection;
