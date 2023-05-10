import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import RecipeListItem from "../molecules/recipe-list-item";
import UserRecipes from "../hooks/user-recipes.hook";
import ActiveList from "../hooks/active-list.hook";
import RecipeList from "../molecules/recipe-list";
import UserDefaultServings from "../hooks/user-default-servings.hook";
import { Labels } from "/enums/labels.enum";

const Recipes = () => {
  const [activeLabels, setActiveLabels] = useState([]);
  const userRecipes = UserRecipes({ labels: activeLabels });
  const { recipes, loading } = ActiveList();
  const userServings = UserDefaultServings();

  const activeListIds = recipes.map(({ recipe }) => recipe._id.valueOf());

  // This is setting default recipes if there are no recipes found
  Meteor.call("users.defaultRecipes");

  const getRecipes = () => {
    return userRecipes.map((recipe, idx) => {
      const recipeId = recipe._id;
      const activeRecipe = recipes.find(
        ({ recipe }) => recipe._id.valueOf() === recipeId.valueOf()
      );

      const onAddToListClick = (servings: number) => {
        if (activeRecipe) {
          Meteor.call("users.activeList.removeRecipe", recipe);
        } else {
          Meteor.call("users.activeList.addRecipe", recipe, servings);
        }
      };

      return (
        <li key={idx}>
          <RecipeListItem
            className="my-1 md:my-3"
            recipe={recipe}
            selected={activeListIds.indexOf(recipe._id.valueOf()) > -1}
            servings={activeRecipe ? activeRecipe.servings : userServings}
            selectable
            onAddToListClick={onAddToListClick}
          />
        </li>
      );
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="py-4">
        <RecipeList>
          {!loading
            ? getRecipes()
            : [...Array(10)].map(() => <RecipeListItem loading={loading} />)}
        </RecipeList>
      </div>
    </div>
  );
};

export default Recipes;
