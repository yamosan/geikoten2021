import React, { ComponentPropsWithoutRef, forwardRef } from "react";

import { use100vh } from "@/hooks/use100vh";

export const Div100vh = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(({ style, ...attrs }, ref) => {
  const height = use100vh();

  const styleWithRealHeight = {
    ...style,
    height: height ? `${height}px` : "100vh",
  };
  return <div ref={ref} style={styleWithRealHeight} {...attrs} />;
});

Div100vh.displayName = "Div100vh";
