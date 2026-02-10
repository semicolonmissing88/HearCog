import { Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function ProfessionalServices({ services = [],aboutUs }) {
  return (
    <section className="section bg">
      <Container>
        <SectionHeading
          title="Comprehensive Professional Services"
          desc="Our verified network of hearing healthcare professionals delivers comprehensive, evidence-based hearing care focused on accurate diagnosis, appropriate treatment planning, and long-term outcomes."
        />
        {services.map((service, index) => (
          <Row
            key={service.id}
            className={`services justify-content-between ${index % 2 === 0 ? "flex-lg-row-reverse" : ""} ${aboutUs ? "align-items-center" : "same-height"}`}
          >
            <Col lg={5}>
              <div className="imgBox">
                <Image src={service.image} alt={service.imageAlt} />
              </div>
            </Col>
            <Col lg={6}>
            {
              aboutUs && 
              <div className="badge light mb-4">{service.badgeText}</div>
            }
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <ul className={`list ${aboutUs && "check-list"}`}>
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{service.closing}</p>
              <Link to={service.buttonLink} className={`${aboutUs ? "arrowBtn" : "btn btn-primary"}`}>{service.buttonText} {aboutUs && <BsArrowRight />}</Link>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default ProfessionalServices;
