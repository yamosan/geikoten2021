import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";

type Props = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, checked, className, ...attrs } = props;

  return (
    <>
      <label className={clsx("inline-flex items-center cursor-pointer select-none", "text-text text-sm", className)}>
        <input className="sr-only" type="checkbox" ref={ref} {...attrs} />
        <span
          className="relative mr-2 w-5 h-5 border border-gray rounded-sm inline-flex items-center justify-center"
          role="checkbox"
          aria-hidden
          aria-checked={checked}
        >
          <span className={clsx("transition-opacity", checked ? "opacity-100" : "opacity-0")}>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.5 5.5L6 10L13.5 1"
                stroke="#504746"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
        {label}
      </label>
    </>
  );
});

Checkbox.displayName = "Checkbox";
