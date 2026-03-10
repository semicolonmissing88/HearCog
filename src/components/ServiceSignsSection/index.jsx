import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../ScrollAnimation";

function ServiceSignsSection({ section = {}, icons = {} }) {
  const { heading, listItems = [], cards = [] } = section;
  if (!heading && !listItems?.length && !cards?.length) return null;

  return (
    <section className="section bg">
      <Container>
        <Row className="align-items-center justify-content-between">
          {listItems?.length > 0 && (
            <Col lg={5} className="mb-lg-0 mb-4">
              <ScrollReveal animation="fadeRight">
                <h2 className="heading">{heading}</h2>
                <ul className="check-list mb-2">
                  {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Button as={Link} to="/signup">Book Your Evaluation</Button>
              </ScrollReveal>
            </Col>
          )}
          {cards?.length > 0 && (
            <Col lg={6}>
              <Row>
                <Col lg={6} className="mb-4">
                  {cards.slice(0, 2).map((card, i) => (
                    <ScrollReveal key={card.id || i} animation="fadeUp" delay={i * 0.1}>
                      <Card className={`border-0 ${i < 1 ? "mb-4" : ""}`}>
                        {icons[card.icon] && (
                          <Image width={50} height={50} src={icons[card.icon]} alt={card.title} className="mb-3" />
                        )}
                        <h6 className="fw-medium">{card.title}</h6>
                        <p className="mb-0">{card.description}</p>
                      </Card>
                    </ScrollReveal>
                  ))}
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-center mb-4">
                  {cards[2] && (
                    <ScrollReveal animation="fadeUp" delay={0.2}>
                      <Card className="border-0">
                        {icons[cards[2].icon] && (
                          <Image width={50} height={50} src={icons[cards[2].icon]} alt={cards[2].title} className="mb-3" />
                        )}
                        <h6 className="fw-medium">{cards[2].title}</h6>
                        <p className="mb-0">{cards[2].description}</p>
                      </Card>
                    </ScrollReveal>
                  )}
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default ServiceSignsSection;
