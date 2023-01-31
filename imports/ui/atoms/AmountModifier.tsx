import React, { ReactNode } from "react";

const AmountModifier = ({
  title,
  onAdd,
  onRemove,
  amount,
}: {
  amount: number;
  onAdd: () => void;
  onRemove: () => void;
  title?: string | ReactNode;
}) => {
  return (
    <div className="flex flex-grow justify-center select-none">
      <button onClick={onAdd} className="text-2xl w-5 text-orange h-9">
        +
      </button>
      <span className="px-4 leading-10">
        {amount}
        {title ? ` ${title}` : undefined}
      </span>
      <button onClick={onRemove} className="text-2xl w-5 text-orange h-9">
        -
      </button>
    </div>
  );
};

export default AmountModifier;
