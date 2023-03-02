import React from "react";
import cn from "classnames";

interface Input extends React.HTMLProps<HTMLInputElement> {}

const Input = ({ className, ...args }: Input) => {
  return (
    <input
      style={{ boxShadow: "none" }}
      className={cn(
        "w-full border-0 border-b-2 mb-10 pb-3 pt-3 px-0 outline-none border-gray-200 focus:border-b-orange focus:outline-none focus:shadow-none",
        className
      )}
      {...args}
    />
  );
};

export default Input;
