import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode, useRef } from "react";

import { useIntersection } from "@/hooks/useIntersection";
import { useMergeRefs } from "@/hooks/useMergeRefs";

type Props = {
  children: ReactNode;
  base: string;
  enter: string;
  leave: string;
} & ComponentPropsWithoutRef<"div">;

export const Base = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, base, enter, leave, ...attrs } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs<HTMLDivElement>(ref, wrapperRef);

  const entry = useIntersection(wrapperRef, true);

  return (
    <div className={clsx(base, entry ? enter : leave)} ref={mergedRef} {...attrs}>
      {children}
    </div>
  );
});

Base.displayName = "Base";
