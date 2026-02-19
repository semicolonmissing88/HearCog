import { memo, useEffect, useRef, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ScrollReveal } from "../ScrollAnimation";
import icon1 from "../../assets/Icons/s1.svg";
import icon2 from "../../assets/Icons/s2.svg";
import icon3 from "../../assets/Icons/s3.svg";
import icon4 from "../../assets/Icons/s4.svg";
import styles from "./index.module.scss";

const CARD_STAGGER_DELAY = 0.18;
const COUNT_DURATION = 2400;

function parseCountConfig(title) {
  const rangeMatch = title.match(/^(\d+)-(\d+)(.*)$/);
  if (rangeMatch) {
    const [, start, end, suffix] = rangeMatch;
    return { start: +start, end: +end, prefix: start + "-", suffix: suffix || "" };
  }
  const simpleMatch = title.match(/^(\d+)(.*)$/);
  if (simpleMatch) {
    const [, end, suffix] = simpleMatch;
    return { start: 0, end: +end, prefix: "", suffix: suffix || "" };
  }
  return null;
}

const CountUp = memo(function CountUp({ title }) {
  const cfg = parseCountConfig(title);
  const ref = useRef(null);
  const [display, setDisplay] = useState(cfg ? String(cfg.start) + cfg.suffix : title);
  const started = useRef(false);

  useEffect(() => {
    const config = parseCountConfig(title);
    if (!config || started.current) return;
    const el = ref.current;
    if (!el) return;
    const { start, end, prefix, suffix } = config;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const range = end - start;
        const startTime = performance.now();

        const tick = (now) => {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / COUNT_DURATION, 1);
          const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          const value = Math.round(start + range * eased);
          setDisplay(prefix + value + suffix);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [title]);

  return <h2 ref={ref}>{display}</h2>;
});

const data = [
  { id: 1, icon: icon1, title: "48M", description: "Adults in the U.S. Living with Hearing Loss" },
  { id: 2, icon: icon2, title: "2-5x", description: "Increased Dementia Risk with Untreated Hearing Loss" },
  { id: 3, icon: icon3, title: "30-40%", description: "Faster Cognitive Decline with Untreated Hearing Loss" },
  { id: 4, icon: icon4, title: "32-48%", description: "Risk Reduction with Hearing Aid Use" },
];

function BgHolder() {
  return (
    <section className="section">
      <Container>
        <div className={styles.bgHolder}>
          <Row className="mt-lg-0 mt-4">
            {data.map((item, index) => (
              <Col lg={3} sm={6} className="mb-lg-0 mb-4" key={item.id}>
                <ScrollReveal
                  as="div"
                  animation="fadeUp"
                  delay={index * CARD_STAGGER_DELAY}
                  className={"card " + styles.customCard}
                >
                  <div className={styles.icon}>
                    <Image src={item.icon} alt={item.title} />
                  </div>
                  <CountUp title={item.title} />
                  <p className="mb-0">{item.description}</p>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default BgHolder;
