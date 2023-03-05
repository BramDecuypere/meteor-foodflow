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
  const onAddIngredientAmount = (ingredient: RecipeIngredient) => {
    Meteor.call("users.activeList.addIngredient", ingredient);
  };

  const onDecreaseIngredientAmount = (ingredient: RecipeIngredient) => {
    Meteor.call("users.activeList.removeIngredient", ingredient);
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
                Meteor.call("users.activeList.completeIngredients", ingredient);
              }}
              isSelected={selected}
            >
              {getIngredientLabel(ingredient, selected)}
            </CheckboxLabel>

            {amount && (
              <AmountModifier
                amount={amount || 0}
                onAdd={() => onAddIngredientAmount(ingredient)}
                onRemove={() => onDecreaseIngredientAmount(ingredient)}
                disabled={selected}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
