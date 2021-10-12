import clsx from "clsx";
import { VFC } from "react";

type Props = {
  reverse?: boolean;
  className: string;
};

export const Crowd: VFC<Props> = (props) => {
  const { reverse = false, className } = props;
  return (
    <>
      <svg
        className={clsx(reverse && "reverse-x", className)}
        viewBox="0 0 67 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 25.0004C0 15.1884 9.61138 7.23716 21.4523 7.23716C33.2931 7.23716 42.9237 15.1884 42.9237 25.0004"
          fill="white"
        />
        <path
          d="M19.8817 16.1203C19.8817 7.21764 27.6658 0 37.2695 0C46.8732 0 54.6573 7.21764 54.6573 16.1203"
          fill="white"
        />
        <path
          d="M24.061 25.0003C24.061 16.9115 33.6724 10.3548 45.5133 10.3548C57.3542 10.3548 66.9656 16.9115 66.9656 25.0003"
          fill="white"
        />
      </svg>

      <style jsx>{`
        .reverse-x {
          transform: scale(-1, 1);
        }
      `}</style>
    </>
  );
};
