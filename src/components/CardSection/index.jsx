import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";
import img1 from "../../assets/images/card1.png";
import img2 from "../../assets/images/card2.png";

const ROW_DELAY = 0.15;

const LIGHT_CARD = {
  title: "Problems in Hearing Healthcare",
  intro: "Based on patient experiences and industry gaps, the following key problems exist in current hearing care systems:",
  image: img1,
  imageAlt: "Card 1",
  titleClass: "text-red",
  cardClass: styles.lightCard,
};

const LIGHT_CARD_GREEN = {
  ...LIGHT_CARD,
  title: "Our Solutions",
  intro: "We address these challenges with a structured, diagnosis-first platform designed to restore trust and quality in hearing healthcare.",
  titleClass: "text-green",
  cardClass: styles.greenLight,
  image: img2,
  imageAlt: "Card 2",
};

const LIST_ITEMS = [
  { heading: "Lack of Proper Medical Evaluation", text: "Patients often skip comprehensive hearing assessments and rely on quick or online solutions.", level: 3 },
  { heading: "Difficulty Identifying Qualified Professionals", text: "Patients struggle to find verified and trustworthy hearing healthcare providers.", level: 4 },
  { heading: "Inconsistent Quality of Care", text: "Care standards vary widely, leading to uncertainty and poor outcomes.", level: 4 },
  { heading: "Broken Referral Pathways", text: "ENTs, PCPs, and insurers lack reliable hearing care referral networks.", level: 4 },
];

const LIST_ITEMS_ROW2 = [
  { heading: "Medical-First, Evidence-Based Care", text: "We prioritize proper evaluation and screening before any treatment decisions.", level: 4 },
  { heading: "Verified Professional Network", text: "Patients are connected only with qualified, vetted hearing healthcare professionals.", level: 4 },
  { heading: "Trusted Referral System", text: "We enable reliable referrals for patients, physicians, and insurers.", level: 4 },
  { heading: "Improved Transparency & Outcomes", text: "Clear information, professional standards, and outcome-focused care guide every step.", level: 4 },
];

const ROWS = [
  { reverse: false, rowClass: "mb-lg-5 mb-4", lightCard: LIGHT_CARD, listItems: LIST_ITEMS },
  { reverse: true, rowClass: "", lightCard: LIGHT_CARD_GREEN, listItems: LIST_ITEMS_ROW2 },
];

function CardSection() {
  return (
    <section className="section">
      <Container>
        {ROWS.map((row, index) => {
          const baseDelay = index * ROW_DELAY;
          const firstZoom = index === 0 ? "zoomIn" : "zoomOut";
          const secondZoom = index === 0 ? "zoomOut" : "zoomIn";
          return (
            <Row key={index} className={`align-items-stretch justify-content-between ${row.rowClass} ${row.reverse ? "flex-lg-row-reverse" : ""}`}>
              <Col lg={5} className="mb-lg-0 mb-4">
                <ScrollReveal animation={firstZoom} delay={baseDelay} as="div" className={`${styles.card} ${row.lightCard.cardClass}`}>
                  <h2 className={row.lightCard.titleClass}>{row.lightCard.title}</h2>
                  <p>{row.lightCard.intro}</p>
                  <div className={`imgBox ${styles.imgBox}`}>
                    <Image src={row.lightCard.image} alt={row.lightCard.imageAlt} />
                  </div>
                </ScrollReveal>
              </Col>
              <Col lg={7}>
                <ScrollReveal animation={secondZoom} delay={baseDelay + 0.1} as="div" className={`${styles.card} ${index === 1 ? styles.green : ""}`}>
                    {row.listItems.map((item, i) => {
                      const HeadingTag = `h${item.level}`;
                      return (
                        <div key={i}>
                          <HeadingTag>{item.heading}</HeadingTag>
                          <p>{item.text}</p>
                        </div>
                      );
                    })}
                </ScrollReveal>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
}

export default CardSection;
