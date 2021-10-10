import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

import { Image } from "@/components/basics";
import { Project } from "@/models";

export type ColorLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80;

type Props = {
  project: Project;
  index: number;
  colorLevel: ColorLevel;
  size: "md" | "lg";
  base?: "width" | "height";
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
  const { project, index, colorLevel, base, size, className, ...attrs } = props;

  console.log(size);
  return (
    <>
      <div
        className={clsx(
          {
            "h-full": base === "height",
            " w-full": base === "width",
          },
          "relative group",
          className
        )}
        {...attrs}
        ref={ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="460"
          width="410"
          className={clsx({
            "w-auto h-full": base === "height",
            "h-auto w-full": base === "width",
          })}
        />

        <div className="absolute inset-0 w-full h-full">
          <div className="relative flex flex-col justify-between space-y-2 h-full p-[4%] bg-white">
            <figure className="relative h-full tape">
              <Image src={project.images.thumbnailUrl} alt={project.title} layout="fill" objectFit="contain" />
              <span className="tape" />
              <div className="opacity-0 transition-opacity md:group-hover:opacity-100 duration-300">
                <p className="absolute inset-0 m-auto flex justify-center items-center w-full py-16 text-center text-white px-14 bg-lightBrown opacity-90 h-5/6">
                  {project.description}
                </p>
              </div>
            </figure>
            <div className="flex items-center justify-between w-full">
              <div className="relative h-full">
                <div
                  className={clsx("font-genuine", size === "md" ? "text-5xl" : "text-6xl", textColorMap[colorLevel])}
                  style={{ position: "relative", top: "0.15em" }}
                >
                  {`#${index.toString().padStart(2, "0")}`}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className={clsx("font-bold text-text", size === "md" ? "text-2xl" : "text-3xl")}>
                  {project.title}
                </div>
                <div className={clsx("text-text", size === "md" ? "text-xs" : "text-base")}>{project.subTitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tape::before {
          @apply bg-green-10 opacity-70 z-10 transform;
          @apply absolute top-2 left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-36deg];
          content: "";
          width: ${size === "md" ? "105px" : "112px"};
          height: ${size === "md" ? "30px" : "32px"};
        }

        .tape::after {
          @apply bg-green-10 opacity-70 z-10 transform;
          @apply absolute top-2 right-2 translate-x-1/2 -translate-y-1/2 rotate-[36deg];
          content: "";
          width: ${size === "md" ? "105px" : "112px"};
          height: ${size === "md" ? "30px" : "32px"};
        }
      `}</style>
    </>
  );
});

ProjectCard.defaultProps = {
  base: "width",
};

ProjectCard.displayName = "ProjectCard";
