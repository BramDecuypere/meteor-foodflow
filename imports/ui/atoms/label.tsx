import React from "react";
import cn from "classnames";

const Label = ({ label, className }: { label: string; className?: string }) => {
  return (
    <span
      className={cn(
        "rounded-full bg-orange bg-opacity-60 px-2 py-1",
        className
      )}
      key={label}
    >
      {label}
    </span>
  );
};

export default Label;
