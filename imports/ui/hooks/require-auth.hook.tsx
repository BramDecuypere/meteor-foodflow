import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./auth.hook";

const RequireAuth = ({ children }: any) => {
  const { user, isLoggingIn, isLoggingOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoggingIn && !isLoggingOut) {
      navigate("/");
    }
  }, [user, isLoggingIn, isLoggingOut]);

  return children;
};

export default RequireAuth;
