import clsx from "clsx";
import React, { VFC } from "react";

type Props = {
  onClick: () => void;
  isOpen: boolean;
  color?: "white" | "black";
  transition?: string;
};

export const HamburgerMenu: VFC<Props> = ({ onClick, isOpen, color, transition }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(" w-10 h-10 relative focus:outline-none", {
        "text-white": color === "white",
        "text-brown": color === "black",
      })}
    >
      <div className="absolute left-1/2 top-3.5 transform -translate-x-1/2 -translate-y-1/2">
        <div className="block w-5">
          <div
            aria-hidden="true"
            className={clsx("absolute h-0.5 w-5 rounded bg-current transform", transition, {
              "rotate-45": isOpen,
              "translate-y-1.5": !isOpen,
            })}
          ></div>
          <div
            aria-hidden="true"
            className={clsx("absolute h-0.5 w-5 rounded bg-current transform", transition, {
              "opacity-0": isOpen,
            })}
          ></div>
          <div
            aria-hidden="true"
            className={clsx("absolute h-0.5 w-5 rounded bg-current transform", transition, {
              "-rotate-45": isOpen,
              "-translate-y-1.5": !isOpen,
            })}
          ></div>
        </div>
      </div>
      <div className={clsx("absolute bottom-1 left-1/2 -translate-x-1/2 transform", transition)}>
        <p className="font-bold leading-none text-xxs">{isOpen ? "CLOSE" : "OPEN"}</p>
      </div>
    </button>
  );
};

HamburgerMenu.defaultProps = {
  color: "white",
};
