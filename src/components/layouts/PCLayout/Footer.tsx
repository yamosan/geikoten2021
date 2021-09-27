import type { VFC } from "react";

import { ExternalLink } from "@/components/basics/ExternalLink";
import { ExternalLinkIcon } from "@/components/icons";
import { HOMEPAGE_LINK } from "@/constants/urls";

import { SIDE_NAV_WIDTH } from "../constants";

export const Footer: VFC = () => {
  const HomepageLink = () => (
    <ExternalLink href={HOMEPAGE_LINK}>
      <div className="flex mx-1 space-x-0.5">
        <p className="text-sm leading-none underline">名古屋市立大学芸術工学部HP</p>
        <ExternalLinkIcon />
      </div>
    </ExternalLink>
  );

  return (
    <footer className="relative bg-lightBrown" style={{ paddingLeft: SIDE_NAV_WIDTH }}>
      {/* TODO: ページ最上部にスクロールするボタン */}
      <div className="flex items-end justify-between w-full px-4 py-8 text-white lg:px-9">
        <div className="flex flex-col w-full space-y-5">
          <div className="flex items-end space-x-3 lg:space-x-5">
            <p className="text-2xl font-bold leading-none">名古屋市立大学芸術工学部</p>
            <HomepageLink />
          </div>
          <div className="flex items-end justify-between w-full">
            <p className="text-sm">
              〒464-008 名古屋市千種区北千種2丁目1番10号
              <br />
              TEL052-721-1225(代) FAX052-721-3110
            </p>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <small className="text-white">©️ Copyright 2021geikoten</small>
          </div>
        </div>
      </div>
    </footer>
  );
};
