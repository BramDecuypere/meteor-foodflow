import React from "react";

const Label = ({ label }: { label: string }) => {
  return (
    <span className="rounded bg-red-200 px-2 py-1" key={label}>
      {label}
    </span>
  );
};

export default Label;
