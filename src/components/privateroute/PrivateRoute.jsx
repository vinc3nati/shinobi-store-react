import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

export const PrivateRoute = ({ path, children }) => {
  const {
    user: { token },
  } = useAuth();

  return token ? (
    children
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
