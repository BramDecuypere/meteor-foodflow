import cn from "classnames";
import { ButtonGroupState } from "../../../enums/button-group-state";
import Button from "../atoms/Button";

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
        <Button
          key={idx}
          onClick={() => {
            setActiveValue(value);
          }}
          className={cn({
            "bg-red-200": active.toString() === value.toString(),
            "border-red-200": true,
            "bg-white": active.toString() !== value.toString(),
            "rounded-l-2xl": idx === 0,
            "rounded-r-2xl": idx === items.length - 1,
          })}
        >
          {label}
        </Button>
      ))}
    </span>
  );
};

export default ButtonGroup;
