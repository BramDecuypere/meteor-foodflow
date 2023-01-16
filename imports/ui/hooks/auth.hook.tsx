import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React from "react";

const authContext = React.createContext({} as ReturnType<typeof useAuth>);

function useAuth() {
  const user = useTracker(() => Meteor.user());

  return {
    user,
    login(username: string, password: string, cb: () => void) {
      Meteor.loginWithPassword(username, password, (err) => {
        if (err) {
          if (err.message) {
            alert(`reason: ${err.message}`);
          }
          return;
        }

        if (cb) {
          setTimeout(() => {
            cb();
          }, 0);
        }
      });
    },
    logout() {
      Meteor.logout();
    },
  };
}

export function AuthProvider({ children }: any) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext<ReturnType<typeof useAuth>>(authContext);
}
