import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./auth.hook";

const RequireAuth = ({ children }: any) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isLoggingIn = useTracker(() => Meteor.loggingIn());

  useEffect(() => {
    if (!user && !isLoggingIn) {
      navigate("/");
    }
  }, [user, isLoggingIn]);

  return children;
};

export default RequireAuth;
