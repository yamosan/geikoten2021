import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Back } from "@/components/pages/project/Back";
import { RoomSelection } from "@/components/pages/project/exhibition";
import { Hero } from "@/components/pages/project/Hero";
import { PageSeo } from "@/components/PageSeo";
import { Project, Room } from "@/models";
import { findProject } from "@/utils/getProjects";
import { getRooms } from "@/utils/getRooms";

type Props = {
  project: Project;
  rooms: Room[];
};

const PROJECT_NAME = "exhibition";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project = await findProject((project) => project.name === PROJECT_NAME);
  const rooms = await getRooms();

  return {
    props: {
      project,
      rooms,
    },
  };
};

const Exhibition: NextPage<Props> = ({ project, rooms }) => {
  return (
    <>
      <Layout>
        <Hero project={project} />
        <RoomSelection rooms={rooms} />
        <Back />
      </Layout>

      <PageSeo path="/project/exhibition" subtitle={project.title} />
    </>
  );
};

export default Exhibition;
