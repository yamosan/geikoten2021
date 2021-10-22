import { useEffect, useState } from "react";

// TODO: 複数のobserverが必要なので、useIntersectionが使えない。うまく共通化したい
// strict=false: 交差が終了したタイミングでは判定しない
export const useActiveId = (ids: string[], strict = false) => {
  const [activeId, setActiveId] = useState<string | undefined>();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observers = ids.map((id) => {
      const observed = document.getElementById(id);
      if (observed) {
        const handler = ([entry]: IntersectionObserverEntry[]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          } else if (strict) {
            setActiveId(undefined);
          }
        };
        const observer = new IntersectionObserver(handler, {
          rootMargin: "-50% 0% -50% 0%",
        });
        observer.observe(observed);
        return observers;
      }
    });

    return () => {
      observers.forEach = (observer) => observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
};
