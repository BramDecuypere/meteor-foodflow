export interface GlobalContext {
  sidebar: {
    isOpen: boolean;
    setIsSidebarOpen?: (open: boolean) => void;
  };
  setState?: any;
}
