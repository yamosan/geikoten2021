import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { About, Event, Project, SponsorAds, Top } from "@/components/pages/root";
import type { Sponsor } from "@/models/Sponsor";
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
  return (
    <Layout>
      <Top goldSponsors={sponsors.gold} />

      <div className="bg-white">
        <About />
        <Project />
        <Event />
      </div>

      <SponsorAds silverSponsors={sponsors.silver} bronzeSponsors={sponsors.bronze} />
    </Layout>
  );
};

export default Root;
