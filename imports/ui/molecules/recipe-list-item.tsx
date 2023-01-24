import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import Label from "/imports/ui/atoms/label";
import { Recipe } from "/imports/api/recipes/recipes";
import AddToListGroup from "./add-to-list-group";
import { ClockIcon, UserIcon } from "@heroicons/react/20/solid";

const DEFAULT_SERVINGS = 2;

const RecipeListItem = ({
  className,
  recipe,
  selected,
  onServingsChange,
}: {
  className?: string;
  recipe: Recipe;
  selected?: {
    _id: string;
    servings: number;
  };
  onServingsChange: (servings: number) => void;
}) => {
  const [currentServings, setCurrentServings] = useState(
    selected ? selected.servings : DEFAULT_SERVINGS
  );

  useEffect(() => {
    if (selected && selected.servings) {
      setCurrentServings(selected?.servings);
    }
  }, [selected]);

  const onAddToListClick = () => {
    if (selected) {
      return onServingsChange(0);
    }

    return onServingsChange(currentServings);
  };

  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl shadow-lighter text-black h-full font-bold",
        className
      )}
    >
      <Link
        onClick={(e) => e.stopPropagation()}
        to={`/recipes/${recipe._id}`}
        className="h-56 overflow-hidden relative backdrop-filter"
      >
        <div className="absolute w-full h-full bg-black rounded-t-3xl opacity-5"></div>
        <img
          className="rounded-t-3xl object-cover h-full w-full"
          src={recipe.image}
        />
        <div className="flex flex-col absolute bottom-2 left-2 text-white font-bold">
          <div className="flex">
            {recipe.labels.map((value, idx) => {
              return <Label key={idx} label={value} className="mr-2 text-xs" />;
            })}
          </div>
          <span className="text-lg">{recipe.title}</span>
        </div>
      </Link>
      <div className="flex flex-col flex-grow p-3">
        <div>
          <div className="flex">
            <span className="flex items-center text-xs pb-3 pr-2">
              <ClockIcon className="h-3 text-orange pr-1" />
              <span>± {recipe.timings.active + recipe.timings.total} min</span>
            </span>
            <span className="flex items-center text-xs pb-3 pr-2">
              <UserIcon className="h-3 text-orange pr-1" />
              <span>4 serv.</span>
            </span>
            {/* <span className="flex items-center text-xs pb-3 pr-2">
              <ClockIcon className="h-3 text-orange pr-1" />
              <span>± 10 min</span>
            </span> */}
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex pb-8 flex-grow">
            <p className="text-xs">
              {recipe.food.ingredients
                .filter(({ name }) => !!name)
                .map(({ name }) => name)
                .join(", ")}
            </p>
          </div>
          <AddToListGroup
            onClick={onAddToListClick}
            servings={currentServings}
            isSelected={!!selected}
            onAdd={() => onServingsChange(currentServings + 1)}
            onRemove={() => onServingsChange(currentServings - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeListItem;
