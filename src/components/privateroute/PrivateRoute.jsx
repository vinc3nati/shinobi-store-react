import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

export const PrivateRoute = ({ children }) => {
  const {
    user: { token },
  } = useAuth();
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
};
