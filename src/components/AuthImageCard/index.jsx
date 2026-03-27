import React from "react";
import styles from "./index.module.scss";

const AuthImageCard = ({ imageSrc, altText }) => {
  return (
    <div className={styles["auth-image-card"]}>
      <img src={imageSrc} alt={altText} />

      <div className={styles["image-overlay"]} />

      <div className={styles["image-content"]} />
    </div>
  );
};

export default AuthImageCard;