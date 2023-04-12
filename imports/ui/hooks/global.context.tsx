import React, { useState } from "react";
import { GlobalContext } from "/interfaces/global-context";

const initialGlobalState: GlobalContext = {
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

  console.log("nextState", context);

  return context;
}

export function GlobalProvider({ children }: any) {
  const global = useGlobal();

  return <Global.Provider value={global}>{children}</Global.Provider>;
}

export default function GlobalConsumer() {
  return React.useContext(Global);
}
