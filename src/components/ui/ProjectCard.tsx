import clsx from "clsx";
import React, { ComponentProps, ComponentPropsWithoutRef, forwardRef } from "react";

import { Image } from "@/components/basics";

type ColorLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80;

type Props = {
  index: number;
  title: string;
  subTitle: string;
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

export const ProjectCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { index, title, subTitle, description, colorLevel, imageSrc, className, ...attrs } = props;

  return (
    <>
      <div className={clsx("h-full", "relative group", className)} {...attrs} ref={ref}>
        <svg xmlns="http://www.w3.org/2000/svg" height="460" width="410" className="w-auto h-full" />

        <div className="absolute inset-0 w-full h-full">
          <div className="relative flex flex-col justify-between space-y-2 h-full p-[4%] bg-white">
            <figure className="relative h-full tape">
              <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" width={280} height={280} />
              <span className="tape" />
              <div className="opacity-0 transition-opacity group-hover:opacity-100 duration-300">
                <p className="absolute inset-0 m-auto flex items-center w-full py-16 text-center text-white px-14 bg-lightBrown opacity-90 h-5/6">
                  {description}
                </p>
              </div>
            </figure>
            <div className="flex items-center justify-between w-full">
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
                <div className="text-text">{subTitle}</div>
              </div>
            </div>
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

ProjectCard.displayName = "ProjectCard";
