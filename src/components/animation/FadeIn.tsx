import React, { ComponentPropsWithoutRef, forwardRef } from "react";

import { Base } from "./Base";

type Props = Omit<ComponentPropsWithoutRef<typeof Base>, "base" | "enter" | "leave">;

export const FadeIn = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...attrs } = props;

  return (
    <Base
      base="transition transform duration-700 delay-200"
      enter="opacity-100 translate-y-0"
      leave="opacity-0 translate-y-8"
      ref={ref}
      {...attrs}
    >
      {children}
    </Base>
  );
});

FadeIn.displayName = "FadeIn";
