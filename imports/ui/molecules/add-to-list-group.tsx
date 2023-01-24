import React from "react";
import cn from "classnames";
import Button from "../atoms/Button";
import { CheckIcon } from "@heroicons/react/20/solid";

const AddToListGroup = ({
  onAdd,
  onRemove,
  isSelected,
  className,
  servings,
  onClick,
}: {
  servings: number;
  isSelected: boolean;
  onClick: () => void;
  onAdd: () => void;
  onRemove: () => void;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between font-bold shadow-light rounded-3xl h-10 bg-white text-xs w-full max-w-sm mx-auto",
        { className }
      )}
    >
      <div className="flex flex-grow justify-center">
        <button onClick={onAdd} className="text-2xl text-orange h-9">
          +
        </button>
        <span className="px-4 leading-10">{servings} servings</span>
        <button onClick={onRemove} className="text-2xl text-orange h-9">
          -
        </button>
      </div>
      <Button
        onClick={onClick}
        className={cn({
          "bg-white border-2 border-orange text-orange": isSelected,
        })}
      >
        {isSelected ? (
          <span className="flex items-center">
            <CheckIcon className="h-6 w-6 pr-2" />
            <span>Addded</span>
          </span>
        ) : (
          <span>Add to list</span>
        )}
      </Button>
    </div>
  );
};

export default AddToListGroup;
