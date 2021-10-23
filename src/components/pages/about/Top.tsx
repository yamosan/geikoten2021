import { VFC } from "react";

import { Div100vh, Image } from "@/components/basics";
import { ScrollDown } from "@/components/ui";
// import useMedia from "@/hooks/useMediaQuery";

export const Top: VFC = () => {
  // const isWide = useMedia("(min-width: 768px)");

  // TODO: 写真
  return (
    <div className="relative">
      <Div100vh className="relative">
        <Image src="/images/about/thumbnail.png" alt="背景" layout="fill" objectFit="cover" priority />
        <div className="md:pl-shead h-full relative">
          <div className="w-full h-full flex justify-center items-center max-w-full">
            <div className="h-4/5 w-max relative">
              {/* TODO:画像を重ねて配置 */}
              {/* <Image src="/images/about/thumbnail.png" alt="背景" layout="fill" objectFit="cover" priority /> */}
            </div>
            <ScrollDown className="z-10 absolute bottom-0" />
          </div>
        </div>
      </Div100vh>
    </div>
  );
};
