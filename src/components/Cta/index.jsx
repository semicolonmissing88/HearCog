import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";

function Cta() {
  return (
    <section className={`section ${styles.cta}`}>
      <Container>
        <ScrollReveal animation="zoomIn">
          <div className={styles.content}>
            <h2>
              Ready to Join the <span>HearCog</span> Network?
            </h2>
            <p>Whether you're a patient seeking quality care or a professional ready to grow your practice, we're here to connect you.</p>
            <div className={styles.buttons}>
              <Button variant="secondary" as={Link} to="/signup">Get Started</Button>
              <Button variant="outline-primary">Schedule a Demo</Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Cta;
