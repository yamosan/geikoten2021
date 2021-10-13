import Link from "next/link";
import type { VFC } from "react";

import { Work } from "@/models/Work";

const THEMES: {
  label: Work["theme"];
  href: string;
}[] = [
  { label: "シャッターの部屋", href: "" },
  { label: "フィルムの部屋", href: "" },
  { label: "レンズの部屋", href: "" },
];

export const RoomSelection: VFC = () => {
  return (
    <main className="bg-white md:pl-shead ">
      <div className="flex space-x-4 justify-center py-24">
        {THEMES.map(({ label, href }) => (
          <div key={label}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
