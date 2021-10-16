import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Footer, Main } from "@/components/pages/project/exhibition";
import { Hero } from "@/components/pages/project/exhibition/Hero";
import { Room, Theme, Work } from "@/models";
import { getRoomByTheme, getRooms } from "@/utils/getRooms";
import { getWorks } from "@/utils/getWorks";

type Props = {
  room: Room;
  works: Work[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const rooms = await getRooms();
  const paths = rooms.map((item) => ({
    params: { theme: item.theme },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const theme = params?.theme as Theme;
  const room = await getRoomByTheme(theme);
  const works = await getWorks({ theme: theme });

  return {
    props: {
      room,
      works,
    },
  };
};

const Film: NextPage<Props> = ({ room, works }) => {
  return (
    <Layout>
      <Hero
        themeColor={room.theme}
        subHeading={`THEME${room.id}`}
        heading={room.title}
        thumbnailUrl={room.thumbnailUrl} // TODO:
        description={room.description}
      />

      <Main works={works} themeColor={room.theme} />
      <Footer currentTheme={room.theme} />
    </Layout>
  );
};

export default Film;
