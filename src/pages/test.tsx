import type { NextPage } from "next";

import { useVotedIds } from "@/store/votedIds";

const Test: NextPage = () => {
  const { votedIds, vote } = useVotedIds();
  console.log(votedIds);

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightGray">
      <button
        className="bg-green-10"
        onClick={() => {
          vote(4);
        }}
      >
        click me!
      </button>
    </div>
  );
};

export default Test;
