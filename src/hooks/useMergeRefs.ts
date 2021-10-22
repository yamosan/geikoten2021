import { LegacyRef, useCallback } from "react";

export const useMergeRefs = <T>(...refs: (LegacyRef<T> | undefined)[]) => {
  const refCallback = useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (ref === null) return;

        if (typeof ref === "function") {
          ref(element);
          return;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref.current = element;
      });
    },
    [refs]
  );

  return refCallback;
};
