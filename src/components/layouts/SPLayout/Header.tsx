import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, VFC } from "react";
import React, { useState } from "react";

// import useBackfaceFixed from "@/hooks/useBackfaceFixed";
import useOnScrolling from "@/hooks/useOnScrolling";
import useWindowSize from "@/hooks/useWindowSize";

import { GlobalNavModal } from "./GlobalNavModal";
import { HamburgerMenu } from "./HamburgerMenu";
import { SiteLogo } from "./SiteLogo";

export const Header: VFC<ComponentProps<"header">> = ({ className, ...attrs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((state) => !state);
  };
  // useBackfaceFixed(isOpen); // scroll-behaviorとバッティング
  const { height } = useWindowSize();
  const isScrolled = useOnScrolling(height);
  const transition = clsx("transition duration-500 ease-in-out");

  return (
    <>
      <header
        className={clsx(
          "flex items-center justify-between w-full px-4 bg-transparent h-thead",
          isScrolled && "active",
          transition,
          className
        )}
        {...attrs}
      >
        <div className="z-50">
          <Link href="/">
            <a className="flex items-center">
              <SiteLogo color={isScrolled ? "black" : "white"} className={transition} />
            </a>
          </Link>
        </div>
        <nav className="z-40 flex items-center">
          <div
            className={clsx(
              {
                "opacity-0": !isOpen,
                "pointer-events-none": !isOpen,
              },
              transition,
              "fixed inset-0 h-screen bg-green-10"
            )}
          >
            <GlobalNavModal onLinkClick={toggleOpen} isOpen={isOpen} />
          </div>
          <HamburgerMenu
            transition={transition}
            buttonRole={isOpen ? "close" : "open"}
            onClick={toggleOpen}
            color={isScrolled ? "black" : "white"}
          />
        </nav>
      </header>

      <style jsx>{`
        .active {
          @apply bg-white bg-opacity-80;
          backdrop-filter: blur(1px);
        }
      `}</style>
    </>
  );
};
