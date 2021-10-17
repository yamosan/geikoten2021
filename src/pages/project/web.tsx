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
    website: WebContent[];
    game: WebContent[];
    virtual: WebContent[];
  };
};

const PROJECT_NAME = "web";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project = await findProject((project) => project.name === PROJECT_NAME);
  const webContents = {
    website: getWebContents({ type: "website" }),
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

const Web: NextPage<Props> = ({ project, webContents }) => {
  return (
    <>
      <Layout>
        <Hero project={project} />
        <main className="w-full md:pl-shead bg-white">
          <WebContents contents={webContents.website} groupLabel="webサイト" buttonLabel="サイトを見に行く" />
        </main>
        <Back />
      </Layout>

      <PageSeo path="/project/web" subtitle={project.title} />
    </>
  );
};

export default Web;
