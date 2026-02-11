import { Container, Image } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className="logo">
            <Image src={logo} alt="Logo" />
          </div>
          <ul className={`list ${styles.footerNav}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <p>All rights reserved ® <Link to="/">hearcog.com</Link>  | Links <Link to="/terms-and-conditions">Terms and conditions</Link> apply!</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
