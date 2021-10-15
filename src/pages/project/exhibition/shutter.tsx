import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Footer, Main } from "@/components/pages/project/exhibition";
import { Work } from "@/models";
import { getWorks } from "@/utils/getWorks";

type Props = {
  theme: Work["theme"];
  works: Work[];
};

const THEME: Work["theme"] = "シャッターの部屋";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const works = await getWorks({ theme: THEME });

  return {
    props: {
      theme: THEME,
      works,
    },
  };
};

const Shutter: NextPage<Props> = ({ theme, works }) => {
  return (
    <Layout>
      {/* TODO: Hero */}
      <Main works={works} theme={THEME} />
      <Footer currentTheme={theme} />
    </Layout>
  );
};

export default Shutter;
