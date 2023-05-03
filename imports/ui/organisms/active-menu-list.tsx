import { Meteor } from "meteor/meteor";
import React from "react";
import ActiveListHook from "../hooks/active-list.hook";
import RecipeList from "../molecules/recipe-list";
import RecipeListItem from "../molecules/recipe-list-item";
import { Recipe } from "/imports/api/recipes/recipes";

const ActiveMenuList = () => {
  const { recipes, loading } = ActiveListHook();

  const handleServingsChange = (recipe: Recipe, servings: number) => {
    Meteor.call("users.activeList.changeServings", recipe, servings);
  };

  const handleOnRemoveClick = (recipe: Recipe) => {
    Meteor.call("users.activeList.removeRecipe", recipe);
  };

  if (loading) {
    return null;
  }

  return (
    <RecipeList>
      {recipes.length > 0 ? (
        recipes.map(({ servings, recipe }, idx) => (
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
        ))
      ) : (
        <div className="flex justify-center">
          <div className="max-w-2xl">No recipes added...</div>
        </div>
      )}
    </RecipeList>
  );
};

export default ActiveMenuList;
