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
            { title: "CM", youtubeUrl: "https://www.youtube.com/embed/MkZmEZJfM1Y" },
            { title: "明治と行く開運旅", youtubeUrl: "https://www.youtube.com/embed/-qUYXGIivVQ" },
            { title: "脛骨彼女オーディション", youtubeUrl: "https://www.youtube.com/embed/iOTnKT5stRE " },
          ]}
        />
        <Back />
      </Layout>

      <PageSeo path="/project/stage" subtitle={project.title} />
    </>
  );
};

export default Stage;
