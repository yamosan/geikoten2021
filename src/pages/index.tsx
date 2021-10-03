import type { GetStaticProps, NextPage } from "next";
import Div100vh from "react-div-100vh";

import { About } from "@/components/About";
import { Image } from "@/components/basics";
import { Event } from "@/components/Event";
import { Layout } from "@/components/layouts/Layout";
import { Project } from "@/components/Project";
import { ScrollDown, VisitorCounter } from "@/components/ui";
import { SponsorsList } from "@/components/ui/SponsorsList";
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
          <Image src="/images/top_bg.jpg" alt="背景" layout="fill" objectFit="cover" />

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

            {/* スクロールダウン */}
            <div className="absolute bottom-0 transform -translate-x-1/2 left-1/2">
              <ScrollDown />
            </div>
          </div>
        </Div100vh>
        <div className="absolute">{/* TODO: カルーセル */}</div>
      </div>

      <div className="mt-[175px] lg:mt-[285px] flex flex-col space-y-12">
        {/* ABOUT */}
        <About />

        {/* PROJECT */}
        <Project />

        {/* EVENT */}
        <Event />
      </div>

      <div className="flex flex-col w-9/12 mx-auto my-16 space-y-12">
        <SponsorsList sponsors={sponsors.silver} />
        <SponsorsList sponsors={sponsors.bronze} />
      </div>
    </Layout>
  );
};

export default Root;
