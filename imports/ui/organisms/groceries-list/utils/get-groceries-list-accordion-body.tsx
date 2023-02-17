import React from "react";
import { Meteor } from "meteor/meteor";

import { RecipeIngredient } from "/imports/api/recipes/recipes";
import AmountModifier from "/imports/ui/atoms/AmountModifier";
import CheckboxLabel from "/imports/ui/atoms/CheckboxLabel";
import { ActiveList } from "/interfaces/active-list";

import { getIngredientLabel } from "./get-ingredient-label";
import { checkIsIngredientComplete } from "./is-ingredient-complete";

export const AccordionBody = ({
  sortedIngredientsByDepartment,
  activeList,
}: {
  sortedIngredientsByDepartment: RecipeIngredient[];
  activeList: ActiveList;
}) => {
  const onAddIngredientAmount = (
    ingredient: RecipeIngredient,
    amount?: number
  ) => {
    Meteor.call("users.addActiveListRecipe", ingredient, amount);
  };

  const onDecreaseIngredientAmount = (
    ingredient: RecipeIngredient,
    amount?: number
  ) => {
    Meteor.call("users.removeActiveListRecipe", ingredient, amount);
  };

  return (
    <ul className="p-4 font-normal">
      {sortedIngredientsByDepartment.map((ingredient, idx2) => {
        const { name, amount } = ingredient;

        const selected = checkIsIngredientComplete(activeList, name, amount);

        return (
          <li key={idx2} className="flex justify-between pb-4 last:pb-0 w-full">
            <CheckboxLabel
              onClick={() => {
                Meteor.call(
                  "users.toggleSelectedIngredientOnAcctiveList",
                  ingredient
                );
              }}
              isSelected={selected}
            >
              {getIngredientLabel(ingredient, selected)}
            </CheckboxLabel>

            {amount && (
              <AmountModifier
                amount={amount || 0}
                onAdd={() => onAddIngredientAmount(ingredient, amount + 1)}
                onRemove={() =>
                  onDecreaseIngredientAmount(
                    ingredient,
                    typeof amount !== "undefined" ? amount - 1 : undefined
                  )
                }
                disabled={selected}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
