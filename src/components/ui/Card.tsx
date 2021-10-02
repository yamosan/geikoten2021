import clsx from "clsx";
import React, { ComponentProps, ComponentPropsWithoutRef, forwardRef } from "react";

import { Image } from "@/components/basics";

type ColorLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80;

type Props = {
  index: number;
  title: string;
  description: string;
  colorLevel: ColorLevel;
  imageSrc: ComponentProps<typeof Image>["src"];
  size: "md" | "lg";
} & ComponentPropsWithoutRef<"div">;

const textColorMap = {
  10: "text-green-10",
  20: "text-green-20",
  30: "text-green-30",
  40: "text-green-40",
  50: "text-green-50",
  60: "text-green-60",
  70: "text-green-70",
  80: "text-green-80",
};

export const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { index, title, description, colorLevel, imageSrc, className, ...attrs } = props;

  return (
    <>
      <div className={clsx("relative flex flex-col space-y-3 bg-white p-6", className)} {...attrs} ref={ref}>
        <figure className="relative h-[280px] w-[280px] flex-shrink-0 tape">
          <Image src={imageSrc} alt={title} layout="fill" />
          {/* テープ */}
          <span className="tape"></span>
        </figure>
        <div className="flex items-center justify-between">
          <div className="relative h-full">
            <div
              className={clsx("font-genuine text-6xl", textColorMap[colorLevel])}
              style={{ position: "relative", top: "0.15em" }}
            >
              {`#${index.toString().padStart(2, "0")}`}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold text-text">{title}</div>
            <div className="text-text">{description}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tape::before {
          @apply bg-green-10 opacity-70 z-10 transform;
          @apply absolute top-1 left-1 -translate-x-1/2 -translate-y-1/2 rotate-[-36deg];
          content: "";
          width: 112px;
          height: 32px;
        }

        .tape::after {
          @apply bg-green-10 opacity-70 z-10 transform;
          @apply absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 rotate-[36deg];
          content: "";
          width: 112px;
          height: 32px;
        }
      `}</style>
    </>
  );
});

Card.displayName = "Card";
