import clsx from "clsx";
import { useEffect, useState, VFC } from "react";

import { Div100vh, Image } from "@/components/basics";
import { ScrollDown, SponsorsCarousel, VisitorCounter } from "@/components/ui";
import useMedia from "@/hooks/useMediaQuery";
import { Sponsor } from "@/models/Sponsor";
import { useVisitorCount } from "@/store/vistorCount";

type Props = {
  goldSponsors: Sponsor[];
};

export const Top: VFC<Props> = ({ goldSponsors }) => {
  const isWide = useMedia("(min-width: 768px)");
  const { count } = useVisitorCount();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <div className="relative" id="top">
        <Div100vh className="relative">
          <Image src="/images/top/bg.jpg" alt="背景" layout="fill" objectFit="cover" priority />

          <div
            className={clsx(
              "main-visual",
              "transition duration-400 delay-[2000] absolute inset-0 md:ml-shead h-full z-10 max-w-full overflow-hidden",
              {
                "opacity-100": ready,
                "opacity-0": !ready,
              }
            )}
          >
            <div className="h-full flex items-center justify-center">
              <div className="relative h-full flex items-center transform transition scale-150 sm:scale-100">
                <Image
                  src="/images/top/main_visual.png"
                  alt="メインビジュアル"
                  width={996}
                  height={614}
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-full pt-thead md:pt-14">
            {/* アクセスカウンタ */}
            {isWide ? (
              <div className="flex justify-end pr-4">
                <VisitorCounter count={count} size="lg" />
              </div>
            ) : (
              <div className="flex justify-start pl-4">
                <VisitorCounter count={count} size="sm" />
              </div>
            )}
          </div>
        </Div100vh>

        {isWide ? (
          <div className="flex flex-col items-center w-full mb-24 -mt-24 pl-shead">
            <ScrollDown className="z-10" />
            <SponsorsCarousel sponsors={goldSponsors} className="w-4/5" navigationPosition="rl" />
          </div>
        ) : (
          <div className="relative flex flex-col items-center pb-8 mb-24 -mt-24 overflow-x-hidden md:overflow-x-auto">
            <ScrollDown className="z-10" />
            <SponsorsCarousel sponsors={goldSponsors} className="w-[150%]" navigationPosition="bottom" />
          </div>
        )}
      </div>

      <style jsx>{`
        .main-visual {
          animation: float 3s linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          33.33333% {
            transform: translateY(-10px);
          }
          66.66667%,
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};
