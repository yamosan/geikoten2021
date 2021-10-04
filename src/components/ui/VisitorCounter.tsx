import clsx from "clsx";
import { VFC } from "react";

type Props = {
  count: number;
  size?: "sm" | "lg";
};

const MAX_DIGIT = 5;

export const VisitorCounter: VFC<Props> = ({ count, size = "sm" }) => {
  const digits =
    count.toString().length <= MAX_DIGIT
      ? count.toString().padStart(MAX_DIGIT, "0").split("")
      : new Array(MAX_DIGIT).fill("9");

  return (
    <div className="flex items-center overflow-hidden border-2 rounded-md text-text filter drop-shadow-solid bg-green-10 w-max">
      <div
        className={clsx("font-bold", {
          "text-xs pl-2 pr-1": size === "sm",
          "text-base pl-2.5 pr-1.5": size === "lg",
        })}
      >
        来場者数
      </div>
      <div
        className={clsx("flex bg-white border-l-2", {
          "px-1.5 py-0.5 space-x-1": size === "sm",
          "px-2 py-0.5 space-x-1.5": size === "lg",
        })}
      >
        <div className="flex space-x-0.5">
          {digits.map((char, i) => (
            <div
              key={i.toString()}
              className={clsx("font-black text-white rounded bg-lightBrown", {
                "text-base px-1.5 py-0.5": size === "sm",
                "text-xl px-2 py-1": size === "lg",
              })}
            >
              {char}
            </div>
          ))}
        </div>
        <span
          className={clsx("my-auto font-black", {
            "text-xs": size === "sm",
            "text-base": size === "lg",
          })}
        >
          人
        </span>
      </div>
    </div>
  );
};
