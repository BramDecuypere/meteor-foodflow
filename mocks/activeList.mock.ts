import { ActiveList } from "/interfaces/active-list";
import { recipesMock } from "./recipe.mock";
import { Mongo } from "meteor/mongo";
import { Ingredients } from "/enums/ingredients.enum";
import { Metrics } from "/enums/metrics.enum";
import { Departments } from "/enums/departments.enum";

const recipe1 = { ...recipesMock[0], _id: new Mongo.ObjectID() };
const recipe2 = { ...recipesMock[1], _id: new Mongo.ObjectID() };

export const activeListMock: ActiveList = {
  recipes: [
    { recipe: recipe1, servings: 2 },
    { recipe: recipe2, servings: 4 },
  ],
  extraIngredients: [
    {
      name: Ingredients.CELERY,
      amount: 4,
      metric: Metrics.STALK,
      departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
    },
  ],
  selectedIngredients: [
    {
      name: Ingredients.CELERY,
      amount: 2,
      metric: Metrics.STALK,
      departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
    },
  ],
};
