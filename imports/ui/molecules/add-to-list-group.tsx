import React from "react";
import cn from "classnames";
import Button from "../atoms/Button";

const AddToListGroup = ({
  onAdd,
  onRemove,
  className,
}: {
  onAdd: () => {};
  onRemove: () => {};
  className?: string;
}) => {
  return (
    <div
      className={cn({
        className,
        "flex items-center justify-between font-bold shadow-light rounded-3xl h-10 bg-white text-xs w-full max-w-sm":
          true,
      })}
    >
      <div className="flex flex-grow justify-center">
        <button onClick={onAdd} className="text-2xl text-orange h-9">
          +
        </button>
        <span className="px-4 leading-10">4 servings</span>
        <button onClick={onRemove} className="text-2xl text-orange h-9">
          -
        </button>
      </div>
      <Button>Add to list</Button>
    </div>
  );
};

export default AddToListGroup;
