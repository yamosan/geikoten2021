import clsx from "clsx";
import Link from "next/link";
import React, { useState, VFC } from "react";

import { HamburgerMenu, SiteLogo } from "@/components/basics";
import useBackfaceFixed from "@/hooks/useBackfaceFixed";
import useOnScrolling from "@/hooks/useOnScrolling";

// import GlobalNavModal from "./GlobalNavModal";

export const Header: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((state) => !state);
  };
  useBackfaceFixed(isOpen);
  const isScrolled = useOnScrolling();
  const transition = clsx("transform transition duration-500 ease-in-out");

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-4 bg-transparent">
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
              "fixed inset-0 bg-primary"
            )}
          >
            {/* <GlobalNavModal onLinkClick={toggleOpen} isOpen={isOpen} /> */}
          </div>

          <HamburgerMenu
            transition={transition}
            isOpen={isOpen}
            onClick={toggleOpen}
            color={isScrolled ? "black" : "white"}
          />
        </nav>
      </header>
    </>
  );
};
