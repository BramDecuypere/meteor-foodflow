import React, { useState } from "react";
import { GlobalContext } from "/interfaces/global-context";

const initialGlobalState = {
  recipes: {
    selected: [],
  },
};

const Global = React.createContext<GlobalContext>(initialGlobalState);

function useGlobal() {
  const [state, setState] = useState(initialGlobalState);

  return {
    ...state,
    setState,
  };
}

export function GlobalProvider({ children }: any) {
  const global = useGlobal();

  return <Global.Provider value={global}>{children}</Global.Provider>;
}

export default function GlobalConsumer() {
  return React.useContext(Global);
}
