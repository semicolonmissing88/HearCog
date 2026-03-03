import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "../../../assets/images/header-light.svg";
import styles from "./index.module.scss";

function AuthBranding() {
  return (
    <Link to="/" className={styles.branding}>
      <Image src={logo} alt="HearCog" className={styles.logo} />
    </Link>
  );
}

export default AuthBranding;
