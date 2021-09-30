import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"span">;

export const Highlight = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { children, className, ...attrs } = props;
  return (
    <>
      <span className={clsx("font-bold highlight", className)} ref={ref} {...attrs}>
        {children}
      </span>

      <style jsx>{`
        .highlight {
          background: linear-gradient(transparent 65%, #d3d977 65%); /* TODO: tailwind.config.jsから値を参照 */
        }
      `}</style>
    </>
  );
});

Highlight.displayName = "Highlight";
