import React from "react";
import { Meteor } from "meteor/meteor";
import AmountModifier from "../atoms/AmountModifier";
import UserDefaultServings from "../hooks/user-default-servings.hook";

const Settings = () => {
  const userServings = UserDefaultServings();

  const onChangeDefaultServings = (servings: number) => {
    Meteor.call("users.changeDefaultServings", servings);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="py-4">
        <ul className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          <li className="flex items-center">
            <span className="mr-8">Default servings: </span>
            <AmountModifier
              onAdd={() => onChangeDefaultServings(userServings + 1)}
              onRemove={() => onChangeDefaultServings(userServings - 1)}
              amount={userServings}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
