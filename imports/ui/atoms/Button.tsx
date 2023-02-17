import React, { HTMLProps } from "react";
import cn from "classnames";

interface ButtonItemProps
  extends Omit<HTMLProps<HTMLButtonElement>, "className"> {
  className?: string;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  children,
  className = "",
  loading,
  onClick = () => {},
  type = "button",
  ...rest
}: ButtonItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "bg-orange text-white h-10 px-3 rounded-3xl text-xs font-bold"
      )}
      type={type}
      {...rest}
    >
      {!loading ? children : <span>loading...</span>}
    </button>
  );
};

export default Button;
