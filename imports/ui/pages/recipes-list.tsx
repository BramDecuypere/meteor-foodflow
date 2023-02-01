import React from "react";
import { Meteor } from "meteor/meteor";
import RecipeListItem from "../molecules/recipe-list-item";
import UserRecipes from "../hooks/user-recipes.hook";
import ActiveList from "../hooks/active-list.hook";

const RecipesList = () => {
  const userRecipes = UserRecipes();
  const activeList = ActiveList();

  const activeListIds = activeList.recipes.map(({ recipe }) =>
    recipe._id.valueOf()
  );

  // This is setting default recipes if there are no recipes found
  Meteor.call("users.defaultRecipes");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="py-4">
        <ul className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {userRecipes.map((recipe, idx) => (
            <li key={idx}>
              <RecipeListItem
                className="my-1 md:my-3"
                recipe={recipe}
                selected={activeListIds.indexOf(recipe._id.valueOf()) > -1}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipesList;
