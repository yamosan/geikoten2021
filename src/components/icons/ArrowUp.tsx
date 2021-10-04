import clsx from "clsx";
import React, { VFC } from "react";

type Props = {
  className: string;
};

export const ArrowUp: VFC<Props> = ({ className }) => {
  return (
    <svg className={clsx(className)} viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 18L14.5 2L2 18" stroke="white" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
};
