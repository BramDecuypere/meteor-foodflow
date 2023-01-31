import React, { Fragment, useEffect, useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import {
  Recipe,
  RecipeIngredient,
  RecipesCollection,
} from "/imports/api/recipes/recipes";
import GlobalConsumer from "../hooks/global.context";
import Accordion from "../molecules/accordion";
import { SelectedRecipe } from "/interfaces/global-context";
import CheckboxLabel from "../atoms/CheckboxLabel";
import AmountModifier from "../atoms/AmountModifier";

const getIngredientsByDepartment = (
  selectedRecipes: SelectedRecipe[],
  trackedRecipes: Recipe[]
) => {
  const completeIngredientsList = selectedRecipes
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

      const ingredientsAdjustedToNewServingSize = recipe.food.ingredients.map(
        (recipeIngredient) => {
          const amount = recipeIngredient.amount
            ? (recipeIngredient.amount / recipe.food.servings) * recipe.servings
            : undefined;

          return {
            ...recipeIngredient,
            amount,
          };
        }
      );

      return [...ingredientsList, ...ingredientsAdjustedToNewServingSize];
    }, [] as RecipeIngredient[]);

  const ingredientsByDepartment: {
    [key: string]: {
      name: string;
      amount: number | undefined;
      metric: string | undefined;
    }[];
  } = {};

  completeIngredientsList.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      if (!ingredientsByDepartment[department]) {
        ingredientsByDepartment[department] = [
          {
            name: ingredient.name,
            amount: ingredient.amount,
            metric: ingredient.metric,
          },
        ];
      } else {
        const ingredientFoundIndex = ingredientsByDepartment[
          department
        ].findIndex((ingredientByDepartment) => {
          return ingredientByDepartment.name === ingredient.name;
        });

        if (ingredientFoundIndex !== -1) {
          const amount =
            (ingredient.amount || 0) +
            (ingredientsByDepartment[department][ingredientFoundIndex].amount ||
              0);

          ingredientsByDepartment[department][ingredientFoundIndex] = {
            ...ingredientsByDepartment[department][ingredientFoundIndex],
            amount: amount ? amount : undefined,
          };
        }
        // new ingredient in the list
        else {
          ingredientsByDepartment[department].push({
            name: ingredient.name,
            amount: ingredient.amount,
            metric: ingredient.metric,
          });
        }
      }
    });
  });

  return ingredientsByDepartment;
};

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

  const ingredientsByDepartment = getIngredientsByDepartment(
    selectedRecipes,
    trackedRecipes
  );

  const [openDepartments, setOpenDepartments] = useState<string[]>(
    Object.keys(ingredientsByDepartment)
  );

  useEffect(() => {
    setOpenDepartments(Object.keys(ingredientsByDepartment));
  }, [Object.keys(ingredientsByDepartment).length]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="py-4">
        {Object.keys(ingredientsByDepartment).map((department, idx) => (
          <Fragment key={idx}>
            <Accordion
              className="mb-6 md:mb-10 mx-auto max-w-2xl"
              title={department}
              body={
                <ul className="p-4 font-normal">
                  {ingredientsByDepartment[department].map(
                    ({ name, amount, metric }, idx2) => {
                      return (
                        <li
                          key={idx2}
                          className="flex justify-between pb-4 last:pb-0 w-full"
                        >
                          <CheckboxLabel
                            onClick={() => {
                              console.log("element");
                            }}
                            isSelected={false}
                          >
                            <span>{`${name}`}</span>
                            {amount && <span>{` - ${metric}`}</span>}
                          </CheckboxLabel>

                          {amount && (
                            <AmountModifier
                              amount={amount || 0}
                              onAdd={() => {}}
                              onRemove={() => {}}
                            />
                          )}
                        </li>
                      );
                    }
                  )}
                </ul>
              }
              isOpen={openDepartments.indexOf(department) !== -1}
              onChangeClick={(department) => {
                const isOpenDepartment =
                  openDepartments.indexOf(department) === -1;

                if (!isOpenDepartment) {
                  setOpenDepartments(
                    openDepartments.filter(
                      (_department) => _department !== department
                    )
                  );
                } else {
                  setOpenDepartments([...openDepartments, department]);
                }
              }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default GroceriesList;
