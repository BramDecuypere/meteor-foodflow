import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import Label from "/imports/ui/atoms/label";
import { Recipe } from "/imports/api/recipes/recipes";
import AddToListGroup from "./add-to-list-group";
import { ClockIcon, UserIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { defaultBGImgPath } from "/constants/defaultBGImgPath";
import { Mongo } from "meteor/mongo";
import { Languages } from "/enums/languages.enum";

const RecipeImage = ({
  imgSrc,
  loading,
}: {
  imgSrc?: string;
  loading: boolean;
}) => {
  const [isDefaultImg, setIsDefaultImg] = useState(false);

  const onImgError = () => {
    setIsDefaultImg(true);
  };

  if (loading) {
    return <div className="animate-pulse h-full rounded-t-3xl"></div>;
  }

  if (isDefaultImg) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-300 rounded-t-3xl">
        <img src={defaultBGImgPath} width={50} />
      </div>
    );
  }

  return (
    <img
      className="rounded-t-3xl object-cover h-full w-full"
      src={imgSrc}
      onError={onImgError}
    />
  );
};

const TextSkeleton = ({ className }: { className: string }) => {
  return (
    <span
      className={cn(
        "w-10 text-transparent animate-pulse bg-slate-200 rounded-xl",
        className
      )}
    >
      xxx
    </span>
  );
};

const RecipeListItem = ({
  className,
  recipe = {
    _id: new Mongo.ObjectID(),
    language: Languages.NL,
    labels: [],
    title: "",
    image: "",
    timings: {
      active: 0,
      total: 0,
    },
    food: {
      servings: 0,
      ingredients: [],
    },
    steps: [],
  },
  selected,
  selectable,
  servings = 1,
  loading = false,
  onAddToListClick,
  onIncreaseServingsClick,
  onDecreaseServingsClick,
  onRemoveClick,
}: {
  loading?: boolean;
  className?: string;
  recipe?: Recipe;
  selected?: boolean;
  selectable?: boolean;
  servings?: number;
  onAddToListClick?: (servings: number) => void;
  onIncreaseServingsClick?: () => void;
  onDecreaseServingsClick?: () => void;
  onRemoveClick?: (recipe: Recipe) => void;
}) => {
  const [currentServings, setCurrentServings] = useState(servings);

  const setServings = (servings: number) => {
    const nextServings = currentServings <= 1 ? 1 : servings;

    return setCurrentServings(nextServings);
  };

  useEffect(() => {
    setCurrentServings(servings);
  }, [servings]);

  const getLink = () => {
    if (!recipe || loading) {
      return "";
    }

    return `/recipes/${recipe._id.valueOf()}`;
  };

  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border-gray-200 border text-black h-full",
        className
      )}
    >
      <Link
        onClick={(e) => e.stopPropagation()}
        to={getLink()}
        className={cn("h-56 overflow-hidden relative backdrop-filter", {
          "animate-pulse": loading,
        })}
      >
        <div className="absolute w-full h-full bg-black rounded-t-3xl opacity-5"></div>
        {onRemoveClick && (
          <div
            className="text-primary absolute top-0 right-0 p-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemoveClick(recipe);
            }}
          >
            <XMarkIcon className="w-10 h-10" />
          </div>
        )}

        <RecipeImage imgSrc={recipe.image} loading={loading} />

        <div
          className={cn(
            "flex flex-col absolute bottom-2 left-2 text-white font-bold",
            { "w-10/12": loading }
          )}
        >
          <div className="flex">
            {recipe.labels.length > 0 &&
              recipe.labels.map((value, idx) => {
                return (
                  <Label key={idx} label={value} className="mr-2 text-xs" />
                );
              })}
          </div>
          <span className="text-lg">{recipe.title}</span>
        </div>
      </Link>

      <div className="flex flex-col flex-grow p-3">
        <div>
          <div className="flex">
            <span className="flex items-center text-xs font-bold pb-3 pr-2">
              <ClockIcon className="h-3 text-primary pr-1" />
              {!loading ? (
                <span>
                  ± {recipe.timings.total} min ({recipe.timings.active} min
                  active)
                </span>
              ) : (
                <TextSkeleton className="w-20" />
              )}
            </span>
            <span className="flex items-center text-sm pb-3 pr-2 font-bold">
              <UserIcon className="h-3 text-primary pr-1" />
              {!loading ? (
                <span>{recipe.food.servings}</span>
              ) : (
                <TextSkeleton className="w-4" />
              )}
            </span>
            {/* <span className="flex items-center text-xs pb-3 pr-2">
              <ClockIcon className="h-3 text-primary pr-1" />
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
            onClick={
              onAddToListClick
                ? () => onAddToListClick(currentServings)
                : () => {}
            }
            servings={currentServings}
            isSelected={selected}
            selectable={selectable}
            onAdd={
              onIncreaseServingsClick
                ? onIncreaseServingsClick
                : () => setServings(currentServings + 1)
            }
            onRemove={
              onDecreaseServingsClick
                ? onDecreaseServingsClick
                : () => setServings(currentServings - 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeListItem;
