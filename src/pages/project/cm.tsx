import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Hero } from "@/components/pages/project/Hero";
import { Project } from "@/models";
import { findProject } from "@/utils/getProjects";

type Props = {
  project: Project;
};

const PROJECT_NAME = "cm";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project = await findProject((project) => project.name === PROJECT_NAME);

  return {
    props: {
      project,
    },
  };
};

const ProjectId: NextPage<Props> = ({ project }) => {
  return (
    <Layout>
      <Hero project={project} />
    </Layout>
  );
};

export default ProjectId;
