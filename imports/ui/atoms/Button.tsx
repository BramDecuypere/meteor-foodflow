import React from "react";
import cn from "classnames";
import { DOMAttributes } from "react";

interface ButtonItemProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
}

const Button = ({
  children,
  className = "",
  loading,
  onClick = () => {},
  ...rest
}: ButtonItemProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        className,
        "bg-orange text-white h-10 px-3 rounded-3xl text-xs font-bold"
      )}
      {...rest}
    >
      {!loading ? children : <span>loading...</span>}
    </button>
  );
};

export default Button;
