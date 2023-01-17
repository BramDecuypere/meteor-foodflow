import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Recipe, RecipesCollection } from "/imports/api/recipes/recipes";
import RecipeListItem from "../molecules/recipe-list-item";

const RecipesList = () => {
  const { recipes } = useTracker(() => {
    const noDataAvailable = { recipes: [] };

    if (!Meteor.user()) {
      return noDataAvailable;
    }

    const handler = Meteor.subscribe("recipes");

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const recipes = RecipesCollection.find().fetch();

    return { recipes };
  });

  const onRecipeListItemClick = (recipe: Recipe) => {
    console.log(
      "🚀 ~ file: recipes-list.tsx:27 ~ onRecipeListItemClick ~ recipe",
      recipe
    );
  };

  return (
    <>
      <div className="mx-auto max-w-4xl pt-6 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Recipes</h1>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <ul>
            {recipes.map((recipe, idx) => (
              <RecipeListItem
                onClick={() => onRecipeListItemClick(recipe)}
                key={idx}
                className="my-1 md:my-3 rounded-md"
                recipe={recipe}
                // selected={
                //   selectedRecipes.findIndex(
                //     (selectedRecipe) =>
                //       selectedRecipe && recipe.id === selectedRecipe.id
                //   ) > -1
                // }
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipesList;
