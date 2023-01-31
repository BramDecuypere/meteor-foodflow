import React, { ReactNode } from "react";
import cn from "classnames";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Wrapper extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  title: string;
  body: ReactNode;
  onChangeClick?: (department: string) => void;
}

const Accordion = ({
  title,
  body,
  isOpen,
  onChangeClick,
  className,
  ...rest
}: Wrapper) => {
  return (
    <div
      className={cn(
        "w-full max-w-lg shadow-md rounded-xl select-none",
        className
      )}
      {...rest}
    >
      <div
        onClick={() => {
          if (onChangeClick) {
            onChangeClick(title);
          }
        }}
        className={cn(
          "flex justify-between bg-orange text-white text-sm  cursor-pointer",
          {
            "rounded-t-xl": isOpen,
            "rounded-xl": !isOpen,
          }
        )}
      >
        <span className="p-4">{title}</span>
        <span className="flex justify-center items-center pr-4">
          <ChevronDownIcon className={cn("h-10", { "rotate-180": isOpen })} />
        </span>
      </div>

      <div
        className={cn("bg-white rounded-b-xl transition-all", {
          hidden: !isOpen,
        })}
      >
        {body}
      </div>
    </div>
  );
};

export default Accordion;