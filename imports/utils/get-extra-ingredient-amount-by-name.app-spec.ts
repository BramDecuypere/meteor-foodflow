import assert from "assert";
import { getExtraIngredientAmountByName } from "./get-extra-ingredient-amount-by-name";
import { activeListMock } from "../../mocks/activeList.mock";
import { Ingredients } from "/enums/ingredients.enum";
import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  describe("get amount of extra ingredients by name", () => {
    it("should return the amount of ingredient by name from the extra ingredients slot", () => {
      const NAME = Ingredients.CELERY;
      const result = getExtraIngredientAmountByName(activeListMock, NAME);

      assert.equal(result, 4);
    });

    it("should return 0 if ingredient is not found", () => {
      const NAME = Ingredients.APPLE;
      const result = getExtraIngredientAmountByName(activeListMock, NAME);

      assert.equal(result, 0);
    });
  });
}
