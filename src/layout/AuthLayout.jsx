import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { usePageTitle } from "../hooks/usePageTitle";
import styles from "./AuthLayout.module.scss";
import authImg from "../assets/images/authImg.png";

function AuthLayout() {
  usePageTitle();

  return (
    <div className={styles.authLayout}>
      <div className={styles.authRow}>
        <div className={`d-none d-lg-block ${styles.imageCol}`} style={{ backgroundImage: `url(${authImg})` }} />
        <div className={styles.formCol}>
          <Container className={styles.formContainer}>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
