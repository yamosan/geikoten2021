import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & { href: string };

export const ExternalLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { children, ...attrs } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" className="block" {...attrs} ref={ref}>
      {children}
    </a>
  );
});

ExternalLink.displayName = "ExternalLink";
