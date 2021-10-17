import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Back } from "@/components/pages/project/Back";
import { Hero } from "@/components/pages/project/Hero";
import { WebContents } from "@/components/pages/project/WebContents";
import { PageSeo } from "@/components/PageSeo";
import { Project, WebContent } from "@/models";
import { findProject } from "@/utils/getProjects";
import { getWebContents } from "@/utils/getWebContents";

type Props = {
  project: Project;
  webContents: {
    game: WebContent[];
    virtual: WebContent[];
  };
};

const PROJECT_NAME = "game";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project = await findProject((project) => project.name === PROJECT_NAME);
  const webContents = {
    game: getWebContents({ type: "game" }),
    virtual: getWebContents({ type: "virtual" }),
  };

  return {
    props: {
      project,
      webContents,
    },
  };
};

const Game: NextPage<Props> = ({ project, webContents }) => {
  return (
    <>
      <Layout>
        <Hero project={project} />
        <main className="w-full md:pl-shead flex flex-col space-y-[212px] lg:space-y-[120px] items-stretch bg-white">
          <WebContents contents={webContents.game} groupLabel="ゲーム" buttonLabel="ゲームをプレイ" />
          <WebContents contents={webContents.virtual} groupLabel="バーチャル会場" buttonLabel="clusterに行く" />
        </main>
        <Back />
      </Layout>

      <PageSeo path="/project/game" subtitle={project.title} />
    </>
  );
};

export default Game;
