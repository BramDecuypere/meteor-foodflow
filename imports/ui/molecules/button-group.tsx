import clsx from "classnames";
import { DOMAttributes } from "react";
import { ButtonGroupState } from "../../../enums/button-group-state";

interface ButtonItemProps extends DOMAttributes<HTMLButtonElement> {
  className: string;
}

const ButtonItem = ({ children, className, onClick }: ButtonItemProps) => (
  <button
    onClick={onClick}
    type="button"
    className={clsx(
      className,
      "relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none"
    )}
  >
    {children}
  </button>
);

const ButtonGroup = ({
  items,
  active,
  setActiveValue,
}: {
  items: { label: string; value: ButtonGroupState }[];
  active: ButtonGroupState;
  setActiveValue: (value: ButtonGroupState) => void;
}) => {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      {items.map(({ label, value }, idx) => (
        <ButtonItem
          key={idx}
          onClick={() => {
            setActiveValue(value);
          }}
          className={clsx({
            "bg-red-200": active.toString() === value.toString(),
            "border-red-200": true,
            "bg-white": active.toString() !== value.toString(),
            "rounded-l-2xl": idx === 0,
            "rounded-r-2xl": idx === items.length - 1,
          })}
        >
          {label}
        </ButtonItem>
      ))}
    </span>
  );
};

export default ButtonGroup;
