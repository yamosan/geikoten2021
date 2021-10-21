import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Back } from "@/components/pages/project/Back";
import { Hero } from "@/components/pages/project/Hero";
import { MovieList } from "@/components/pages/project/MovieList";
import { PageSeo } from "@/components/PageSeo";
import { Project } from "@/models";
import { findProject } from "@/utils/getProjects";

type Props = {
  project: Project;
};

const PROJECT_NAME = "stage";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project = await findProject((project) => project.name === PROJECT_NAME);

  return {
    props: {
      project,
    },
  };
};

const Stage: NextPage<Props> = ({ project }) => {
  return (
    <>
      <Layout>
        <Hero project={project} />
        <MovieList
          movies={[
            { title: "脛骨彼女オーディション", youtubeUrl: "https://www.youtube.com/embed/w-tGNmUipk0" },
            { title: "明治と行く開運旅", youtubeUrl: "https://www.youtube.com/embed/whpFjeH0ZqU" },
          ]}
        />
        <Back />
      </Layout>

      <PageSeo path="/project/stage" subtitle={project.title} />
    </>
  );
};

export default Stage;
