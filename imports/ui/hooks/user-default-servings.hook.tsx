import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

const UserDefaultServings = () => {
  const user = useTracker(() => {
    Meteor.subscribe("users.defaultServings");

    const user = Meteor.user();

    if (!user) return 0;

    return user.defaultServings;
  });

  return user;
};

export default UserDefaultServings;
