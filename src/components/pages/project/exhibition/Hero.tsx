import clsx from "clsx";
import type { VFC } from "react";
import Div100vh from "react-div-100vh";

import { Image } from "@/components/basics";
import { Theme } from "@/models/Exhibition";

type Props = {
  subHeading: string;
  heading: string;
  description: string;
  thumbnailUrl: string;
  themeColor: Theme;
};

export const Hero: VFC<Props> = (props) => {
  return (
    <div className="relative">
      <Div100vh className="relative">
        <Image src="/images/work_bg.png" alt="背景" layout="fill" objectFit="cover" priority />
        <div className="flex justify-center md:pl-shead h-full relative pt-thead md:pt-0 pb-[80px]">
          <div className="w-11/12 lg:w-5/6 h-full flex justify-center items-center lg:max-w-app lg:mx-auto">
            <Card {...props} />
          </div>
        </div>
      </Div100vh>
    </div>
  );
};

const THEME_COLOR_MAP = {
  shutter: "border-shutter",
  film: "border-film",
  lens: "border-lens",
};

const Card: VFC<Props> = (props) => {
  const { subHeading, heading, themeColor, thumbnailUrl, description } = props;

  return (
    <div
      className="flex rounded-3xl w-full bg-white
                flex-col px-4 pt-7 pb-10 space-y-4
                lg:flex-row lg:space-x-4 lg:space-y-0 lg:py-20 lg:pl-20 lg:pr-12"
    >
      <figure className="relative h-full flex-[5.5] flex items-center w-full">
        <div className="shadow w-full rounded-3xl overflow-hidden">
          <Image src={thumbnailUrl} layout="responsive" width={354} height={200} alt={heading} />
        </div>
      </figure>
      <div className="my-auto flex flex-col flex-[4.5]">
        <header className={clsx("pb-2 lg:pb-3 border-b-2 border-dashed", THEME_COLOR_MAP[themeColor])}>
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
