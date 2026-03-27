import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset for:", email);
    // TODO: call password reset API
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>HearCog</div>

      <h2>Forgot Password</h2>
      <p className={styles.subtitle}>
        Enter your email address and we'll send you instructions to reset your
        password.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className={styles.submitBtn}>
          Send Reset Link
        </button>
      </form>

      <p className={styles.loginLink}>
        Remembered? <Link to="/auth/signin">Log in</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;