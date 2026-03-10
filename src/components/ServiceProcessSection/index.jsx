import { Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import { ScrollReveal } from "../ScrollAnimation";

function ServiceProcessSection({ section = {}, icons = {}, actions }) {
  const { title, description, cards = [] } = section;
  if (!title || !cards?.length) return null;

  return (
    <section className="section">
      <Container>
        <SectionHeading title={title} desc={description} />
        <Row className={`justify-content-center ${actions ? "mb-4" : ""}`}>
          {cards.map((card, i) => (
            <Col key={card.id || i} lg={cards.length === 5 && i >= 3 ? 6 : 4} md={6} className="mb-4">
              <ScrollReveal as="div" animation="fadeUp" delay={i * 0.12} className="card grayBg">
                {icons[card.icon] && (
                  <Image className="mb-4 iconAnimation" width={50} height={50} src={icons[card.icon]} alt={card.title} />
                )}
                <h5 className="fw-normal">{card.title}</h5>
                <p className="mb-0">{card.description}</p>
              </ScrollReveal>
            </Col>
          ))}
        </Row>
        {actions}
      </Container>
    </section>
  );
}

export default ServiceProcessSection;
