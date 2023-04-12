import assert from "assert";
import { activeListMock } from "/mocks/activeList.mock";
import { Departments } from "/enums/departments.enum";
import { Ingredients } from "/enums/ingredients.enum";
import { Recipe } from "/imports/api/recipes/recipes";

import { getSortedIngredientsByDepartment } from "./get-sorted-ingredients-by-department";

describe("getSortedIngredientsByDepartment", () => {
  it("should return the amount of ingredient by name from the extra ingredients slot", () => {
    const recipes: { recipe: Recipe; servings: number }[] = JSON.parse(
      JSON.stringify(activeListMock.recipes)
    );

    const result = getSortedIngredientsByDepartment(
      {
        ...activeListMock,
        recipes: [{ ...recipes[1], servings: recipes[1].recipe.food.servings }],
      },
      Departments.FRESH_VEGETABLES_AND_FRUITS
    );

    assert.deepEqual(
      result.map((val) => val.name),
      [
        Ingredients.CELERY,
        Ingredients.LEMONS,
        Ingredients.AVOCADO,
        Ingredients.ARUGOLA,
        Ingredients.TOMATOES_CHERRY,
      ]
    );
  });
});
