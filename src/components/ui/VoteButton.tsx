import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, useRef } from "react";

import { ThumbUp } from "@/components/vectors";

type Props = {
  active?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const VoteButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { active, className, onClick, ...attrs } = props;

  const clickedRef = useRef<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    clickedRef.current = true;
    onClick(e);
  };

  return (
    <>
      <button
        disabled={active}
        onClick={handleClick}
        className={clsx(
          "flex items-center space-x-1.5 text-[13px] text-text py-1.5 px-3 border-2 border-lightBrown rounded-md group",
          "transform transition-all duration-200",
          {
            "text-text bg-white hover:scale-95": !active,
            "text-white bg-lightBrown cursor-default": active,
          },
          className
        )}
        ref={ref}
        {...attrs}
      >
        <span
          className={clsx("flex-shrink-0 transform transition", {
            "group-hover:rotate-12": !active,
            "thumb-up": active && clickedRef.current,
          })}
        >
          <ThumbUp className="w-[22px]" />
        </span>
        <span>{active ? "投票済み" : "投票する"}</span>
      </button>

      <style jsx>{`
        .thumb-up {
          animation: thumb-up-animation linear 0.5s;
        }
        @keyframes thumb-up-animation {
          0% {
            transform: rotate(12deg) scale(1);
          }
          30%,
          90% {
            transform: rotate(-12deg) scale(1.25);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </>
  );
});

VoteButton.defaultProps = {
  active: false,
};

VoteButton.displayName = "VoteButton";
