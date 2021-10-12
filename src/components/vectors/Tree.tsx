import clsx from "clsx";
import { VFC } from "react";

type Props = {
  reverse?: boolean;
  dark?: boolean;
  className: string;
};

export const Tree: VFC<Props> = (props) => {
  const { reverse = false, dark = false, className } = props;
  return (
    <>
      <svg
        className={clsx(reverse && "reverse-x", className)}
        viewBox="0 0 22 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9835 21.8133C22.3978 28.2673 14.9051 30.9565 11.1069 31.4943C6.44514 31.4943 1.78436 29.881 0.230553 21.8133C-1.32325 13.7455 5.4099 4.06463 7.48164 1.91328C9.55338 -0.238071 11.3921 -0.619371 14.5 0.994141C17.6079 2.60765 21.4656 13.7457 21.9835 21.8133Z"
          fill="currentColor"
          className={dark ? "text-green-80" : "text-green-50"}
        />
        <path
          d="M12.3333 39.259C11.0533 39.6849 8.95556 39.4364 8.06667 39.259C9.34667 27.3325 7.88889 22.5761 7 21.6887C7.85333 21.6887 9.48889 23.4635 10.2 24.3509C10.2 22.2212 10.9111 19.559 11.2667 18.4941C11.6933 21.0498 11.4444 23.4635 11.2667 24.3509C12.12 23.073 14.1111 22.0437 15 21.6887C11.5867 23.3925 11.8 34.1121 12.3333 39.259Z"
          fill="#504746"
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
