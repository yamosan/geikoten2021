// import { useEffect, useState } from "react";

// const useMounted = () => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return mounted;
// };

// export default useMounted;

import { useEffect, useReducer, useRef } from "react";

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

function useUpdate(): () => void {
  const [, update] = useReducer(updateReducer, 0);

  return update;
}

export default function useMounted() {
  const mounted = useRef(false);
  const update = useUpdate();
  useEffect(() => {
    if (mounted.current == false) {
      mounted.current = true;
      update();
    }
  }, [update]);
  return mounted.current;
}
