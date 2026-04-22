import { useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";

const FAQ_DATA = [
  {
    id: 1,
    number: 1,
    question: "Do you sell or provide hearing instruments?",
    answer: "No. We do not sell or manufacture hearing instruments. Our role is to connect individuals with qualified hearing healthcare professionals who evaluate, diagnose, and recommend appropriate solutions if needed.",
    type: "faq",
  },
  {
    id: 2,
    number: 2,
    question: "How do you select hearing care professionals on your platform?",
    answer: "We vet all professionals against consistent quality and clinical standards before they join our network.",
    type: "faq",
  },
  {
    id: 3,
    number: 3,
    question: "Can I find a hearing professional near me?",
    answer: "Yes. Our location-based matching helps you find qualified hearing care professionals within your area.",
    type: "faq",
  },
  {
    id: 4,
    number: 4,
    question: "Not sure - Connect me to operator",
    type: "cta",
  },
];

function FAQ() {
  const defaultKey = FAQ_DATA[0]?.id ?? null;
  const [activeKey, setActiveKey] = useState(defaultKey);

  return (
    <section className="section">
      <Container>
        <SectionHeading
          small
          title="Frequently Asked Questions"
          desc="Clear answers to common questions about how we connect patients with trusted hearing care professionals."
        />
        <ScrollReveal animation="zoomOut" delay={0.1}>
          <Accordion
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k ?? null)}
            className={styles.accordion}
          >
          {FAQ_DATA.map((item) => {
            const isOpen = activeKey === item.id;
            return (
              <Accordion.Item
                key={item.id}
                eventKey={item.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <Accordion.Header className={styles.trigger}>
                  <span className={styles.question}>
                    {item.type === "faq" ? `${item.number}. ${item.question}` : item.question}
                  </span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                    {isOpen ? <FaPlus /> : <FaMinus />}
                  </span>
                </Accordion.Header>
                <Accordion.Body className={styles.body}>
                  {item.type === "faq" && item.answer && (
                    <p className={styles.answer}>{item.answer}</p>
                  )}
                  {item.type === "cta" && (
                    <p className={styles.answer}>Connect to an operator for assistance.</p>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
          </Accordion>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default FAQ;
