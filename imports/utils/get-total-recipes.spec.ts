import assert from "assert";
import { Mongo } from "meteor/mongo";

import { recipesMock } from "../../mocks/recipe.mock";
import { Recipe } from "../api/recipes/recipes";
import { getRecipesTotal } from "./get-total-recipes";

  describe("get-total-recipes", () => {
    it("should return the total amount of recipe servings", () => {
      const recipe1 = { ...recipesMock[0], _id: new Mongo.ObjectID() };
      const recipe2 = { ...recipesMock[1], _id: new Mongo.ObjectID() };
      const recipe3 = { ...recipesMock[2], _id: new Mongo.ObjectID() };

      const result: Recipe[] = [recipe1, recipe2, recipe3];

      assert.equal(getRecipesTotal(result), 10);
    });
  });
