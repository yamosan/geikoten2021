import clsx from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
type Props = {
  direction: "bottom" | "right";
} & ComponentPropsWithoutRef<typeof Link>;

export const LinkButton = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { direction, children, ...attrs } = props;

  return (
    <Link {...attrs}>
      <a ref={ref}>
        <div className="relative flex items-center h-[58px] w-[217px] transform duration-300 hover:scale-95">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 218 54"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 52.4997V9.42601L14.4178 1.5L216.5 1.5003V44.574L203.582 52.5L1.5 52.4997Z"
              stroke="#D3D977"
              strokeWidth="3"
            />
          </svg>

          <div className={clsx("relative p-2 pl-6 h-full w-full text-sm text-text")}>
            <span className="relative flex items-center justify-center w-full h-full">
              <svg
                className={clsx("absolute -left-2 transform", { "-rotate-90": direction === "right" })}
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 9.5L8 18.5L15 9.5" stroke="#D3D977" strokeWidth="2" strokeLinejoin="round" />
                <path d="M1 1L8 10L15 1" stroke="#D3D977" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              <span className="font-bold">{children}</span>
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
});

LinkButton.displayName = "LinkButton";
