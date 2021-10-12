import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { VFC } from "react";

import { useActiveId } from "@/hooks/useActiveId";
import { pathMatches } from "@/utils/pathMatchs";

import { NAV_LINKS } from "../constants";

export const GlobalNav: VFC = () => {
  const router = useRouter();
  const isRoot = router.pathname === "/";
  const activeId = useActiveId(NAV_LINKS.map((item) => item.id));

  return (
    <ul className="flex flex-col pl-8 space-y-6">
      {NAV_LINKS.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>
            <a style={{ display: "block" }}>
              <div className="flex flex-col items-start py-3">
                <div
                  className={clsx("w-full border-r-8 border-solid border-transparent transform duration-300 group", {
                    "border-green-10":
                      (isRoot && item.id === activeId) || (!isRoot && pathMatches(router.asPath, item.activePatterns)),
                  })}
                >
                  <p
                    className="text-2xl text-white duration-300 transform font-genuine group-hover:scale-90"
                    style={{ position: "relative", top: "0.15em" }}
                  >
                    {item.text}
                  </p>
                  <p className="mt-0.5 overflow-visible text-white duration-300 transform text-xxs font-genuine group-hover:scale-90">
                    {item.subText}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
