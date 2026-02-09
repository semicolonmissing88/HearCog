import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./index.module.scss";
import bannerImg from "../../assets/images/banner.png";
import phoneIcon from "../../assets/icons/phone.svg";
function Banner() {
  return (
    <div className={styles.banner}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="heading">Hear It Right. Know Where to Go.</h1>
            <p>A nationwide network connecting patients with qualified hearing-care professionals within 25 miles—ensuring personalized, trusted care close to home.</p>
            <div className={styles.cta}>
              <Button>Start Your Hearing Journey</Button>
              <div className={styles.contactInfo}>
                <div className={styles.icon}>
                  <Image src={phoneIcon} alt="Phone" />
                </div>
                <div>
                  <b>24/7 Hearing Care Assistance</b>
                  <small>0900-78601</small>
                </div>
              </div>
              <div className={styles.card}>
                
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="imgBox">
              <Image src={bannerImg} alt="Banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
