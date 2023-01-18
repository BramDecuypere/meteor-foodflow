interface SelectedRecipe {
  _id: string;
  servings: number;
}

export interface GlobalContext {
  recipes: {
    selected: SelectedRecipe[];
  };
  setState?: any;
}
