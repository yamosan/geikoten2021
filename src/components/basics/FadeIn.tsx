import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode, useRef } from "react";

import { useIntersection } from "@/hooks/useIntersection";
import { useMergeRefs } from "@/hooks/useMergeRefs";

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const FadeIn = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...attrs } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs<HTMLDivElement>(ref, wrapperRef);

  const entry = useIntersection(wrapperRef, true);

  return (
    <div
      className={clsx(
        "transition transform duration-700 delay-200",
        {
          "opacity-0 translate-y-8": !entry,
          "opacity-100 translate-y-0": entry,
        },
        className
      )}
      ref={mergedRef}
      {...attrs}
    >
      {children}
    </div>
  );
});

FadeIn.displayName = "FadeIn";
