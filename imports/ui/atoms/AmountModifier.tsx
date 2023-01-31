import React, { HTMLProps, ReactNode } from "react";
import cn from "classnames";

interface AmountModifierProps extends Omit<HTMLProps<HTMLDivElement>, "title"> {
  amount: number;
  onAdd: () => void;
  onRemove: () => void;
  title?: string | ReactNode;
  hideAmount?: boolean;
}

const AmountModifier = ({
  title,
  onAdd,
  onRemove,
  amount,
  hideAmount,
  className,
}: AmountModifierProps) => {
  return (
    <div className={cn("flex justify-center select-none", className)}>
      <button onClick={onAdd} className="text-2xl w-5 text-orange h-9">
        +
      </button>
      <span className="px-4 leading-10 min-w-fit text-center font-bold text-sm">
        {!hideAmount && amount}
        {title ? ` ${title}` : undefined}
      </span>
      <button onClick={onRemove} className="text-2xl w-5 text-orange h-9">
        -
      </button>
    </div>
  );
};

export default AmountModifier;
