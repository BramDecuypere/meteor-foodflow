import React, { ReactNode } from "react";
import { Random } from "meteor/random";
import cn from "classnames";

const CheckboxLabel = ({
  children,
  isSelected,
  onClick,
}: {
  onClick: () => void;
  children: ReactNode;
  isSelected: boolean;
}) => {
  const id = Random.id(5);
  return (
    <div className="flex items-center">
      <label className="cursor-pointer" htmlFor={id}>
        <input
          id={id}
          type={"checkbox"}
          onChange={onClick}
          checked={isSelected}
          className={cn(
            "mr-4 rounded-xl border-solid border-2 border-primary text-primary focus:ring-transparent cursor-pointer"
          )}
        />
        {children}
      </label>
    </div>
  );
};

export default CheckboxLabel;
