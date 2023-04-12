import assert from "assert";

import { activeListMock } from "/mocks/activeList.mock";
import { getIngredientsByDepartment } from "./get-ingredients-by-department";
import { Departments } from "/enums/departments.enum";
import { Ingredients } from "/enums/ingredients.enum";
import { Metrics } from "/enums/metrics.enum";

describe("getIngredientsByDepartment", () => {
  it("should have the right amounts of the ingredients by department", function () {
    const SERVING_SIZE_DIVIDER_1 = 3;
    const SERVING_SIZE_DIVIDER_2 = 0.5;

    const EXTRA_CELERY_AMOUNT = 4;

    const result = getIngredientsByDepartment(activeListMock);

    assert.deepEqual(result[Departments.FRESH_VEGETABLES_AND_FRUITS], [
      {
        name: Ingredients.CELERY,
        amount: 2 / SERVING_SIZE_DIVIDER_1 + EXTRA_CELERY_AMOUNT,
        metric: Metrics.STALK,
        departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
      },
      {
        name: Ingredients.CARROTS,
        amount: 2 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.STALK,
        departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
      },
      {
        name: Ingredients.ONION_WHITE,
        amount: 2 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.AMOUNT,
        departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
      },
      {
        name: Ingredients.TOMATOES_CHERRY,
        amount: 10 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.PIECES,
        departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
      },
      {
        name: Ingredients.ARUGOLA,
        amount: 30 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.GRAM,
        departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
      },
      {
        name: Ingredients.AVOCADO,
        amount: 1 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.AMOUNT,
        departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
      },
      {
        name: Ingredients.LEMONS,
        amount: 1 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.TABLESPOON,
        departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
      },
    ]);

    assert.deepEqual(result[Departments.MEAT_FISH_AND_ALTERNATIVES], [
      {
        name: Ingredients.GROUND_BEEF,
        amount: 300 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.GRAM,
        departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
      },
      {
        name: Ingredients.GROUND_PIG,
        amount: 300 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.GRAM,
        departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
      },

      {
        name: Ingredients.SMOKED_BACON,
        amount: 200 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.GRAM,
        departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
      },
    ]);

    assert.deepEqual(result[Departments.CANNED_FOOD], [
      {
        name: Ingredients.TOMATO_PUREE,
        amount: 140 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.GRAM,
        departments: [Departments.CANNED_FOOD],
      },
      {
        name: Ingredients.PASSATA,
        amount: 500 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.MILLILITER,
        departments: [Departments.CANNED_FOOD],
      },
    ]);

    assert.deepEqual(result[Departments.OTHER], [
      {
        name: Ingredients.BAY_LEAF,
        amount: 2 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.AMOUNT,
        departments: [Departments.OTHER],
      },
      {
        name: Ingredients.OLIVE_OIL,
        amount: 4 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.TABLESPOON,
        departments: [Departments.OTHER],
      },
      {
        name: Ingredients.RED_WINE_VINIGAR,
        amount: 2 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.TABLESPOON,
        departments: [Departments.OTHER],
      },
    ]);

    assert.deepEqual(result[Departments.BEER_WINE_LIQUOR], [
      {
        name: Ingredients.RED_WINE,
        amount: 150 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.MILLILITER,
        departments: [Departments.BEER_WINE_LIQUOR],
        optional: true,
      },
    ]);

    assert.deepEqual(result[Departments.DAIRY_AND_EGGS], [
      {
        name: Ingredients.MILK,
        amount: 80 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.MILLILITER,
        departments: [Departments.DAIRY_AND_EGGS],
        optional: true,
      },
      {
        name: Ingredients.EGGS,
        amount: 2 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.PIECES,
        departments: [Departments.DAIRY_AND_EGGS],
      },
    ]);

    assert.deepEqual(result[Departments.PASTA_SAUCE], [
      {
        name: Ingredients.PASTA_TAGLIATELLE,
        amount: 600 / SERVING_SIZE_DIVIDER_1,
        metric: Metrics.GRAM,
        departments: [Departments.PASTA_SAUCE],
      },
    ]);

    assert.deepEqual(result[Departments.GRAINS_BEANS_RICE], [
      {
        name: Ingredients.QUINOA,
        amount: 160 / SERVING_SIZE_DIVIDER_2,
        metric: Metrics.GRAM,
        departments: [Departments.GRAINS_BEANS_RICE],
      },
    ]);
  });
});
