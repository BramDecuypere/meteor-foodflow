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
  return (
    <ul className="p-4 font-normal">
      {sortedIngredientsByDepartment.map((recipe, idx2) => {
        const { name, amount } = recipe;

        const selected = checkIsIngredientComplete(activeList, name);

        return (
          <li key={idx2} className="flex justify-between pb-4 last:pb-0 w-full">
            <CheckboxLabel
              onClick={() => {
                Meteor.call(
                  "users.toggleSelectedIngredientOnAcctiveList",
                  recipe
                );
              }}
              isSelected={selected}
            >
              {getIngredientLabel(recipe, selected)}
            </CheckboxLabel>

            {amount && (
              <AmountModifier
                amount={amount || 0}
                onAdd={() => {}}
                onRemove={() => {}}
                disabled={selected}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
