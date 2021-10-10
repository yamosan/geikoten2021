import type { VFC } from "react";
import Div100vh from "react-div-100vh";

import { Image } from "@/components/basics";
import { ScrollDown, SponsorsCarousel } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Sponsor } from "@/models/Sponsor";

type Props = {
  goldSponsors: Sponsor[];
};

export const CM: VFC<Props> = ({ goldSponsors }) => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得

  return (
    <div className="relative" id="top">
      <Div100vh className="relative">
        <Image src="/images/top_bg.jpg" alt="背景" layout="fill" objectFit="cover" priority />
      </Div100vh>

      {isWide ? (
        <div className="flex flex-col items-center w-full mb-24 -mt-24 pl-shead">
          <ScrollDown className="z-10" />
          <SponsorsCarousel sponsors={goldSponsors} className="w-4/5" navigationPosition="rl" />
        </div>
      ) : (
        <div className="relative flex flex-col items-center pb-8 mb-24 -mt-24 overflow-x-hidden">
          <ScrollDown className="z-10" />
          <SponsorsCarousel sponsors={goldSponsors} className="w-[150%]" navigationPosition="bottom" />
        </div>
      )}
    </div>
  );
};
