import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";

const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  /* If the user isn't authenticated go to Login page */
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
