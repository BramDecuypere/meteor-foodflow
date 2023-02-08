import React from "react";
import cn from "classnames";

import { RecipeIngredient } from "/imports/api/recipes/recipes";

export const getIngredientLabel = (
  { name, amount, metric }: RecipeIngredient,
  selected: boolean
) => {
  let ingredientLabel = name;

  if (amount) {
    ingredientLabel = `${name} - ${metric}`;
  }

  return (
    <span className={cn({ "line-through opacity-40": selected })}>
      {ingredientLabel}
    </span>
  );
};
