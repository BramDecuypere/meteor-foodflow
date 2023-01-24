import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { RecipesCollection } from "/imports/api/recipes/recipes";
import RecipeListItem from "../molecules/recipe-list-item";
import GlobalConsumer from "../hooks/global.context";

const RecipesList = () => {
  const state = GlobalConsumer();
  const { recipes, setState } = state;
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

  const setServingSize = (servings: number, _id: string) => {
    const foundSelectedRecipe = state.recipes.selected.find(
      ({ _id: id }) => id === _id
    );

    let selected = [];
    if (!foundSelectedRecipe) {
      selected = [...state.recipes.selected, { _id, servings }];
    } else {
      selected = [...state.recipes.selected].map((recipe) => {
        if (recipe._id === _id) {
          return {
            _id: recipe._id,
            servings,
          };
        }

        return recipe;
      });
    }

    const nextState = {
      ...state,
      recipes: {
        ...state.recipes,
        selected,
      },
    };

    if (servings <= 0) {
      nextState.recipes.selected = nextState.recipes.selected.filter(
        (recipe) => recipe._id !== _id
      );
    }

    setState(nextState);
  };

  const getSelected = (_listId: string) => {
    return recipes.selected.find(({ _id }) => _id === _listId);
  };

  return (
    <>
      <div className="mx-auto max-w-6xl pt-6 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Recipes</h1>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <ul className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipesList;
