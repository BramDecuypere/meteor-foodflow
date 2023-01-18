import React, { useState } from "react";
import { GlobalContext } from "/interfaces/global-context";

const initialGlobalState: GlobalContext = {
  recipes: {
    selected: [],
  },
  sidebar: {
    isOpen: false,
    setIsOpen: (bool: boolean) => {},
  },
};

const Global = React.createContext<GlobalContext>(initialGlobalState);

function useGlobal() {
  const [state, setState] = useState(initialGlobalState);

  const setIsOpen = (isOpen: boolean) => {
    setState({
      ...state,
      sidebar: {
        ...state.sidebar,
        isOpen,
      },
    });
  };

  const context = {
    ...state,
    sidebar: {
      ...state.sidebar,
      setIsOpen,
    },
    setState,
  } as GlobalContext;

  return context;
}

export function GlobalProvider({ children }: any) {
  const global = useGlobal();

  return <Global.Provider value={global}>{children}</Global.Provider>;
}

export default function GlobalConsumer() {
  return React.useContext(Global);
}
