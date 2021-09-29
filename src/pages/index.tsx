import type { NextPage } from "next";
import Div100vh from "react-div-100vh";

import Image from "@/components/basics/Image";
import { HEADER_HEIGHT } from "@/components/layouts/constants";
import { Layout } from "@/components/layouts/Layout";
import { ScrollDown } from "@/components/ScrollDown";
import { VisitorCounter } from "@/components/VisitorCounter";
import useMedia from "@/hooks/useMediaQuery";

const Root: NextPage = () => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得

  return (
    <Layout>
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
    </Layout>
  );
};

export default Root;
