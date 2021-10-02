import type { NextPage } from "next";
import Div100vh from "react-div-100vh";

import { About } from "@/components/About";
import { Image } from "@/components/basics";
import { Event } from "@/components/Event";
import { HEADER_HEIGHT } from "@/components/layouts/constants";
import { Layout } from "@/components/layouts/Layout";
import { Project } from "@/components/Project";
import { ScrollDown, VisitorCounter } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";

const Root: NextPage = () => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得

  return (
    <Layout>
      <div className="relative">
        <Div100vh className="relative">
          <Image src="/images/top_bg.jpg" alt="背景" layout="fill" objectFit="cover" />

          <div className="relative w-full h-full" style={{ paddingTop: HEADER_HEIGHT }}>
            {/* アクセスカウンタ */}
            {isWide ? (
              <div className="flex justify-end pr-4">
                <VisitorCounter count={1234} size="lg" />
              </div>
            ) : (
              <div className="flex justify-start pl-4">
                <VisitorCounter count={1234} size="sm" />
              </div>
            )}

            {/* スクロールダウン */}
            <div className="absolute bottom-0 transform -translate-x-1/2 left-1/2">
              <ScrollDown />
            </div>
          </div>
        </Div100vh>
        <div className="absolute">{/* TODO: カルーセル */}</div>
      </div>

      <div className="mt-[175px] lg:mt-[285px] flex flex-col space-y-12">
        {/* ABOUT */}
        <About />

        {/* PROJECT */}
        <Project />

        {/* EVENT */}
        <Event />
      </div>
      <div>{/* TODO: 広告 */}</div>
    </Layout>
  );
};

export default Root;
