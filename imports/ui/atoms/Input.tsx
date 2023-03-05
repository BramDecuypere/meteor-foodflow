import React from "react";
import cn from "classnames";

interface Input extends Omit<React.HTMLProps<HTMLInputElement>, "ref"> {}

const Input = React.forwardRef(({ className, ...args }: Input, ref) => {
  return (
    <input
      ref={ref as any}
      style={{ boxShadow: "none" }}
      className={cn(
        "w-full border-0 border-b-2 mb-10 pb-3 pt-3 px-0 outline-none border-gray-200 focus:border-b-orange focus:outline-none focus:shadow-none",
        className
      )}
      {...args}
    />
  );
});

export default Input;
