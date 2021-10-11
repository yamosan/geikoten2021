import clsx from "clsx";
import React, { VFC } from "react";

type Props = {
  className?: string;
};

export const Pc: VFC<Props> = ({ className }) => {
  return (
    <svg
      className={clsx(className)}
      width="102"
      height="98"
      viewBox="0 0 102 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 51V7.66667L94 6V22.6667L8 51Z" fill="#D3D977" />
      <path
        d="M8.39331 0H93.4644C98.159 0 102 3.71429 102 8.42857V63C102 67.7143 98.159 71.7143 93.4644 71.7143H60.318V85.8571H84.5021C88.0586 85.8571 88.3431 97.5714 88.7699 98H13.2301C13.2301 98 13.2301 85.8571 17.4979 85.8571H41.682V71.7143H8.39331C3.69874 71.7143 0 67.7143 0 63V8.42857C0 3.71429 3.69874 0 8.39331 0ZM8.39331 63H93.4644V8.42857H8.39331V63Z"
        fill="#504746"
      />
    </svg>
  );
};
