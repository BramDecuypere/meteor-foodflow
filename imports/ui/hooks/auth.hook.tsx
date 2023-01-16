import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React from "react";

const authContext = React.createContext({
  user: Meteor.user(),
} as ReturnType<typeof useAuth>);

function useAuth() {
  const user = useTracker(() => Meteor.user());

  return {
    user,
    login(username: string, password: string) {
      Meteor.loginWithPassword(username, password, (err) => {
        if (err) {
          if (err.message) {
            alert(`reason: ${err.message}`);
          }
        }
      });
    },
    logout() {
      Meteor.logout((err) => {
        console.log("🚀 ~ file: auth.hook.tsx:19 ~ Meteor.logout ~ err", err);
        location.href = "/";
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
