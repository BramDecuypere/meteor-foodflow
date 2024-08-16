import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import Label from "../atoms/label";
import TextToggle from "../atoms/TextToggle";
import SelectedRecipeHook from "../hooks/selected-recipe.hook";
import { defaultBGImgPath } from "/constants/defaultBGImgPath";
import { ButtonGroupState } from "/enums/button-group-state";
import DepartmentsHook from "../hooks/departments.hook";

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipe, loading } = SelectedRecipeHook(id);
  const { departments } = DepartmentsHook();
  const [isImgDefault, setIsImgDefault] = useState(false);

  const [selectedView, setSelectedView] = useState(
    ButtonGroupState.INGREDIENTS
  );

  if (!recipe || loading) {
    return null;
  }

  const onImgError = () => {
    setIsImgDefault(true);
  };

  const getIngredients = () => {
    let availableDepartmentSet = new Set<string>();

    recipe.food.ingredients.map((ingredient) => {
      availableDepartmentSet.add(ingredient.departments[0]);
    });

    return Array.from(availableDepartmentSet);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="flex flex-col py-4 px-2 my-4 w-full bg-white rounded-md">
        <div className="flex flex-col md:flex-row">
          <div className="pb-4 md:pb-0 md:w-2/5 md:mr-4 h-52 overflow-hidden relative backdrop-filter">
            {/* eslint-disable-next-line */}
            {/* <object data={recipe.image} type="image/jpeg">
              <img src="/img/image.svg" alt="Name" />
            </object> */}
            {!isImgDefault ? (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-full object-cover rounded"
                onError={onImgError}
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-slate-300 rounded-3xl">
                <img src={defaultBGImgPath} width={50} />
              </div>
            )}
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

        <div className="w-full py-6 md:py-10">
          <TextToggle
            selected={selectedView}
            onClick={(val) => setSelectedView(val as ButtonGroupState)}
            options={[ButtonGroupState.INGREDIENTS, ButtonGroupState.STEPS]}
          />
        </div>

        {selectedView === ButtonGroupState.INGREDIENTS && (
          <div className="w-full max-w-xl">
            {getIngredients().map((department) => {
              const ingredientsList = recipe.food.ingredients.filter(
                (ingredient) => ingredient.departments.indexOf(department) > -1
              );

              const foundDepartment = departments.find(
                (val) => val.department === department
              );

              return (
                <Fragment key={department}>
                  <p className="font-bold text-2xl">
                    {foundDepartment?.title.en}
                  </p>
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
          <div className="w-full max-w-xl">
            <ol className="w-full list-decimal ml-6">
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
