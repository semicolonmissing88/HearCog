import { Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import Box from "../Box";
import { ScrollReveal } from "../ScrollAnimation";
import img from "../../assets/images/competitive.png";
import medicalIcon from "../../assets/Icons/c1.svg";
import verifiedIcon from "../../assets/Icons/c2.svg";
import localIcon from "../../assets/Icons/c3.svg";

const BOXES = [
  { icon: medicalIcon, title: "Medical-First Approach", description: "We prioritize proper hearing evaluation and evidence-based care before any treatment decisions, ensuring patients receive the right guidance—not shortcuts." },
  { icon: verifiedIcon, title: "Verified Professional Network", description: "We connect patients with trusted, qualified hearing healthcare professionals, carefully selected to meet consistent quality and clinical standards." },
  { icon: localIcon, title: "Local Access, Better Care", description: "Our location-based matching helps patients find reliable hearing professionals nearby, reducing travel burden and supporting ongoing, personalized care." },
];

function OurCompetitive() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          title="Our Competitive Advantage"
          desc="A trusted, diagnosis-first approach that connects patients to verified hearing professionals and ensures quality, evidence-based care at every step."
        />
        <Row className="align-items-center flex-lg-row-reverse justify-content-between">
          <Col xl={5} lg={6} className="mb-lg-0 mb-4">
            <ScrollReveal animation="fadeLeft" delay={0.1}>
              <div className="imgBox">
                <Image src={img} alt="Our Competitive Advantage" />
              </div>
            </ScrollReveal>
          </Col>
          <Col lg={6}>
            <ScrollReveal animation="fadeRight" delay={0.2}>
              <Box data={BOXES} />
            </ScrollReveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurCompetitive;
