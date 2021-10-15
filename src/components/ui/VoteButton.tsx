import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

import { ThumbUp } from "@/components/vectors";

type Props = {
  active?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const VoteButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { active, className, ...attrs } = props;
  return (
    <button
      className={clsx(
        "flex items-center space-x-1.5 text-[13px] text-text py-1.5 px-3 border-2 border-lightBrown rounded-md",
        {
          "text-text bg-white": !active,
          "text-white bg-lightBrown": active,
        },
        className
      )}
      ref={ref}
      {...attrs}
    >
      <ThumbUp className="w-[22px] flex-shrink-0" />
      <span>投票する</span>
    </button>
  );
});

VoteButton.defaultProps = {
  active: false,
};

VoteButton.displayName = "VoteButton";
