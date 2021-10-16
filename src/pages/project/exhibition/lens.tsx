import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Footer, Main } from "@/components/pages/project/exhibition";
import { Hero } from "@/components/pages/project/exhibition/Hero";
import { Work } from "@/models";
import { getWorks } from "@/utils/getWorks";

type Props = {
  theme: Work["theme"];
  works: Work[];
};

const THEME: Work["theme"] = "レンズの部屋";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const works = await getWorks({ theme: THEME });

  return {
    props: {
      theme: THEME,
      works,
    },
  };
};

const Lens: NextPage<Props> = ({ theme, works }) => {
  return (
    <Layout>
      <Hero themeColor="lens" subHeading="THEME3" heading={THEME} thumbnailUrl="/images/shutter_main.png">
        <p>「君が思うままに世界や状況を変えられるレンズ」があったとしよう。</p>
        <p>
          君はそのレンズを何にかざし、どんな「もしも...」の世界を思い描くのか。作者の思い思いの視点で欲望のままに描かれる世界。
        </p>
      </Hero>
      <Main works={works} themeColor="lens" />
      <Footer currentTheme={theme} />
    </Layout>
  );
};

export default Lens;
