import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Signup = () => {
  useDocumentTitle("signup");
  const { user, handleSignUp } = useAuth();
  const { setLoader } = useData();
  let navigate = useNavigate();
  const initialVal = {
    name: "",
    email: "",
    password: "",
  };
  const [signup, setSignup] = useState(initialVal);
  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    await handleSignUp(signup);
    setSignup(initialVal);
    setLoader(false);
  };

  useEffect(() => {
    if (user.token) {
      navigate("/");
    }
  }, [user.token]);

  return (
    <section id="auth">
      <header className="section-heading">Register</header>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-grp">
          <label htmlFor="username">Name</label>
          <input
            name="name"
            id="username"
            value={signup.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={signup.email}
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
            value={signup.password}
            onChange={handleChange}
            required
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn primary">register</button>
      </form>
      <div className="sub-text text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary">
          Log in!
        </Link>
      </div>
    </section>
  );
};
