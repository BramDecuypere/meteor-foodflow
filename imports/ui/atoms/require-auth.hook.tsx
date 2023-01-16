import { useEffect } from "react";
import useAuth from "../hooks/auth.hook";

const RequireAuth = ({ children }: any) => {
  const { user } = useAuth();

  useEffect(() => {
    console.log(
      "🚀 ~ file: require-auth.hook.tsx:6 ~ RequireAuth ~ user",
      user
    );
  }, [user]);

  return children;
};

export default RequireAuth;
