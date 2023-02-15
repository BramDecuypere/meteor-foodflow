import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Label from "../atoms/label";
import TextToggle from "../atoms/TextToggle";
import SelectedRecipeHook from "../hooks/selected-recipe.hook";
import { ButtonGroupState } from "/enums/button-group-state";

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipe, loading } = SelectedRecipeHook(id);
  const [selectedView, setSelectedView] = useState(
    ButtonGroupState.INGREDIENTS
  );

  if (!recipe || loading) {
    return null;
  }

  const getIngredients = () => {
    let availableDepartmentSet = new Set<string>();

    recipe.food.ingredients.map((ingredient) => {
      availableDepartmentSet.add(ingredient.departments[0]);
    });

    return Array.from(availableDepartmentSet);
  };

  return (
    <div className="mx-auto flex max-w-4xl px-4 sm:px-6 md:px-8">
      <div className="flex flex-col py-4 px-2 my-4 w-full bg-white rounded-md">
        <div className="flex">
          <div className="w-2/5 mr-4">
            {/* eslint-disable-next-line */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full object-cover rounded"
            />
          </div>

          <div>
            <ul className="flex">
              {recipe.labels.map((label) => (
                <li className="mr-2" key={label}>
                  <Label label={label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full text-center py-6">
          <TextToggle
            selected={selectedView}
            onClick={(val) => setSelectedView(val as ButtonGroupState)}
            options={[ButtonGroupState.INGREDIENTS, ButtonGroupState.STEPS]}
          />
        </div>

        {selectedView === ButtonGroupState.INGREDIENTS && (
          <div className="w-full max-w-xl mx-auto">
            {getIngredients().map((department) => {
              const ingredientsList = recipe.food.ingredients.filter(
                (ingredient) => ingredient.departments.indexOf(department) > -1
              );

              return (
                <Fragment key={department}>
                  <p className="font-bold text-2xl">{department}</p>
                  <ul className="pb-4">
                    {ingredientsList.map((ingredient, idx) => (
                      <li
                        key={idx}
                        className="py-2 border-b-2 flex justify-between last:border-b-0"
                      >
                        <span>{ingredient.name}</span>
                        {ingredient.amount && (
                          <span className="ml-auto">
                            {ingredient.amount} {ingredient.metric}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Fragment>
              );
            })}
          </div>
        )}

        {selectedView === ButtonGroupState.STEPS && (
          <div className="w-full max-w-xl mx-auto">
            <ol className="w-full list-decimal">
              {recipe.steps.map((step, idx) => {
                if (!step || !step.ingredients) {
                  return null;
                }

                return (
                  <li
                    className="px-4 py-10 border-b-2 first:pt-0 last:border-0"
                    key={idx}
                  >
                    <div className="flex flex-col">
                      <span className="font-bold">
                        {step.ingredients!.join(", ")}
                      </span>
                      <span>{step.description}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
