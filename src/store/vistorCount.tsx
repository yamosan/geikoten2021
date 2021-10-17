import React, { createContext, useContext, useEffect, useState } from "react";

import { incrementAccessCount } from "@/libs/firebase";

type TState = number;

type TVisitorCountContext = {
  count: TState;
};

const VisitorCountContext = createContext<TVisitorCountContext>({} as TVisitorCountContext);

// Hooks
export const useVisitorCount = () => useContext(VisitorCountContext);

// Provider
const VisitorCountProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const initialValue = await incrementAccessCount();
      setCount(initialValue);
    })();
  }, []);

  return <VisitorCountContext.Provider value={{ count }}>{children}</VisitorCountContext.Provider>;
};

export default VisitorCountProvider;
