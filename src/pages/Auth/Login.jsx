import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Login = () => {
  useDocumentTitle("login");
  const { user, handleLogin } = useAuth();
  const { setLoader } = useData();
  let navigate = useNavigate();
  const initialVal = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialVal);

  const testLogin = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    e.preventDefault();
    setLoader(true);
    await handleLogin(login);
    setLogin(initialVal);
    setLoader(false);
  };

  useEffect(() => {
    if (user.token) {
      navigate("/");
    }
  }, [user.token]);

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
        onClick={() => handleLogin(testLogin)}
      >
        Guest Login
      </span>
      <div className="sub-text text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-secondary">
          Sign up!
        </Link>
      </div>
    </section>
  );
};
