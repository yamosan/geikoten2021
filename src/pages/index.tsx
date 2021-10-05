import type { GetStaticProps, NextPage } from "next";
import Div100vh from "react-div-100vh";

import { About } from "@/components/About";
import { Image } from "@/components/basics";
import { Event } from "@/components/Event";
import { Layout } from "@/components/layouts/Layout";
import { Project } from "@/components/Project";
import { ScrollDown, SponsorsCarousel, SponsorsList, VisitorCounter } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Sponsor } from "@/models/Sponsor";
import { getSponsors } from "@/utils/getSponsors";

type Props = {
  sponsors: {
    gold: Sponsor[];
    silver: Sponsor[];
    bronze: Sponsor[];
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const gold = getSponsors({ rank: "gold" });
  const silver = getSponsors({ rank: "silver" });
  const bronze = getSponsors({ rank: "bronze" });
  return {
    props: {
      sponsors: {
        gold,
        silver,
        bronze,
      },
    },
  };
};

const Root: NextPage<Props> = ({ sponsors }) => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得

  return (
    <Layout>
      <div className="relative">
        <Div100vh className="relative">
          <Image src="/images/top_bg.jpg" alt="背景" layout="fill" objectFit="cover" priority />

          <div className="relative w-full h-full pt-thead md:pt-14">
            {/* アクセスカウンタ */}
            {isWide ? (
              <div className="flex justify-end pr-4">
                <VisitorCounter count={1234} size="lg" />
              </div>
            ) : (
              <div className="flex justify-start pl-4">
                <VisitorCounter count={1234} size="sm" />
              </div>
            )}
          </div>
        </Div100vh>

        {isWide ? (
          <div className="flex flex-col items-center w-full mb-24 -mt-24 pl-shead">
            <ScrollDown className="z-10" />
            <SponsorsCarousel sponsors={sponsors.gold} className="w-4/5" navigationPosition="rl" />
          </div>
        ) : (
          <div className="relative flex flex-col items-center pb-8 mb-24 -mt-24 overflow-x-hidden">
            <ScrollDown className="z-10" />
            <SponsorsCarousel sponsors={sponsors.gold} className="w-[125%]" navigationPosition="bottom" />
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-12">
        {/* ABOUT */}
        <About />

        {/* PROJECT */}
        <Project />

        {/* EVENT */}
        <Event />
      </div>

      <div className="md:ml-shead">
        <div className="flex flex-col w-9/12 max-w-[1000px] mx-auto my-16 space-y-12 md:space-y-8">
          <SponsorsList sponsors={sponsors.silver} direction={isWide ? "row" : "column"} />
          <SponsorsList sponsors={sponsors.bronze} direction={isWide ? "row" : "column"} />
        </div>
      </div>
    </Layout>
  );
};

export default Root;
