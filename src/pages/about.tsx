import type { NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Main, Top } from "@/components/pages/about";

const Root: NextPage = () => {
  return (
    <Layout>
      <Top />

      <div className="bg-white">
        <Main />
      </div>
    </Layout>
  );
};

export default Root;
