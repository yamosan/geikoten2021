import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode, useRef } from "react";

import { useIntersection } from "@/hooks/useIntersection";
import { useMergeRefs } from "@/hooks/useMergeRefs";

export type AnimationProps = {
  base: string;
  enter: string;
  leave: string;
};

type Props = {
  children: ReactNode;
} & AnimationProps &
  ComponentPropsWithoutRef<"div">;

export const Animation = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, base, enter, leave, ...attrs } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs<HTMLDivElement>(ref, wrapperRef);

  const entry = useIntersection(wrapperRef, true);

  return (
    <div className={clsx(base, entry ? enter : leave, className)} ref={mergedRef} {...attrs}>
      {children}
    </div>
  );
});

Animation.displayName = "Animation";
