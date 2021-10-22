import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";

import { Theme } from "@/models";

type Props = {
  borderColor: Theme | "white";
} & ComponentPropsWithoutRef<"p">;

const BORDER_COLOR_MAP = {
  shutter: "border-shutter after:border-shutter",
  film: "border-film after:border-film",
  lens: "border-lens after:border-lens",
  white: "border-white after:border-white",
};

export const GoTo = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  const { children, className, borderColor, ...attrs } = props;
  return (
    <>
      <p
        className={clsx("text-sm text-text", "with-arrow", BORDER_COLOR_MAP[borderColor], className)}
        ref={ref}
        {...attrs}
      >
        {children}
      </p>
      <style jsx>{`
        .with-arrow {
          @apply relative py-1 border-b-[3px] pl-4 pr-7;
        }
        .with-arrow::after {
          @apply absolute bottom-0 right-0 h-[120%] border-r-[3px] transform -rotate-45 origin-bottom-right;
          content: "";
        }
      `}</style>
    </>
  );
});

GoTo.displayName = "GoTo";
