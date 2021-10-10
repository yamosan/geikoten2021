import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";

type Props = {};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const items = await getDepartments();
//   const paths = items.map((item) => ({
//     params: { name: item.name },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const id = params?.id;
//   return {
//     props: {},
//   };
// };

const ProjectId: NextPage<Props> = () => {
  return <Layout></Layout>;
};

export default ProjectId;
