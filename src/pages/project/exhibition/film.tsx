import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Footer } from "@/components/pages/project/exhibition";
import { Work } from "@/models";
import { getWorks } from "@/utils/getWorks";

type Props = {
  theme: Work["theme"]
  works: Work[];
};

const THEME: Work["theme"] = "フィルムの部屋";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const works = await getWorks({ theme: THEME });

  return {
    props: {
      theme: THEME,
      works,
    },
  };
};

const Film: NextPage<Props> = ({ theme }) => {
  return (
    <Layout>
      <Footer currentTheme={theme} />
    </Layout>
  );
};

export default Film;
