import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, useLayoutEffect, useRef, useState } from "react";

import { Image } from "@/components/basics";
import { Project } from "@/models";

export type ColorLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80;

type Props = {
  project: Project;
  index: number;
  colorLevel: ColorLevel;
  size: "md" | "lg";
  base?: "width" | "height";
  descriptionType?: "hover" | "flex" | "hidden";
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

const bgColorMap = {
  10: "before:bg-green-10 after:bg-green-10",
  20: "before:bg-green-20 after:bg-green-20",
  30: "before:bg-green-30 after:bg-green-30",
  40: "before:bg-green-40 after:bg-green-40",
  50: "before:bg-green-50 after:bg-green-50",
  60: "before:bg-green-60 after:bg-green-60",
  70: "before:bg-green-70 after:bg-green-70",
  80: "before:bg-green-80 after:bg-green-80",
};

export const ProjectCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { project, index, colorLevel, base, size, descriptionType, className, ...attrs } = props;
  const [{ width: fw, height: fh }, setDescriptionSize] = useState({ width: 0, height: 0 });
  const leftRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (leftRef.current === null) return;
    if (descriptionType !== "flex") return;

    setDescriptionSize({
      width: leftRef.current.clientWidth,
      height: leftRef.current.clientHeight,
    });
  }, [descriptionType]);

  return (
    <>
      <div
        className={clsx(
          "relative group",
          {
            "h-full": base === "height",
            "w-full": base === "width",
            flex: descriptionType === "flex",
          },
          className
        )}
        {...attrs}
        ref={ref}
      >
        <div className="relative h-full" ref={leftRef}>
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
                <span className={clsx("tape", bgColorMap[colorLevel])} />
                {descriptionType === "hover" && (
                  <div className="opacity-0 transition-opacity md:group-hover:opacity-100 duration-300">
                    <p
                      className={clsx(
                        "bg-lightBrown-70",
                        "absolute inset-0 m-auto flex justify-center items-center w-full py-16 text-center text-white px-14 h-5/6"
                      )}
                    >
                      {project.description}
                    </p>
                  </div>
                )}
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
        {leftRef.current && descriptionType === "flex" && (
          <div className="h-full flex items-center">
            <p
              className={clsx(
                "bg-lightBrown-70",
                "flex justify-center items-center py-16 text-center text-white px-14"
              )}
              style={{ width: `${fw * 0.8}px`, height: `${fh * 0.6}px` }}
            >
              {project.description}
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .tape::before {
          @apply opacity-70 z-10 transform;
          @apply absolute top-2 left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-36deg];
          content: "";
          width: ${size === "md" ? "105px" : "112px"};
          height: ${size === "md" ? "30px" : "32px"};
        }

        .tape::after {
          @apply opacity-70 z-10 transform;
          @apply absolute top-2 right-2 translate-x-1/2 -translate-y-1/2 rotate-[36deg];
          content: "";
          width: ${size === "md" ? "105px" : "112px"};
          height: ${size === "md" ? "30px" : "32px"};
        }

        .bg-lightBrown-70 {
          background: rgba(80, 71, 70, 0.7);
        }
      `}</style>
    </>
  );
});

ProjectCard.defaultProps = {
  base: "width",
  descriptionType: "hover",
};

ProjectCard.displayName = "ProjectCard";
