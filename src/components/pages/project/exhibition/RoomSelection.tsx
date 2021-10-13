import Link from "next/link";
import type { VFC } from "react";

import { THEMES } from "@/constants/exhibition";

export const RoomSelection: VFC = () => {
  return (
    <main className="bg-white md:pl-shead ">
      <div className="flex space-x-4 justify-center py-24">
        {THEMES.map(({ theme, href }) => (
          <div key={theme}>
            <Link href={href}>
              <a>{theme}</a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
