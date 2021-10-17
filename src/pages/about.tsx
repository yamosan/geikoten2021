import type { NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Main, Top } from "@/components/pages/about";
import { PageSeo } from "@/components/PageSeo";

const Root: NextPage = () => {
  return (
    <>
      <Layout>
        <Top />

        <div className="bg-white">
          <Main />
        </div>
      </Layout>

      <PageSeo path="/about" subtitle="バーチャル会場" />
    </>
  );
};

export default Root;
