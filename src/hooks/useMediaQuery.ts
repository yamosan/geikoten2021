import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const useMedia = (query: string, defaultState = false) => {
  const [state, setState] = useState(isBrowser ? () => window.matchMedia(query).matches : defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (mounted) {
        setState(!!mql.matches);
      }
    };
    onChange();
    mql.addListener(onChange);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};

export default useMedia;
