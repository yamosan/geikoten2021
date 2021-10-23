import clsx from "clsx";
import type { VFC } from "react";

type Props = {
  className?: string;
};

export const ThumbUp: VFC<Props> = ({ className }) => {
  return (
    <svg className={clsx(className)} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9C22 7.9 21.1 7 20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.58 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20ZM8 8L12.34 3.66L11 9H20V11L17 18H8V8ZM0 8H4V20H0V8Z"
        fill="currentColor"
      />
    </svg>
  );
};
