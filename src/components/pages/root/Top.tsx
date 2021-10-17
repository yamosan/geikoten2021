import type { VFC } from "react";
import Div100vh from "react-div-100vh";

import { Image } from "@/components/basics";
import { ScrollDown, SponsorsCarousel, VisitorCounter } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Sponsor } from "@/models/Sponsor";
import { useVisitorCount } from "@/store/vistorCount";

type Props = {
  goldSponsors: Sponsor[];
};

export const Top: VFC<Props> = ({ goldSponsors }) => {
  const isWide = useMedia("(min-width: 768px)");
  const { count } = useVisitorCount();

  return (
    <div className="relative" id="top">
      <Div100vh className="relative">
        <Image src="/images/top_bg.jpg" alt="背景" layout="fill" objectFit="cover" priority />

        <div className="relative w-full h-full pt-thead md:pt-14">
          {/* アクセスカウンタ */}
          {isWide ? (
            <div className="flex justify-end pr-4">
              <VisitorCounter count={count} size="lg" />
            </div>
          ) : (
            <div className="flex justify-start pl-4">
              <VisitorCounter count={count} size="sm" />
            </div>
          )}
        </div>
      </Div100vh>

      {isWide ? (
        <div className="flex flex-col items-center w-full mb-24 -mt-24 pl-shead">
          <ScrollDown className="z-10" />
          <SponsorsCarousel sponsors={goldSponsors} className="w-4/5" navigationPosition="rl" />
        </div>
      ) : (
        <div className="relative flex flex-col items-center pb-8 mb-24 -mt-24 overflow-x-hidden md:overflow-x-auto">
          <ScrollDown className="z-10" />
          <SponsorsCarousel sponsors={goldSponsors} className="w-[150%]" navigationPosition="bottom" />
        </div>
      )}
    </div>
  );
};
