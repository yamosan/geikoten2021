import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

import { incrementVoteCount } from "@/libs/firebase";
import { Work } from "@/models/Exhibition";

type TWorkId = Work["id"];

type TState = TWorkId[];

type TVotedIdsContext = {
  votedIds: TState;
  vote: (targetId: TWorkId) => void;
};

const VotedIdsContext = createContext<TVotedIdsContext>({} as TVotedIdsContext);

const KEY = "geikoten2021:voted-works";

// Hooks
export const useVotedIds = () => useContext(VotedIdsContext);

// Provider
const VotedIdsProvider: React.FC = ({ children }) => {
  const [votedIds, setVotedIds] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const initialValue = JSON.parse(saved) || [];
    setVotedIds(initialValue);
  }, []);

  const vote = useCallback((targetId: TWorkId) => {
    setVotedIds((prev) => {
      const exist = prev.includes(targetId);
      if (exist) {
        return prev;
      }
      const newState = [...prev, targetId];
      localStorage.setItem(KEY, JSON.stringify(newState));
      incrementVoteCount(targetId);
      return newState;
    });
  }, []);

  return <VotedIdsContext.Provider value={{ votedIds, vote }}>{children}</VotedIdsContext.Provider>;
};

export default VotedIdsProvider;
