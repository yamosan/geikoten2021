import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Project } from "@/models";
import { findProject, getProjects } from "@/utils/getProjects";

type Props = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects();
  const paths = projects
    .filter((project) => !project.siteUrl.external)
    .map((project) => ({
      params: { name: project.name },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const name = params?.name as string;
  const project = await findProject((project) => project.name === name);

  return {
    props: {
      project,
    },
  };
};

const ProjectId: NextPage<Props> = ({ project }) => {
  return <Layout>{JSON.stringify(project)}</Layout>;
};

export default ProjectId;
