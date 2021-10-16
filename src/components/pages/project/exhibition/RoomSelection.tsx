import Link from "next/link";
import type { VFC } from "react";

import { Room } from "@/models";

type Props = {
  rooms: Room[];
};

export const RoomSelection: VFC<Props> = ({ rooms }) => {
  return (
    <main className="bg-white md:pl-shead ">
      <div className="flex space-x-4 justify-center py-24">
        {rooms.map(({ id, title, href }) => (
          <div key={id}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
