import { Col, Container, Row } from "react-bootstrap";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";

function ServiceStats({ stats = [] }) {
  if (!stats?.length) return null;

  return (
    <section className="section">
      <Container>
        <Row className={styles.statsRow}>
          {stats.map((item, index) => (
            <Col key={item.id || index} lg={3} md={6} className={styles.statCol}>
              <ScrollReveal animation="fadeUp" delay={index * 0.1}>
                <div className={styles.statItem}>
                  <h2 className={styles.value}>{item.value}</h2>
                  <div className={styles.description}>{item.description}</div>
                </div>
              </ScrollReveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServiceStats;
