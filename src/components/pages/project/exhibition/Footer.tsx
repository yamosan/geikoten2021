import Link from "next/link";
import type { VFC } from "react";

import { Arrow } from "@/components/vectors";
import { THEMES } from "@/constants/exhibition";
import { Work } from "@/models";

const getPagination = (currentTheme: Work["theme"]) => {
  const currentIndex = THEMES.findIndex((theme) => theme.theme === currentTheme);
  const length = THEMES.length;
  const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : length - 1;
  const nextIndex = currentIndex + 1 < length ? currentIndex + 1 : 0;
  return { prev: THEMES[prevIndex], next: THEMES[nextIndex] };
};

type Props = {
  currentTheme: Work["theme"];
};

export const Footer: VFC<Props> = ({ currentTheme }) => {
  const { prev, next } = getPagination(currentTheme);

  return (
    <div className="w-full md:pl-shead h-[165px] md:h-[245px]">
      <div className="h-full flex items-center justify-between max-w-[810px] mx-auto px-4">
        <Link href={prev.href}>
          <a>
            <div className="flex items-center space-x-1">
              <Arrow round direction="left" stroke="black" className="w-[15px] mt-1.5" />
              <div className="text-text border-b border-brown">{prev.theme}</div>
            </div>
          </a>
        </Link>
        <Link href="/#project">
          <a className="text-text border-b border-brown">部屋選択に戻る</a>
        </Link>
        <Link href={next.href}>
          <a>
            <div className="flex items-center space-x-1">
              <div className="text-text border-b border-brown">{next.theme}</div>
              <Arrow round direction="right" stroke="black" className="w-[15px] mt-1.5" />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
