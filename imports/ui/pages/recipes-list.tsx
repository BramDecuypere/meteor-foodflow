import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Recipe, RecipesCollection } from "/imports/api/recipes/recipes";
import RecipeListItem from "../molecules/recipe-list-item";
import GlobalConsumer from "../hooks/global.context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { getRecipesTotal } from "/utils/get-total-recipes";

const RecipesList = () => {
  const state = GlobalConsumer();
  const { recipes, setState } = state;
  const selectedRecipes = recipes.selected;
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
    const nextState = {
      ...state,
      recipes: {
        ...state.recipes,
        selected: state.recipes.selected.map((recipe) => {
          if (recipe._id === _id) {
            return {
              _id: recipe._id,
              servings,
            };
          }

          return recipe;
        }),
      },
    };

    if (servings <= 0) {
      nextState.recipes.selected = nextState.recipes.selected.filter(
        (recipe) => recipe._id !== _id
      );
    }

    setState(nextState);
  };

  const onRecipeListItemClick = (e: any, recipe: Recipe) => {
    if (setState) {
      const recipeSelected = recipes.selected.find(
        (val) => val._id === recipe._id
      );

      const nextState = {
        ...state,
        recipes: {
          ...state.recipes,
        },
      };

      if (recipeSelected) {
        nextState.recipes.selected = nextState.recipes.selected.filter(
          (_recipe) => _recipe._id !== recipe._id
        );
      } else {
        nextState.recipes.selected = [
          ...nextState.recipes.selected,
          {
            _id: recipe._id,
            servings: 2,
          },
        ];
      }

      setState(nextState);
    }
  };

  const getSelected = (_listId: string) => {
    return recipes.selected.find(({ _id }) => _id === _listId);
  };

  const recipesTotal = getRecipesTotal(selectedRecipes);

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
                  onClick={(e) => onRecipeListItemClick(e, recipe)}
                  className="my-1 md:my-3"
                  recipe={recipe}
                  selected={getSelected(recipe._id)}
                  onServingsChange={(servings) =>
                    setServingSize(servings, recipe._id)
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        {recipesTotal ? (
          <div className="fixed bottom-5 right-5">
            <button className="btn flex items-center bg-green-300 py-4 px-8 rounded-lg shadow-lg border-2 border-black">
              <span className="h-5 w-5 mr-3">
                <ShoppingCartIcon />
              </span>
              Create grocery list ({recipesTotal})
            </button>
          </div>
        ) : undefined}
      </div>
    </>
  );
};

export default RecipesList;
