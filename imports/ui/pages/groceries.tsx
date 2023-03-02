import React, { useState } from "react";

import cn from "classnames";
import TextToggle from "../atoms/TextToggle";
import ActiveMenuList from "../organisms/active-menu-list";
import GroceriesList from "../organisms/groceries-list/groceries-list";
import ActiveListHook from "../hooks/active-list.hook";
import { navigation } from "/constants/navigation";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";

export enum GroceriesListStates {
  MENU = "My Active Menu",
  GROCERIES_LIST = "Active Groceries List",
}

const Groceries = () => {
  const activeList = ActiveListHook();
  const navigate = useNavigate();
  const [isAddModalOpen, setAddModalIsOpen] = useState(false);

  const [selectedView, setSelectedView] = useState<GroceriesListStates>(
    GroceriesListStates.GROCERIES_LIST
  );

  const getNavigation = () => {
    const navigateItem = navigation.find((val) => val.id === "dashboard");

    if (!navigateItem) {
      return null;
    }

    return navigateItem;
  };

  if (activeList.loading) {
    return null;
  }

  if (activeList.recipes.length === 0) {
    return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="px-4 py-8 sm:px-0">
          <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 flex justify-center items-center">
            {getNavigation() && (
              <Button
                onClick={() => {
                  const item = getNavigation();

                  if (item) {
                    navigate(item.href);
                  }
                }}
              >
                Add recipes
              </Button>
            )}
          </div>
        </div>
        {/* /End replace */}
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col py-4">
        <div
          className={cn(
            "flex flex-col md:flex-row py-8 mx-auto md:w-full md:items-center",
            {
              "max-w-2xl md:justify-between":
                selectedView === GroceriesListStates.GROCERIES_LIST,
              "justify-center": selectedView === GroceriesListStates.MENU,
            }
          )}
        >
          <TextToggle
            selected={selectedView}
            onClick={(val) => setSelectedView(val as GroceriesListStates)}
            options={[
              GroceriesListStates.MENU,
              GroceriesListStates.GROCERIES_LIST,
            ]}
          />

          {selectedView === GroceriesListStates.GROCERIES_LIST && (
            <Button
              onClick={() => setAddModalIsOpen(true)}
              className="inline-flex my-8 md:my-0 items-center justify-center ml-4"
            >
              <PlusIcon height="1rem" />
              &nbsp;Add item
            </Button>
          )}
        </div>

        {selectedView === GroceriesListStates.GROCERIES_LIST && (
          <div className="w-full mx-auto">
            <GroceriesList
              isAddModalOpen={isAddModalOpen}
              setAddModalIsOpen={(isOpen) => setAddModalIsOpen(isOpen)}
            />
          </div>
        )}

        {selectedView === GroceriesListStates.MENU && (
          <div>
            <ActiveMenuList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Groceries;
