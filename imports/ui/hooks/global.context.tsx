import React, { useState } from "react";
import { GlobalContext } from "/interfaces/global-context";

const initialGlobalState: GlobalContext = {
  recipes: {
    selected: [],
  },
  sidebar: {
    isOpen: false,
  },
};

const Global = React.createContext<GlobalContext>(initialGlobalState);

function useGlobal() {
  const [state, setState] = useState(initialGlobalState);

  const setIsSidebarOpen = (isOpen: boolean) => {
    setState({
      ...state,
      sidebar: {
        ...state.sidebar,
        isOpen,
      },
    });
  };

  const context: GlobalContext = {
    ...state,
    sidebar: {
      ...state.sidebar,
      setIsSidebarOpen,
    },
    setState,
  };

  return context;
}

export function GlobalProvider({ children }: any) {
  const global = useGlobal();

  return <Global.Provider value={global}>{children}</Global.Provider>;
}

export default function GlobalConsumer() {
  return React.useContext(Global);
}
