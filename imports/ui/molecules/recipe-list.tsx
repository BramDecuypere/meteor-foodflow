import React from "react";

const RecipeList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 grid gap-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
      {children}
    </ul>
  );
};

export default RecipeList;
