import React, { Fragment, useEffect, useState } from "react";

import { Recipe, RecipeIngredient } from "/imports/api/recipes/recipes";
import Accordion from "../molecules/accordion";
import CheckboxLabel from "../atoms/CheckboxLabel";
import AmountModifier from "../atoms/AmountModifier";
import ActiveList from "../hooks/active-list.hook";

const getIngredientsByDepartment = (activeList: {
  recipes: {
    recipe: Recipe;
    servings: number;
  }[];
}) => {
  const completeIngredientsList = activeList.recipes.reduce(
    (ingredientsList, activeListItem) => {
      if (!activeListItem) return ingredientsList;

      const ingredientsAdjustedToNewServingSize =
        activeListItem.recipe.food.ingredients.map((recipeIngredient) => {
          const recipe = activeListItem.recipe;
          const servings = activeListItem.servings;
          const amount = recipeIngredient.amount
            ? (recipeIngredient.amount / recipe.food.servings) * servings
            : undefined;

          return {
            ...recipeIngredient,
            amount,
          };
        });

      return [...ingredientsList, ...ingredientsAdjustedToNewServingSize];
    },
    [] as RecipeIngredient[]
  );

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
  const activeList = ActiveList();

  const ingredientsByDepartment = getIngredientsByDepartment(activeList);

  const [openDepartments, setOpenDepartments] = useState<string[]>([]);

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
