import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

import ActiveListHook from "../hooks/active-list.hook";
import { RecipeIngredient } from "/imports/api/recipes/recipes";
import Accordion from "../molecules/accordion";
import CheckboxLabel from "../atoms/CheckboxLabel";
import AmountModifier from "../atoms/AmountModifier";
import { Meteor } from "meteor/meteor";
import { ActiveList } from "/interfaces/active-list";

interface IngredientsByDepartment {
  [key: string]: RecipeIngredient[];
}

const getIngredientsByDepartment = (
  activeList: ActiveList
): IngredientsByDepartment => {
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

  const ingredientsByDepartment: IngredientsByDepartment = {};

  const handleIngredientsByDepartment = (
    department: string,
    ingredient: RecipeIngredient
  ) => {
    if (!ingredientsByDepartment[department]) {
      ingredientsByDepartment[department] = [
        {
          ...ingredient,
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
        ingredientsByDepartment[department].push(ingredient);
      }
    }
  };

  completeIngredientsList.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      handleIngredientsByDepartment(department, ingredient);
    });
  });

  activeList.selectedIngredients.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      handleIngredientsByDepartment(department, ingredient);
    });
  });

  return ingredientsByDepartment;
};

const getIngredientLabel = (
  { name, amount, metric }: RecipeIngredient,
  selected: boolean
) => {
  let ingredientLabel = name;

  if (amount) {
    ingredientLabel = `${name} - ${metric}`;
  }

  return (
    <span className={cn({ "line-through opacity-40": selected })}>
      {ingredientLabel}
    </span>
  );
};

const checkIsIngredientComplete = (activeList: ActiveList, name: string) => {
  return (
    activeList.selectedIngredients.findIndex(
      (ingredient) => ingredient.name === name
    ) > -1
  );
};

const AccordionBody = ({
  sortedIngredientsByDepartment,
  activeList,
}: {
  sortedIngredientsByDepartment: RecipeIngredient[];
  activeList: ActiveList;
}) => {
  return (
    <ul className="p-4 font-normal">
      {sortedIngredientsByDepartment.map((recipe, idx2) => {
        const { name, amount } = recipe;

        const selected = checkIsIngredientComplete(activeList, name);

        return (
          <li key={idx2} className="flex justify-between pb-4 last:pb-0 w-full">
            <CheckboxLabel
              onClick={() => {
                Meteor.call(
                  "users.toggleSelectedIngredientOnAcctiveList",
                  recipe
                );
              }}
              isSelected={selected}
            >
              {getIngredientLabel(recipe, selected)}
            </CheckboxLabel>

            {amount && (
              <AmountModifier
                amount={amount || 0}
                onAdd={() => {}}
                onRemove={() => {}}
                disabled={selected}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const GroceriesList = () => {
  const activeList = ActiveListHook();
  const ingredientsByDepartment = getIngredientsByDepartment(activeList);

  const [openDepartments, setOpenDepartments] = useState<string[]>([]);

  const selectedIngredients = useRef(activeList.selectedIngredients);

  const closeDepartment = (department: string) => {
    return openDepartments.filter((_department) => _department !== department);
  };

  const handleDepartmentChange = (department: string) => {
    const isOpenDepartment = openDepartments.indexOf(department) !== -1;

    if (isOpenDepartment) {
      setOpenDepartments(closeDepartment(department));
    } else {
      setOpenDepartments([...openDepartments, department]);
    }
  };

  useEffect(() => {
    setOpenDepartments(Object.keys(ingredientsByDepartment));
  }, [Object.keys(ingredientsByDepartment).length]);

  useEffect(() => {
    const changedIngredients = activeList.selectedIngredients.filter(
      (ingredient) => {
        const isIngredientFoundInPreviousList =
          selectedIngredients.current.findIndex(
            ({ name }) => name === ingredient.name
          ) > -1;

        return !isIngredientFoundInPreviousList;
      }
    );

    if (changedIngredients.length === 1) {
      handleCloseDepartmentWhenIngredientsAreCompleted(
        changedIngredients[0].departments[0]
      );
    }

    selectedIngredients.current = activeList.selectedIngredients;
  }, [activeList.selectedIngredients.length]);

  const getAmountOfCheckedIngredients = (
    sortedIngredientsOfDepartment: RecipeIngredient[]
  ) => {
    return sortedIngredientsOfDepartment.reduce((prev, curr) => {
      if (checkIsIngredientComplete(activeList, curr.name)) {
        return prev + 1;
      }

      return prev;
    }, 0);
  };

  const isDepartmentCompleted = (department: string) => {
    const sortedIngredientsByList =
      getSortedIngredientsByDepartment(department);

    const amountOfCheckedIngredients = getAmountOfCheckedIngredients(
      sortedIngredientsByList
    );

    return amountOfCheckedIngredients === sortedIngredientsByList.length;
  };

  const handleCloseDepartmentWhenIngredientsAreCompleted = (
    department: string
  ) => {
    if (isDepartmentCompleted(department)) {
      setOpenDepartments(closeDepartment(department));
    }
  };

  const getSortedIngredientsByDepartment = (department: string) => {
    return ingredientsByDepartment[department].sort(({ name }) => {
      const isIngredientComplete = checkIsIngredientComplete(activeList, name);

      if (isIngredientComplete) {
        return 1;
      }

      return -1;
    });
  };

  const AccordionMapperFunction = () => {
    return (department: string, idx: number) => {
      const sortedIngredientsByDepartment =
        getSortedIngredientsByDepartment(department);

      return (
        <Accordion
          key={idx}
          isComplete={isDepartmentCompleted(department)}
          className="mb-6 md:mb-10 mx-auto max-w-2xl"
          title={department}
          body={
            <AccordionBody
              activeList={activeList}
              sortedIngredientsByDepartment={sortedIngredientsByDepartment}
            />
          }
          isOpen={openDepartments.indexOf(department) !== -1}
          onChangeClick={handleDepartmentChange}
        />
      );
    };
  };

  return (
    <>
      {Object.keys(ingredientsByDepartment)
        .filter((department) => !isDepartmentCompleted(department))
        .map(AccordionMapperFunction())}
      {Object.keys(ingredientsByDepartment)
        .filter((department) => isDepartmentCompleted(department))
        .map(AccordionMapperFunction())}
    </>
  );
};

export default GroceriesList;
