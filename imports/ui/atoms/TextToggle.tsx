import React from "react";
import cn from "classnames";

type textToggleType = number | string;

const TextToggle = ({
  selected,
  onClick,
  options,
}: {
  selected?: textToggleType;
  onClick: (val: textToggleType) => void;
  options: textToggleType[];
}) => {
  return (
    <div className="inline-flex rounded-full shadow-light text-oragne cursor-pointer relative select-none">
      {options.map((val, idx) => {
        return (
          <div
            onClick={() => onClick(val)}
            key={idx}
            className={cn("py-2 px-6 rounded-full text-center font-bold", {
              "bg-primary text-white": selected === val,
              "text-primary": selected !== val,
            })}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default TextToggle;
