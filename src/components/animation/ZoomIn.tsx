import React, { ComponentPropsWithoutRef, forwardRef } from "react";

import { Animation } from "./Animation";

type Props = ComponentPropsWithoutRef<"div">;

export const ZoomIn = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...attrs } = props;

  return (
    <Animation
      base="transition transform origin-bottom duration-1000 delay-500"
      enter="scale-100"
      leave="scale-75"
      ref={ref}
      {...attrs}
    >
      {children}
    </Animation>
  );
});

ZoomIn.displayName = "ZoomIn";
