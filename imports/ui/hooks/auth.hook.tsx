import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React from "react";

const authContext = React.createContext({} as ReturnType<typeof useAuth>);

function useAuth() {
  const user = useTracker(() => Meteor.user());
  const isLoggingIn = useTracker(() => Meteor.loggingIn());
  const isLoggingOut = useTracker(() => Meteor.loggingOut());

  return {
    user,
    isLoggingIn,
    isLoggingOut,
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
    logout(cb: () => void) {
      Meteor.logout(() => {
        if (cb) {
          setTimeout(() => {
            cb();
          }, 0);
        }
      });
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
