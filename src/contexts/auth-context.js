import { createContext, useState, useContext, useEffect } from "react";
import { loginUser, signupUser } from "../utilities/API_REQUESTS";
import { useNavigate } from "react-router-dom";
const key = "SHINOBI_USER";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(key)) || {});
  let navigate = useNavigate();

  const handleLogin = async ({ email, password, from }) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await loginUser({ email, password });
      if (encodedToken) {
        localStorage.setItem(
          key,
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setUser(JSON.parse(localStorage.getItem(key)));
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async ({ name, email, password, from }) => {
    console.log(from);
    try {
      const {
        data: { createdUser, encodedToken },
      } = await signupUser({ name, email, password });
      if (encodedToken) {
        localStorage.setItem(
          key,
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setUser(JSON.parse(localStorage.getItem(key)));
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem(key);
    setUser({});
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleLogOut, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth Context was not created");
  return context;
};

export { useAuth, AuthProvider };
