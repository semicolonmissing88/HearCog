import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // TODO: Call Firebase auth here
  };

  const handleGoogleSignIn = () => {
    console.log("Google Log In clicked");
    // TODO: Implement Google auth
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoImg} alt="HearCog" />
        <span>HearCog</span>
      </div>

      <h2>Log In</h2>
      <p className={styles.subtitle}>
        Please login to continue to your account.
      </p>

      <button className={styles.googleBtn} onClick={handleGoogleSignIn}>
        <FaGoogle size={18} />
        Log in with Google
      </button>

      <div className={styles.divider}>or</div>

      <form onSubmit={handleSubmit} className={styles.form}>
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

        <div className={styles.formOptions}>
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            Keep me logged in
          </label>

          <Link to="/auth/forgot-password" className={styles.forgot}>
            Forgot password?
          </Link>
        </div>

        <button type="submit" className={styles.signinBtn}>
          Log In
        </button>
      </form>

      <p className={styles.signupLink}>
        Need an account? <Link to="/auth/signup">Create one</Link>
      </p>
    </div>
  );
};

export default SignIn;