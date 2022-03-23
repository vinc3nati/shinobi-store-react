import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Signup = () => {
  useDocumentTitle("signup");
  const { user, handleSignUp } = useAuth();
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

  const handleSubmit = async () => await handleSignUp(signup);

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
            onChange={handleChange}
            required
            type="email"
            placeholder="John Doe"
          />
        </div>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
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
