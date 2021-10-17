import clsx from "clsx";
import React, { VFC } from "react";

type Props = {
  className?: string;
};

export const LinkChain: VFC<Props> = ({ className }) => {
  return (
    <svg
      className={clsx(className)}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.451 9.29923C12.814 8.66242 11.9501 8.30469 11.0493 8.30469C10.1485 8.30469 9.2846 8.66242 8.64753 9.29923L6.245 11.701C5.60791 12.3381 5.25 13.2021 5.25 14.1031C5.25 15.0041 5.60791 15.8682 6.245 16.5053C6.88209 17.1424 7.74616 17.5003 8.64714 17.5003C9.54812 17.5003 10.4122 17.1424 11.0493 16.5053L12.2502 15.3044"
        stroke="#BFBFBF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0488 11.701C11.6859 12.3378 12.5498 12.6956 13.4506 12.6956C14.3514 12.6956 15.2153 12.3378 15.8523 11.701L18.2549 9.29928C18.8919 8.66219 19.2499 7.79812 19.2499 6.89714C19.2499 5.99616 18.8919 5.13209 18.2549 4.495C17.6178 3.85791 16.7537 3.5 15.8527 3.5C14.9517 3.5 14.0877 3.85791 13.4506 4.495L12.2497 5.69587"
        stroke="#BFBFBF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
