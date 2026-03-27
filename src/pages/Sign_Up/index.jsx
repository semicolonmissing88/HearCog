import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up data:", formData);
    // TODO: call registration API
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>HearCog</div>

      <h2>Create Account</h2>
      <p className={styles.subtitle}>
        Fill the information below to get started.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm password"
          value={formData.confirm}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.submitBtn}>
          Sign Up
        </button>
      </form>

      <p className={styles.loginLink}>
        Already have an account? <Link to="/auth/signin">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;