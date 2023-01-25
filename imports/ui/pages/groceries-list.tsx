import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import {
  RecipeIngredient,
  RecipesCollection,
} from "/imports/api/recipes/recipes";
import GlobalConsumer from "../hooks/global.context";
import { SelectedRecipe } from "/interfaces/global-context";

const GroceriesList = () => {
  const state = GlobalConsumer();

  const { recipes: trackedRecipes } = useTracker(() => {
    const noDataAvailable = { recipes: [] };

    if (!Meteor.user()) {
      return noDataAvailable;
    }

    const handler = Meteor.subscribe("recipes");

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    return { recipes: RecipesCollection.find().fetch() };
  });

  const selectedRecipes =
    state.recipes && state.recipes.selected ? state.recipes.selected : [];

  const list = selectedRecipes
    .map(({ _id, servings }) => {
      const recipe = trackedRecipes.find(
        ({ _id: trackedRecipeId }) => trackedRecipeId === _id
      );

      if (!recipe) return;

      return { ...recipe, servings };
    })
    .filter((recipe) => !!recipe)
    .reduce((ingredientsList, recipe) => {
      if (!recipe) return ingredientsList;

      return [...ingredientsList, ...recipe.food.ingredients];
    }, [] as RecipeIngredient[]);

  console.log("🚀 ~ file: groceries-list.tsx:40 ~ list ~ list", list);

  return (
    <>
      <div className="mx-auto max-w-6xl pt-6 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Groceries list</h1>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <ul>
            {selectedRecipes.map(({ _id }, idx) => (
              <li key={idx}>checked - {_id.valueOf()}</li>
            ))}
          </ul>
          {/* <ul className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {trackedRecipes.map((recipe, idx) => (
              <li key={idx}>
                <RecipeListItem
                  className="my-1 md:my-3"
                  recipe={recipe}
                  selected={getSelected(recipe._id)}
                  onServingsChange={(servings) => {
                    setServingSize(servings, recipe._id);
                  }}
                />
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default GroceriesList;
