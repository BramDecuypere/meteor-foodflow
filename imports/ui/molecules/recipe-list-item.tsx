import React from "react";
import {
  ArrowTopRightOnSquareIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "classnames";
import { Link } from "react-router-dom";

import { Recipe } from "/imports/api/recipes/recipes";
import Label from "../atoms/label";

const RecipeListItem = ({
  className,
  recipe,
  onClick,
  selected,
  onServingsChange,
}: {
  className?: string;
  recipe: Recipe;
  onClick: (e: any) => void;
  selected?: {
    _id: string;
    servings: number;
  };
  onServingsChange: (servings: number) => void;
}) => {
  return (
    <>
      <li
        className={clsx(
          "flex bg-white items-center shadow-md",
          { "outline outline-2 outline-green-300": selected },
          className
        )}
      >
        <div className="flex flex-col select-none cursor-pointer flex-1">
          <div className="flex" onClick={onClick}>
            <div
              className={clsx(
                "bg-white flex-shrink-0 flex items-center justify-center text-white text-sm font-medium rounded-l-md"
              )}
            >
              <div className="w-full h-48 rounded-l-md">
                <img
                  className={clsx("min-h-full max-h-full w-40 object-cover", {
                    "rounded-l-md": !selected,
                  })}
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>
            </div>

            <div className="flex flex-1 h-full items-center justify-between truncate bg-white rounded-r-md">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a className="font-medium text-gray-900 hover:text-gray-600">
                  {recipe.title}
                </a>
                <p className="text-gray-500 whitespace-normal">
                  {recipe.food.ingredients
                    .map((ingredient) => ingredient.name)
                    .join(", ")}
                </p>

                <ul className="flex pt-2">
                  {recipe.labels.map((label) => (
                    <li key={label} className="flex pr-2">
                      <Label label={label} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-shrink-0 pr-2">
                <Link
                  onClick={(e) => e.stopPropagation()}
                  to={`/recipes/${recipe._id}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <ArrowTopRightOnSquareIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
          {selected && (
            <div className="flex justify-between bg-green-300 p-4">
              <div>{selected.servings} servings</div>
              <div className="flex w-1/3 justify-between">
                <div onClick={() => onServingsChange(++selected.servings)}>
                  <PlusCircleIcon className="h-8" />
                </div>
                <div onClick={() => onServingsChange(--selected.servings)}>
                  <MinusCircleIcon className="h-8" />
                </div>
              </div>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default RecipeListItem;
