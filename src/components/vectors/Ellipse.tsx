import clsx from "clsx";
import { VFC } from "react";

type Props = {
  className?: string;
  size: number;
};

export const Ellipse: VFC<Props> = (props) => {
  const { className, size } = props;
  return (
    <>
      <svg
        className={clsx(className)}
        width={size}
        height={size}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="28" transform="matrix(1 0 0 -1 28 28)" fill="currentColor" />
      </svg>
    </>
  );
};
