import clsx from "clsx";
import React, { ComponentProps, ComponentPropsWithoutRef, forwardRef } from "react";

import { Image } from "@/components/basics";

type Props = {
  title: string;
  description: string;
  imageSrc: ComponentProps<typeof Image>["src"];
  size: "md" | "lg";
} & ComponentPropsWithoutRef<"div">;

export const EventCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { title, description, imageSrc, size, className, ...attrs } = props;

  return (
    <div className={clsx("relative flex flex-col space-y-2 bg-white group", className)} {...attrs} ref={ref}>
      <div className="flex space-x-6 items-end justify-between">
        <div
          className={clsx("flex-shrink-0 text-xl font-bold text-text w-max", {
            "text-2xl": size === "lg",
            "text-xl": size === "md",
          })}
        >
          {title}
        </div>
        <div
          className={clsx("text-text", {
            "text-base": size === "lg",
            "text-sm": size === "md",
          })}
        >
          {description}
        </div>
      </div>
      <figure className="relative flex-shrink-0 duration-300 transform group-hover:opacity-80">
        <Image src={imageSrc} alt={title} layout="responsive" height={236} width={420} />
      </figure>
    </div>
  );
});

EventCard.displayName = "EventCard";
