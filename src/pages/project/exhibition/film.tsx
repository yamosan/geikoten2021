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

const THEME: Work["theme"] = "film";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const works = await getWorks({ theme: THEME });

  return {
    props: {
      theme: THEME,
      works,
    },
  };
};

const Film: NextPage<Props> = ({ theme, works }) => {
  return (
    <Layout>
      <Hero themeColor="film" subHeading="THEME2" heading="フィルムの部屋" thumbnailUrl="/images/shutter_main.png">
        <p>懐かしいあの頃は、君にとってどんな存在なのだろうか。</p>
        <p>あの日あの頃を、君はどう過ごしてきたのだろうだろうか。作者の過去を垣間見れる、そんな世界。</p>
      </Hero>
      <Main works={works} themeColor={theme} />
      <Footer currentTheme={theme} />
    </Layout>
  );
};

export default Film;
