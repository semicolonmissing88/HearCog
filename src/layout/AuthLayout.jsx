import React from "react";
import { Outlet } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import AuthImageCard from "../components/AuthImageCard";
import placeholder from "../assets/images/dummy.png";
import styles from "./AuthLayout.module.scss";

/**
 * Layout used for all authentication-related routes (sign in, sign up, forgot
 * password, etc.).
 *
 * The left column shows a placeholder image card; the right column renders the
 * current form via <Outlet />.  All of the flows share the same basic
 * structure while the form content changes.
 */
function AuthLayout() {
  // hook sets document.title based on the active route
  usePageTitle();

  return (
    <div className={styles.authWrapper}>
      {/* left side: image placeholder */}
      <AuthImageCard
        imageSrc={placeholder} // temporary placeholder image from assets
        altText="Authentication illustration"
      />

      {/* right side: form content injected by router */}
      <div className={styles.formContainer}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
