import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";
import phoneIcon from "../../assets/Icons/phone.svg";
import user1 from "../../assets/images/user1.svg";
import { FaLinkedin } from "react-icons/fa";

function Banner({ data, otherBanner }) {
  if (!data) return null;

  const { heading, description, buttonText, secondButtonText, contactTitle, contactPhone, image, imageAlt, stats } = data;

  return (
    <div className={styles.banner + " " + (otherBanner ? styles.customBanner : "")}>
      <Container>
        <Row className="align-items-center flex-lg-row-reverse">
          <Col xl={6} lg={5} className="mb-lg-0 mb-4">
            <ScrollReveal className={`imgBox ${otherBanner ? styles.otherBanner : ""}`} animation="fadeLeft" delay={0.2}>
              <Image src={image} alt={imageAlt} />
            </ScrollReveal>
          </Col>
          <Col xl={6} lg={7}>
            <ScrollReveal as="h1" className="heading" animation="fadeUp">
              {heading}
            </ScrollReveal>
            <ScrollReveal as="p" className={`mb-4 ${styles.letterSpacing1}`} animation="fadeUp" delay={0.1}>
              {description}
            </ScrollReveal>
            <ScrollReveal className={styles.cta} animation="fadeUp" delay={0.2}>
              <Button>{buttonText}</Button>
              {secondButtonText ? (
                <Button variant="outline" className="ms-2">
                  {secondButtonText}
                </Button>
              ) : (
                <>
                  <div className={styles.contactInfo}>
                    <div className={styles.icon}>
                      <Image src={phoneIcon} alt="Phone" />
                    </div>
                    <div>
                      <b>{contactTitle}</b>
                      <small>{contactPhone}</small>
                    </div>
                  </div>
                </>
              )}
              <div className={styles.card} />
            </ScrollReveal>
            {otherBanner ? (
              ""
            ) : (
              <ScrollReveal animation="fadeUp" delay={0.3}>
                <Card className={styles.bannerCard}>
                  <div className={styles.bannerCardContent}>
                    <Image width={50} height={50} src={user1} alt="" />
                    <div>
                      <div className="mb-0 fw-medium">Thomas daniel</div>
                      <small className="text-muted fw-light">Sr Hear Cog</small>
                    </div>
                  </div>
                  <small  className="text-muted fw-light">Top-quality hearing care delivered by qualified specialists—trusted, precise, and patient-focused.</small>
                  <FaLinkedin className={styles.linkedinIcon} />

                </Card>
              </ScrollReveal>
            )}

            {otherBanner && stats && stats.length > 0 && (
              <ScrollReveal className={styles.cta + " " + styles.otherBannerCta} animation="fadeUp" delay={0.3}>
                {stats.map((item, index) => (
                  <div key={index} className={styles.iconBox}>
                    <Image src={item.icon} alt={item.line1 || ""} />
                    <div>
                      <p>{item.line1}</p>
                      <p>{item.line2}</p>
                    </div>
                  </div>
                ))}
              </ScrollReveal>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
