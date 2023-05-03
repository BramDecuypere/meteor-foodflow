import React, { Fragment, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import cn from "classnames";
import { Menu, Transition } from "@headlessui/react";

import TextToggle from "../atoms/TextToggle";
import ActiveMenuList from "../organisms/active-menu-list";
import GroceriesList from "../organisms/groceries-list/groceries-list";
import ActiveListHook from "../hooks/active-list.hook";
import { navigation } from "/constants/navigation";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { EllipsisVerticalIcon, PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../atoms/Modal";
import AddExtraItemForm from "../molecules/add-extra-item-form";
import { Meteor } from "meteor/meteor";
import { RecipeIngredient } from "/imports/api/recipes/recipes";
import { Metrics } from "/enums/metrics.enum";

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

  const onOptionsClick = () => {
    console.log("clicked ellipsis");
  };

  const onFormSubmit: SubmitHandler<FieldValues> = (values) => {
    const { product, quantity, category } = values;

    setAddModalIsOpen(false);
    Meteor.call("users.activeList.addIngredient", {
      name: product,
      amount: quantity,
      metric: Metrics.AMOUNT,
      departments: [category],
    } as RecipeIngredient);
  };

  if (activeList.loading) {
    return null;
  }

  const resetList = () => {
    const result = confirm("Are you sure you want to reset the list?");

    if (result) {
      Meteor.call("users.resetGroceryList");
    }
  };

  if (
    activeList.selectedIngredients.length === 0 &&
    activeList.extraIngredients.length === 0 &&
    activeList.recipes.length === 0
  ) {
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

            <Button
              onClick={() => {
                setAddModalIsOpen(true);
              }}
              className="inline-flex my-8 md:my-0 items-center justify-center ml-4"
            >
              <PlusIcon height="1rem" />
              &nbsp;Add item
            </Button>

            <Modal
              isOpen={isAddModalOpen}
              setModalIsOpen={(isOpen: boolean) => setAddModalIsOpen(isOpen)}
            >
              <AddExtraItemForm onSubmit={onFormSubmit} />
            </Modal>
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
            "max-w-2xl md:justify-between"
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

          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
              className="cursor-pointer w-6 h-6"
              onClick={onOptionsClick}
            >
              <EllipsisVerticalIcon />
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {selectedView === GroceriesListStates.GROCERIES_LIST && (
                  <>
                    <div className="py-1">
                      <Menu.Item>
                        <button
                          onClick={() => {
                            setAddModalIsOpen(true);
                          }}
                          className={cn(
                            "flex px-4 py-2 text-sm w-full text-gray-900"
                          )}
                        >
                          Add item
                        </button>
                      </Menu.Item>
                    </div>
                    <hr />
                  </>
                )}
                <div className="py-1">
                  <Menu.Item>
                    {() => (
                      <button
                        onClick={resetList}
                        className={cn(
                          "flex px-4 py-2 text-sm w-full text-gray-900"
                        )}
                      >
                        Reset list
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {selectedView === GroceriesListStates.GROCERIES_LIST && (
          <div className="w-full mx-auto">
            <GroceriesList />
          </div>
        )}

        {selectedView === GroceriesListStates.MENU && (
          <div>
            <ActiveMenuList />
          </div>
        )}

        <Modal
          isOpen={isAddModalOpen}
          setModalIsOpen={(isOpen: boolean) => setAddModalIsOpen(isOpen)}
        >
          <AddExtraItemForm onSubmit={onFormSubmit} />
        </Modal>
      </div>
    </div>
  );
};

export default Groceries;
