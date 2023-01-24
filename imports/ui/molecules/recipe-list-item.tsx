import React from "react";
import clsx from "classnames";
import { Link } from "react-router-dom";

import { Recipe } from "/imports/api/recipes/recipes";
import Label from "../atoms/label";
import Button from "../atoms/Button";
import AddToListGroup from "./add-to-list-group";
import { ClockIcon, UserIcon } from "@heroicons/react/20/solid";

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
    <div className="rounded-3xl shadow-lighter text-black">
      <div className="h-56 overflow-hidden">
        <img
          className="rounded-t-3xl object-cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.leukerecepten.nl%2Fwp-content%2Fuploads%2F2019%2F09%2Fvijgenhapje_v.jpg&f=1&nofb=1&ipt=31a8c6ca1f4d31d985c62a3340abd8f868be8926c69ff929ecd22afbbfe38b4a&ipo=images"
        />
      </div>
      <div className="font-bold p-3">
        <div>
          <div className="flex">
            <span className="flex items-center text-xs pb-3 pr-2">
              <ClockIcon className="h-3 text-orange pr-1" />
              <span>± 10 min</span>
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
        <div className="flex pb-8">
          <p className="text-xs">Vijgen, perziken, bresaola, feta, rucola</p>
        </div>
        <AddToListGroup
          onAdd={() => console.log("adding")}
          onRemove={() => console.log("removing")}
        />
      </div>
    </div>
  );
};

export default RecipeListItem;
