import clsx from "clsx";
import type { VFC } from "react";

import { Image } from "@/components/basics";
import { Theme } from "@/models/Exhibition";

type Props = {
  subHeading: string;
  heading: string;
  description: string;
  thumbnailUrl: string;
  themeColor: Theme;
  className?: string;
  layout?: "row" | "column";
};

const THEME_COLOR_MAP = {
  shutter: "border-shutter",
  film: "border-film",
  lens: "border-lens",
};

export const RoomInfoCard: VFC<Props> = (props) => {
  const { subHeading, heading, themeColor, thumbnailUrl, description, className, layout } = props;

  return (
    <div
      className={clsx(
        "flex rounded-3xl w-full bg-white px-4 pt-7 pb-10 lg:py-20 lg:pl-20 lg:pr-12",
        {
          "flex-col space-y-4": layout === "column",
          "flex-row space-x-4": layout === "row",
        },
        className
      )}
    >
      <figure className="relative h-full flex-[5.5] flex items-center w-full">
        <div className="shadow w-full rounded-3xl overflow-hidden">
          <Image src={thumbnailUrl} layout="responsive" width={354} height={200} alt={heading} />
        </div>
      </figure>
      <div className="my-auto flex flex-col flex-[4.5]">
        <header className={clsx("border-b-2 border-dashed pb-2 lg:pb-3", THEME_COLOR_MAP[themeColor])}>
          <p role="doc-subtitle" className="text-lg text-text">
            {subHeading}
          </p>
          <h2 className="font-bold text-2xl lg:text-3xl text-text mt-1">{heading}</h2>
        </header>

        <p className="text-base text-text leading-loose mt-3 lg:mt-2 whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
};

RoomInfoCard.defaultProps = {
  layout: "column",
};
