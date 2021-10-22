import clsx from "clsx";
import type { ComponentProps, VFC } from "react";
import React from "react";

import { Ellipse } from "@/components/vectors";
import { Theme } from "@/models";

type Props = {
  color: Theme;
  size: number;
  className?: string;
  xReverse?: boolean;
  yReverse?: boolean;
} & ComponentProps<"div">;

const BG_COLOR_MAP = {
  shutter: "text-shutter opacity-20",
  film: "text-film opacity-20",
  lens: "text-lens opacity-20",
};

export const Balloon: VFC<Props> = (props) => {
  const { color, size, xReverse, yReverse, className, ...attrs } = props;

  return (
    <>
      <div className={className} {...attrs}>
        <div
          className={clsx("relative w-max", BG_COLOR_MAP[color], {
            "reverse-x": xReverse && !yReverse,
            "reverse-y": !xReverse && yReverse,
            "reverse-xy": xReverse && yReverse,
          })}
        >
          <Ellipse size={size} />
          <Ellipse size={40} className="absolute transform bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      <style jsx>{`
        .reverse-x {
          transform: scale(-1, 1);
        }
        .reverse-y {
          transform: scale(1, -1);
        }
        .reverse-xy {
          transform: scale(-1, -1);
        }
      `}</style>
    </>
  );
};

Balloon.defaultProps = {
  xReverse: false,
  yReverse: false,
};
