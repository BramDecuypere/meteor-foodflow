import React from "react";
import cn from "classnames";

export interface OptionItem {
  value: string | number;
  label: string;
}

interface Select extends React.HTMLProps<HTMLSelectElement> {
  options: OptionItem[];
}

const Select = React.forwardRef(
  ({ className, options = [], ...args }: Select, ref) => {
    return (
      <select
        ref={ref as any}
        placeholder="test"
        style={{ boxShadow: "none" }}
        className={cn(
          "w-full border-0 border-b-2 mb-10 pb-3 pt-3 px-0 outline-none border-gray-200 focus:border-b-orange focus:outline-none shadow-none",
          className
        )}
        {...args}
      >
        <option value="">Select a value...</option>
        {options.map(({ value, label }, idx) => (
          <option key={idx} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
