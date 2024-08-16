import React from "react";
import cn from "classnames";

const Label = ({
  label = "",
  className,
  loading,
}: {
  label?: string;
  className?: string;
  loading?: boolean;
}) => {
  return (
    <span
      className={cn(
        "rounded-full bg-primary bg-opacity-60 px-2 py-1",
        { "animate-pulse": loading },
        className
      )}
      key={label}
    >
      {label}
    </span>
  );
};

export default Label;
