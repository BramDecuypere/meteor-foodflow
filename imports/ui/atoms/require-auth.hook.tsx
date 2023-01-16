import { Meteor } from "meteor/meteor";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/auth.hook";

const RequireAuth = ({ children }: any) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isLoggingIn = Meteor.loggingIn();

  useEffect(() => {
    if (!user && !isLoggingIn) {
      navigate("/");
    }
  }, [user, isLoggingIn]);

  return children;
};

export default RequireAuth;
