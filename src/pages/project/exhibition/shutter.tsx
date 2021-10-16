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

const THEME: Work["theme"] = "shutter";

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
      <Hero themeColor={theme} subHeading={"THEME1"} heading="シャッターの部屋" thumbnailUrl="/images/shutter_main.png">
        <p>君は今、どんな状況で何を思い、何に向けてシャッターを切るのか...</p>
        <p>それぞれの作者の心躍る瞬間、とある物事に対しての想いが感じられる部屋。</p>
      </Hero>
      <Main works={works} themeColor={theme} />
      <Footer currentTheme={theme} />
    </Layout>
  );
};

export default Shutter;
