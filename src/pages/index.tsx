import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { About, Event, Project, SponsorAds, Top } from "@/components/pages/root";
import { PageSeo } from "@/components/PageSeo";
import type { Project as TProject, Sponsor as TSponsor } from "@/models";
import { getProjects } from "@/utils/getProjects";
import { getSponsors } from "@/utils/getSponsors";

type Props = {
  sponsors: {
    gold: TSponsor[];
    silver: TSponsor[];
    bronze: TSponsor[];
  };
  projects: TProject[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sponsors = {
    gold: getSponsors({ rank: "gold" }),
    silver: getSponsors({ rank: "silver" }),
    bronze: getSponsors({ rank: "bronze" }),
  };
  const projects = getProjects();

  return {
    props: {
      sponsors,
      projects,
    },
  };
};

const Root: NextPage<Props> = ({ sponsors, projects }) => {
  return (
    <>
      <Layout>
        <Top goldSponsors={sponsors.gold} />

        <div className="bg-white pb-24 md:pb-32">
          <About />
          <Project projects={projects} />
          <Event />
        </div>

        <SponsorAds silverSponsors={sponsors.silver} bronzeSponsors={sponsors.bronze} />
      </Layout>

      <PageSeo path="/" />
    </>
  );
};

export default Root;
