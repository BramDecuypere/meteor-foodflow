import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import clsx from "classnames";
import { Link } from "react-router-dom";
import { Recipe } from "../../../interfaces/recipe";
import Label from "../atoms/label";

const RecipeListItem = ({
  className,
  recipe,
  onClick,
  selected,
}: {
  className?: string;
  recipe: Recipe;
  onClick: () => void;
  selected?: boolean;
}) => {
  return (
    <li
      onClick={onClick}
      className={clsx(
        "flex bg-white items-center shadow-md select-none cursor-pointer",
        { "outline outline-2 outline-red-200": selected },
        className
      )}
    >
      <div
        className={clsx(
          "bg-white flex-shrink-0 flex items-center justify-center text-white text-sm font-medium rounded-l-md"
        )}
      >
        <div className="w-full h-48 rounded-l-md">
          {/* eslint-disable-next-line */}
          <img
            className="min-h-full max-h-full w-40 object-cover rounded-l-md"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
      </div>

      <div className="flex flex-1 h-full items-center justify-between truncate bg-white rounded-r-md">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <a className="font-medium text-gray-900 hover:text-gray-600">
            {recipe.title}
          </a>
          <p className="text-gray-500 whitespace-normal">
            {recipe.food.ingredients
              .map((ingredient) => ingredient.name)
              .join(", ")}
          </p>

          <ul className="flex pt-2">
            {recipe.labels.map((label) => (
              <li key={label} className="flex pr-2">
                <Label label={label} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0 pr-2">
          <Link
            onClick={(e) => e.stopPropagation()}
            to={`/recipes/${recipe.id}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Open options</span>
            <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default RecipeListItem;
