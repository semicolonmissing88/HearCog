import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ScrollReveal } from "../../components/ScrollAnimation";
import Cta from "../../components/Cta";
import data from "../Search/data.json";
import provider1 from "../../assets/images/provider1.png";
import provider2 from "../../assets/images/provider2.png";
import provider3 from "../../assets/images/provider3.png";
import provider4 from "../../assets/images/provider4.png";
import provider5 from "../../assets/images/provider5.png";
import provider6 from "../../assets/images/provider6.png";
import provider7 from "../../assets/images/provider7.png";
import provider8 from "../../assets/images/provider8.png";
import provider9 from "../../assets/images/provider9.png";
import provider10 from "../../assets/images/provider10.png"
import dummy from "../../assets/images/dummy.png";
import styles from "./index.module.scss";

const providerImages = {
  "provider1.png": provider1,
  "provider2.png": provider2,
  "provider3.png": provider3,
  "provider4.png": provider4,
  "provider5.png": provider5,
  "provider6.png": provider6,
  "provider7.png": provider7,
  "provider8.png": provider8,
  "provider9.png": provider9,
  "provider10.png": provider10,
  "dummy.png": dummy,
};

function ProviderDetail() {
  const { slug } = useParams();
  const provider = data.providers.find(
    (item) => item.slug === slug
  );

  useEffect(() => {
    if (provider) {
      document.title = `HearCog - ${provider.name}`;
    }
  }, [provider]);

  if (!provider) {
    return <Navigate to="/search" replace />;
  }

  const imageSrc = providerImages[provider.image] ?? dummy;

  return (
    <>
      <section className={`section ${styles.profileSection}`}>
        <Container>
          <ScrollReveal animation="fadeUp">
            <Row className="gx-5 align-items-start">
              <Col lg={5}>
                <div className={styles.profileCard}>
                  <div className={styles.imageWrapper}>
                    <Image src={imageSrc} alt={provider.name} className={styles.profileImage} />
                  </div>
                  <div className={styles.profileBody}>
                    <div className={styles.profileHeader}>
                      <h2 className="heading">{provider.name}</h2>
                      <p className={styles.credentials}>{provider.credentials}</p>
                      <p className={styles.clinicName}>{provider.clinicName}</p>
                      <span className={styles.badge}>{provider.specialty}</span>
                    </div>
                    <div className={styles.profileMeta}>
                      <div>
                        <p className={styles.metaLabel}>Provider Type</p>
                        <p>{provider.type}</p>
                      </div>
                      <div>
                        <p className={styles.metaLabel}>Location</p>
                        <p>{provider.city}</p>
                      </div>
                    </div>
                    <Button as={Link} to="/contact" className={styles.bookButton}>
                      Book a Consultation
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className={styles.detailContent}>
                  <div className={styles.sectionBlock}>
                    <h3>About {provider.name.split(" ")[provider.name.split(" ").length - 1]}</h3>
                    <p className="mb-0">
                      {provider.name} is a certified {provider.credentials} specializing in {provider.specialty.toLowerCase()}. 
                      With expertise in {provider.type}, they provide compassionate and evidence-based care to help patients achieve better hearing health and quality of life.
                    </p>
                  </div>
                  <div className={styles.sectionBlock}>
                    <h4>Specialization</h4>
                    <p className="mb-0">{provider.specialty}</p>
                  </div>
                  <div className={styles.sectionBlock}>
                    <h4>Credentials</h4>
                    <p className="mb-0">{provider.credentials}</p>
                  </div>
                  <div className={styles.sectionBlock}>
                    <h4>Provider Details</h4>
                    <dl className={styles.detailsList}>
                      <dt>Type</dt>
                      <dd>{provider.type}</dd>
                      <dt>Clinic</dt>
                      <dd>{provider.clinicName}</dd>
                      <dt>Location</dt>
                      <dd>{provider.city}</dd>
                      <dt>Language</dt>
                      <dd>{provider.language}</dd>
                    </dl>
                  </div>
                </div>
              </Col>
            </Row>
          </ScrollReveal>
        </Container>
      </section>
      <Cta />
    </>
  );
}

export default ProviderDetail;
