import React from "react";
import cn from "classnames";
import Button from "../atoms/Button";
import { CheckIcon } from "@heroicons/react/20/solid";
import AmountModifier from "../atoms/AmountModifier";

const AddToListGroup = ({
  onAdd,
  onRemove,
  isSelected,
  className,
  servings,
  onClick,
  selectable,
}: {
  servings: number;
  isSelected?: boolean;
  onClick: () => void;
  onAdd: () => void;
  onRemove: () => void;
  className?: string;
  selectable?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center font-bold shadow-light rounded-3xl h-10 bg-white text-xs w-full mx-auto",
        { "max-w-sm  justify-between": selectable },
        className
      )}
    >
      <AmountModifier
        disabled={isSelected}
        className="flex-grow justify-around"
        title={"servings"}
        onAdd={onAdd}
        onRemove={onRemove}
        amount={servings}
      />

      {selectable && (
        <Button
          onClick={onClick}
          className={cn({
            "bg-white border-2 border-orange text-orange": isSelected,
          })}
        >
          {isSelected ? (
            <span className="flex items-center">
              <CheckIcon className="h-6 w-6 pr-2 text-orange" />
              <span className="text-orange">Added</span>
            </span>
          ) : (
            <span>Add to list</span>
          )}
        </Button>
      )}
    </div>
  );
};

export default AddToListGroup;
