interface SelectedRecipe {
  _id: string;
  servings: number;
}

export interface GlobalContext {
  sidebar: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
  };
  recipes: {
    selected: SelectedRecipe[];
  };
  setState?: any;
}
