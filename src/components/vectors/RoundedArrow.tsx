import clsx from "clsx";
import type { VFC } from "react";

type Props = {
  className?: string;
  direction?: "left" | "right";
};

export const RoundedArrow: VFC<Props> = ({ direction, className }) => {
  const styles = clsx(
    {
      "rotate-180 ": direction === "left",
    },
    "transform w-[44px] h-[44px]",
    className
  );

  return (
    <svg className={styles} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#504746" />
      <path
        d="M29.7071 23.2188C30.0976 22.8283 30.0976 22.1951 29.7071 21.8046L23.3431 15.4407C22.9526 15.0501 22.3195 15.0501 21.9289 15.4407C21.5384 15.8312 21.5384 16.4643 21.9289 16.8549L27.5858 22.5117L21.9289 28.1686C21.5384 28.5591 21.5384 29.1923 21.9289 29.5828C22.3195 29.9733 22.9526 29.9733 23.3431 29.5828L29.7071 23.2188ZM16 23.5117H29V21.5117H16V23.5117Z"
        fill="white"
      />
    </svg>
  );
};

RoundedArrow.defaultProps = {
  direction: "right",
};
