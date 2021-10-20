import Link from "next/link";
import type { VFC } from "react";

import { Arrow } from "@/components/vectors";
import { THEMES } from "@/constants/exhibition";
import useMedia from "@/hooks/useMediaQuery";
import { Theme } from "@/models";

const getThemeTitle = (id: Theme) => {
  return THEMES.find((theme) => theme.id === id).title;
};

const getPagination = (currentTheme: Theme) => {
  const currentIndex = THEMES.findIndex((theme) => theme.id === currentTheme);
  const length = THEMES.length;
  const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : length - 1;
  const nextIndex = currentIndex + 1 < length ? currentIndex + 1 : 0;
  return { prev: THEMES[prevIndex], next: THEMES[nextIndex] };
};

type Props = {
  currentTheme: Theme;
};

export const Footer: VFC<Props> = ({ currentTheme }) => {
  const { prev, next } = getPagination(currentTheme);
  const isWide = useMedia("(min-width: 768px)");

  return (
    <>
      {isWide ? (
        <div className="w-full md:pl-shead h-[165px] md:h-[245px]">
          <div className="h-full flex items-center justify-between max-w-[810px] mx-auto px-4">
            <Prev href={prev.href} text={getThemeTitle(prev.id)} />
            <Link href="/project/exhibition">
              <a className="text-text border-b border-brown">部屋選択に戻る</a>
            </Link>
            <Next href={next.href} text={getThemeTitle(next.id)} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-6 justify-center items-center w-full md:pl-shead h-[196px]">
          <div className="flex justify-center">
            <Link href="/project/exhibition">
              <a className="text-text border-b border-brown">部屋選択に戻る</a>
            </Link>
          </div>
          <div className="flex items-center justify-between w-full mx-auto px-4">
            <Prev href={prev.href} text={getThemeTitle(prev.id)} />
            <Next href={next.href} text={getThemeTitle(next.id)} />
          </div>
        </div>
      )}
    </>
  );
};

const Prev: VFC<{ href: string; text: string }> = ({ href, text }) => (
  <Link href={href}>
    <a>
      <div className="flex items-center space-x-1">
        <Arrow round direction="left" stroke="black" className="w-[15px] mt-1.5" />
        <div className="text-text border-b border-brown">{text}</div>
      </div>
    </a>
  </Link>
);

const Next: VFC<{ href: string; text: string }> = ({ href, text }) => (
  <Link href={href}>
    <a>
      <div className="flex items-center space-x-1">
        <div className="text-text border-b border-brown">{text}</div>
        <Arrow round direction="right" stroke="black" className="w-[15px] mt-1.5" />
      </div>
    </a>
  </Link>
);
