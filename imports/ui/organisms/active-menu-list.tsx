import { Meteor } from "meteor/meteor";
import React from "react";
import ActiveListHook from "../hooks/active-list.hook";
import RecipeList from "../molecules/recipe-list";
import RecipeListItem from "../molecules/recipe-list-item";
import { Recipe } from "/imports/api/recipes/recipes";

const ActiveMenuList = () => {
  const { recipes } = ActiveListHook();

  const handleServingsChange = (recipe: Recipe, servings: number) => {
    Meteor.call("users.changeServingsActiveList", recipe, servings);
  };

  const handleOnRemoveClick = (recipe: Recipe) => {
    Meteor.call("users.removeRecipeToActiveList", recipe);
  };

  return (
    <RecipeList>
      {recipes.map(({ servings, recipe }, idx) => (
        <RecipeListItem
          key={idx}
          servings={servings}
          recipe={recipe}
          onIncreaseServingsClick={() =>
            handleServingsChange(recipe, servings + 1)
          }
          onDecreaseServingsClick={() =>
            handleServingsChange(recipe, servings - 1)
          }
          onRemoveClick={handleOnRemoveClick}
        />
      ))}
    </RecipeList>
  );
};

export default ActiveMenuList;
