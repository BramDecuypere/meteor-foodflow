import React, { Fragment, useState } from "react";
import { Meteor } from "meteor/meteor";
import cn from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

import RecipeListItem from "../molecules/recipe-list-item";
import UserRecipes from "../hooks/user-recipes.hook";
import ActiveList from "../hooks/active-list.hook";
import RecipeList from "../molecules/recipe-list";
import UserDefaultServings from "../hooks/user-default-servings.hook";

const Recipes = () => {
  const [activeLabels, _] = useState([]);
  const userRecipes = UserRecipes({ labels: activeLabels });
  const { recipes, loading } = ActiveList();
  const userServings = UserDefaultServings();

  const activeListIds = recipes.map(({ recipe }) => recipe._id.valueOf());

  // This is setting default recipes if there are no recipes found
  Meteor.call("users.defaultRecipes");

  const onOptionsClick = () => {
    console.log("onoptionsclick");
  };

  const getRecipes = () => {
    return userRecipes.map((recipe, idx) => {
      const recipeId = recipe._id;
      const activeRecipe = recipes.find(
        ({ recipe }) => recipe._id.valueOf() === recipeId.valueOf()
      );

      const onAddToListClick = (servings: number) => {
        if (activeRecipe) {
          Meteor.call("users.activeList.removeRecipe", recipe);
        } else {
          Meteor.call("users.activeList.addRecipe", recipe, servings);
        }
      };

      return (
        <li key={idx}>
          <RecipeListItem
            className="my-1 md:my-3"
            recipe={recipe}
            selected={activeListIds.indexOf(recipe._id.valueOf()) > -1}
            servings={activeRecipe ? activeRecipe.servings : userServings}
            selectable
            onAddToListClick={onAddToListClick}
          />
        </li>
      );
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="py-4">
        <RecipeList>
          {!loading
            ? getRecipes()
            : [...Array(10)].map((_, idx) => (
                <RecipeListItem key={idx} loading={loading} />
              ))}
        </RecipeList>
        <Menu
          as="div"
          className="inline-block text-left fixed bottom-10 right-5 md:bottom-10 md:right-10 z-50"
        >
          <Menu.Button
            className="cursor-pointer bg-orange rounded-full p-3 shadow-lg"
            onClick={onOptionsClick}
          >
            <EllipsisVerticalIcon className="w-8 h-8 text-4xl text-white" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 bottom-16 md:bottom-20 z-10 mt-2 w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <button
                    // onClick={() => {
                    //   setAddModalIsOpen(true);
                    // }}
                    className={cn(
                      "flex px-4 py-2 text-sm w-full text-gray-900"
                    )}
                  >
                    Add new recipe
                  </button>
                </Menu.Item>
              </div>

              {/* <hr /> */}

              {/* <div className="py-1">
                <Menu.Item>
                  {() => (
                    <button
                      // onClick={resetList}
                      className={cn(
                        "flex px-4 py-2 text-sm w-full text-gray-900"
                      )}
                    >
                      Reset list
                    </button>
                  )}
                </Menu.Item>
              </div> */}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Recipes;
