import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import clsx from "clsx";
import { useState, VFC } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "@/components/basics";
import { SponsorDialog } from "@/components/ui";
import { RoundedArrow } from "@/components/vectors";
import { IMAGE_DIMENSIONS_BY_RANK } from "@/constants/sponsor";
import type { Sponsor } from "@/models/Sponsor";

type Props = {
  sponsors: Sponsor[];
  className?: string;
  navigationPosition?: "rl" | "bottom";
};

export const SponsorsCarousel: VFC<Props> = ({ sponsors, className, navigationPosition }) => {
  const [current, setCurrent] = useState<Sponsor | null>(null);
  return (
    <>
      <SponsorDialog open={current !== null} onClose={() => setCurrent(null)} sponsor={current} />

      <div className={clsx("relative w-full px-6 bg-white py-14 rounded-2xl", className)}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation, A11y]}
          slidesPerView={3}
          loop
          loopFillGroupWithBlank
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loopAdditionalSlides={10} // TODO: 逆順で回した時にずれる(https://stackoverflow.com/questions/24528157/centeredslides-and-loop-with-swiper-js)
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {sponsors.map((sponsor) => (
            <SwiperSlide key={sponsor.id}>
              <button
                key={sponsor.id}
                onClick={() => setCurrent(sponsor)}
                className={clsx(
                  "slide-content",
                  "block w-full h-full transition-all duration-300 opacity-100 md:hover:opacity-80"
                )}
              >
                <Image
                  src={sponsor.images.thumbnailUrl}
                  alt={sponsor.name}
                  layout="responsive"
                  {...IMAGE_DIMENSIONS_BY_RANK["gold"]}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {navigationPosition === "rl" && (
          <div className="absolute left-0 z-10 flex items-center justify-between w-full h-0 transform -translate-y-1/2 top-1/2">
            <button
              className={clsx("prev", "transform -translate-x-1/2 duration-300 md:hover:scale-110")}
              id="previousButton"
            >
              <RoundedArrow direction="left" />
            </button>
            <button className={clsx("next", "transform translate-x-1/2 duration-300 hover:scale-110")} id="nextButton">
              <RoundedArrow direction="right" />
            </button>
          </div>
        )}
        {navigationPosition === "bottom" && (
          <div className="absolute bottom-0 z-10 flex items-center justify-between w-1/2 h-0 transform -translate-x-1/2 translate-y-1/2 left-1/2">
            <button
              className={clsx("prev", "transform -translate-x-1/2 duration-300 hover:scale-110")}
              id="previousButton"
            >
              <RoundedArrow direction="left" />
            </button>
            <button className={clsx("next", "transform translate-x-1/2 duration-300 hover:scale-110")} id="nextButton">
              <RoundedArrow direction="right" />
            </button>
          </div>
        )}
      </div>

      {/* Swiperのデフォルトスタイルを上書き。クラス直接だと元々のスタイルとバッティングするので子に対して指定 */}
      <style jsx global>{`
        .swiper {
          @apply static;
        }

        .swiper-slide > .slide-content {
          @apply transform duration-300 scale-75;
        }
        .swiper-slide-prev > .slide-content {
          @apply right-0 origin-right;
        }
        .swiper-slide-next > .slide-content {
          @apply right-0 origin-left;
        }
        .swiper-slide-active > .slide-content {
          @apply transform scale-100;
        }

        .swiper-pagination {
          @apply absolute bottom-4;
        }
        .swiper-pagination-bullet {
          @apply w-2 h-2 bg-gray opacity-100;
        }
        .swiper-pagination-bullet-active {
          @apply w-2 h-2 bg-green-10;
        }
      `}</style>
    </>
  );
};

SponsorsCarousel.defaultProps = {
  navigationPosition: "rl",
};
