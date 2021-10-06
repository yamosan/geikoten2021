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
  const { title, description, imageSrc, className, ...attrs } = props;

  return (
    <div className={clsx("relative flex flex-col space-y-2 bg-white p-6 group", className)} {...attrs} ref={ref}>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-text">{title}</div>
        <div className="text-text">{description}</div>
      </div>
      <figure className="relative h-[236px] w-[420px] flex-shrink-0 transform duration-300 group-hover:opacity-70">
        <Image src={imageSrc} alt={title} layout="responsive" height={236} width={420} />
      </figure>
    </div>
  );
});

EventCard.displayName = "EventCard";
