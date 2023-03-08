import React, { HTMLProps, ReactNode } from "react";
import cn from "classnames";

interface AmountModifierProps extends Omit<HTMLProps<HTMLDivElement>, "title"> {
  amount: number;
  onAdd: () => void;
  onRemove: () => void;
  title?: string | ReactNode;
  hideAmount?: boolean;
  disabled?: boolean;
}

const AmountModifier = ({
  title,
  onAdd,
  onRemove,
  amount,
  hideAmount,
  className,
  disabled,
}: AmountModifierProps) => {
  return (
    <div
      className={cn("flex justify-center select-none", className, {
        "opacity-40": disabled,
      })}
    >
      <button
        disabled={disabled}
        onClick={onAdd}
        className="text-2xl w-5 text-orange h-9"
      >
        +
      </button>
      <span className="px-4 leading-10 min-w-fit text-center font-bold text-sm">
        {!hideAmount && Math.round(amount * 10) / 10}
        {title ? ` ${title}` : undefined}
      </span>
      <button
        disabled={disabled}
        onClick={onRemove}
        className="text-2xl w-5 text-orange h-9"
      >
        -
      </button>
    </div>
  );
};

export default AmountModifier;
