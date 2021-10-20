import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";

type Props = {
  active?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const MenuButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { active, className, children, ...attrs } = props;

  return (
    <>
      <button
        className={clsx(
          "min-w-[100px] text-sm py-2 px-4 rounded-md border border-lightBrown inline-flex justify-between space-x-1 items-center hover:text-opacity-100",
          "outline-none focus-visible:ring-2 focus-visible:ring-green-10",
          {
            "text-white bg-lightBrown": active,
            "text-lightBrown bg-white": !active,
          },
          className
        )}
        ref={ref}
        {...attrs}
      >
        <span></span>
        <span>{children}</span>
        <span className="check" aria-hidden />
      </button>

      <style jsx>{`
        .check {
          @apply w-[8px] h-[12px] border-t-[6px] border-l-[4px] border-r-[4px] border-current transform translate-y-1/4;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      `}</style>
    </>
  );
});

MenuButton.defaultProps = {
  active: false,
};

MenuButton.displayName = "MenuButton";
