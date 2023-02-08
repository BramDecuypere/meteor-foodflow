import { Recipe, RecipeIngredient } from "/imports/api/recipes/recipes";

export interface ActiveList {
  recipes: {
    recipe: Recipe;
    servings: number;
  }[];
  selectedIngredients: RecipeIngredient[];
}
