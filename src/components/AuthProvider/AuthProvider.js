import { createContext, useState } from "react";

/* Router */
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  /* Get Token from localStorage */
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    return userToken;
  };

  const [token, setToken] = useState(getToken());

  /* Save Token to localStorage */
  const handleLogin = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    setToken(token);

    const origin = location.state?.from?.pathname || "/";
    navigate(origin);
  };

  /* Remove Token from localStorage */
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };

  const value = {
    token,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
