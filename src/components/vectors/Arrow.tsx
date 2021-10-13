import clsx from "clsx";
import React, { VFC } from "react";

type Props = {
  className?: string;
  round?: boolean;
  strokeWidth?: string | number;
  stroke?: "white" | "black";
  direction?: "top" | "bottom" | "left" | "right";
};

export const Arrow: VFC<Props> = ({
  className,
  round = false,
  strokeWidth = 3,
  stroke = "white",
  direction = "top",
}) => {
  const styles = clsx(
    "transform",
    {
      "rotate-0": direction === "top",
      "rotate-180": direction === "bottom",
      "-rotate-90": direction === "left",
      "rotate-90": direction === "right",
    },
    {
      "text-white": stroke === "white",
      "text-lightBrown": stroke === "black",
    },
    className
  );

  return (
    <svg className={styles} viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27 18L14.5 2L2 18"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap={round ? "round" : undefined}
      />
    </svg>
  );
};
