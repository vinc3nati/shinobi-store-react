import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Login = ({ title }) => {
  useDocumentTitle(title);
  const { user, handleLogin } = useAuth();
  const { setLoader } = useData();
  const initialVal = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialVal);
  const location = useLocation();
  const from = location.state?.from || "/";

  const testLogin = {
    email: "vinit@shinobistore.com",
    password: "vinitKanse123",
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    e.preventDefault();
    setLoader(true);
    await handleLogin({ ...login, from });
    setLogin(initialVal);
    setLoader(false);
  };

  return (
    <section id="auth">
      <header className="section-heading">Login</header>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={login.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="example@example.com"
          />
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            value={login.password}
            onChange={handleChange}
            required
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="login-helper">
          <div className="checkbox-grp">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <button className="btn primary">login</button>
      </form>
      <span
        className="text-underline text-primary text-center"
        style={{ cursor: "pointer" }}
        onClick={() => handleLogin({ ...testLogin, from })}
      >
        Guest Login
      </span>
      <div className="sub-text text-center">
        Don't have an account?{" "}
        <Link to="/signup" state={{ from }} className="text-secondary">
          Sign up!
        </Link>
      </div>
    </section>
  );
};
