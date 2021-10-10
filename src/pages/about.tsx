import type { NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Top } from "@/components/pages/about";

const Root: NextPage = () => {
  return (
    <Layout>
      <Top />

      <div className="bg-white"></div>
    </Layout>
  );
};

export default Root;
