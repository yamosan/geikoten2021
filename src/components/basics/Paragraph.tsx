import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"p">;

export const Paragraph = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  const { children, className, ...attrs } = props;
  return (
    <p className={clsx("text-sm leading-loose tracking-widest text-text", className)} ref={ref} {...attrs}>
      {children}
    </p>
  );
});

Paragraph.displayName = "Paragraph";
