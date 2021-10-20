import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";

type Props = {
  label?: string;
  // controlled
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & ComponentPropsWithoutRef<"input">;

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, className, checked, onChange, ...attrs } = props;

  return (
    <>
      <label className={clsx("inline-flex items-center cursor-pointer select-none", "text-text text-sm", className)}>
        <input
          className={clsx("sr-only peer")}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          ref={ref}
          {...attrs}
        />
        <span
          className={clsx(
            "relative w-5 h-5 border border-gray rounded-sm",
            "outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-green-10",
            label && "mr-2"
          )}
          role="checkbox"
          aria-hidden
          aria-checked={checked}
        >
          <span
            className={clsx(
              "transition-opacity",
              checked ? "opacity-100" : "opacity-0",
              "absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          >
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
