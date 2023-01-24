import React from "react";
import clsx from "classnames";
import { DOMAttributes } from "react";

interface ButtonItemProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({
  children,
  className = "",
  onClick = () => {},
  ...rest
}: ButtonItemProps) => (
  <button
    onClick={onClick}
    type="button"
    className={clsx(
      className,
      "bg-orange text-white h-10 px-3 rounded-3xl text-xs font-bold"
    )}
    {...rest}
  >
    {children}
  </button>
);

export default Button;