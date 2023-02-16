import React from "react";
import cn from "classnames";

const ModalBackground = ({
  isOpen,
  setModalIsOpen,
  children,
  className,
}: {
  isOpen: boolean;
  setModalIsOpen: () => void;
  children: React.ReactElement;
  className?: string;
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={() => setModalIsOpen()}
      className={cn(
        "absolute w-full h-full bg-black/30 top-0 left-0",
        className
      )}
    >
      {children}
    </div>
  );
};
export default ModalBackground;
