import React, { useState } from "react";

import TextToggle from "../atoms/TextToggle";
import ActiveMenuList from "../organisms/active-menu-list";
import GroceriesList from "../organisms/groceries-list";

export enum GroceriesListStates {
  MENU = "My Active Menu",
  GROCERIES_LIST = "Active Groceries List",
}

const Groceries = () => {
  const [selectedView, setSelectedView] = useState<GroceriesListStates>(
    GroceriesListStates.GROCERIES_LIST
  );

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8">
      <div className="py-4">
        <div className="flex justify-center py-8">
          <TextToggle
            selected={selectedView}
            onClick={(val) => setSelectedView(val as GroceriesListStates)}
            options={[
              GroceriesListStates.MENU,
              GroceriesListStates.GROCERIES_LIST,
            ]}
          />
        </div>

        {selectedView === GroceriesListStates.GROCERIES_LIST && (
          <div className="max-w-6xl mx-auto">
            <GroceriesList />
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
