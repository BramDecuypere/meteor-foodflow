import { RecipeIngredient } from "/imports/api/recipes/recipes";

export interface IngredientsByDepartment {
  [key: string]: RecipeIngredient[];
}
