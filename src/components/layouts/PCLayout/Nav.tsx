import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import type { VFC } from "react";

import { NAV_LINKS } from "../constants";

export const Nav: VFC = () => {
  const router = useRouter();

  return (
    <ul className="pl-8 flex flex-col space-y-6">
      {NAV_LINKS.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>
            <a style={{ display: "block" }}>
              <div className="flex flex-col items-start py-3">
                <div
                  className={clsx("w-full border-r-8 border-solid border-transparent transform duration-300 group", {
                    "border-green-10": item.activePatterns.includes(router.asPath),
                  })}
                >
                  <p className="text-white leading-none text-2xl font-genuine transform duration-300 group-hover:scale-90">
                    {item.text}
                  </p>
                  <p className="text-white leading-none text-xxs font-genuine mt-1 transform duration-300 group-hover:scale-90">
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
