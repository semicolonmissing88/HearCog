import { Button, Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import { Link } from "react-router-dom";
const SERVICES = [
  {
    id: 1,
    title: "Assessment & Testing",
    intro:
      "Every hearing journey begins with proper evaluation. We connect patients with qualified professionals who conduct thorough assessments to understand the full scope of hearing and auditory health.",
    list: ["Detailed hearing history and symptom review", "Objective and subjective hearing tests", "Medical condition screening and risk identification"],
    closing: "These evaluations help ensure that hearing concerns are addressed correctly—before any treatment decisions are made.",
    buttonText: "Start a Hearing Assessment",
    buttonLink: "/assessment-testing",
    image: service1,
    imageAlt: "Assessment & Testing",
  },
  {
    id: 2,
    title: "Fitting & Verification",
    intro:
      "When hearing solutions are recommended, precision and verification are essential. Our network professionals follow best practices to ensure accuracy, comfort, and effectiveness.",
    list: ["Ear measurements and impressions when required", "Careful selection and programming of hearing solutions", "Objective verification using software-based measurements"],
    closing: "This process ensures that any recommended solution is clinically appropriate and properly validated.",
    buttonText: "Find a Verified Hearing Professional",
    buttonLink: "/find-provider",
    image: service2,
    imageAlt: "Fitting & Verification",
  },
  {
    id: 3,
    title: "Rehabilitation & Ongoing Care",
    intro:
      "Hearing care does not end with an initial solution. Long-term support and rehabilitation are critical for communication success and cognitive well-being.",
    list: ["Hearing rehabilitation and communication strategies", "Adjustments based on lifestyle and hearing changes", "Counseling and patient education"],
    closing: "This approach helps patients adapt effectively and maintain long-term hearing health.",
    buttonText: "Explore Ongoing Hearing Support",
    buttonLink: "/ongoing-hearing-support",
    image: service3,
    imageAlt: "Rehabilitation & Ongoing Care",
  },
  {
    id: 4,
    title: "Collaboration & Excellence",
    intro:
      "Quality hearing care relies on collaboration. Our platform supports coordination among hearing professionals, medical specialists, and referral sources to ensure consistent, high-standard care.",
    list: ["Evidence-based clinical decision support", "Outcome tracking and quality assurance", "Ongoing professional education and engagement"],
    closing: "By strengthening professional collaboration, we help improve care quality across the entire hearing healthcare journey.",
    buttonText: "Learn How We Support Quality Care",
    buttonLink: "/quality-care",
    image: service4,
    imageAlt: "Collaboration & Excellence",
  },
];

function ProfessionalServices() {
  return (
    <section className="section bg">
      <Container>
        <SectionHeading
          title="Comprehensive Professional Services"
          desc="Our verified network of hearing healthcare professionals delivers comprehensive, evidence-based hearing care focused on accurate diagnosis, appropriate treatment planning, and long-term outcomes."
        />
        {SERVICES.map((service, index) => (
          <Row
            key={service.id}
            className={`services same-height justify-content-between ${index % 2 === 0 ? "flex-lg-row-reverse" : ""}`}
          >
            <Col lg={5}>
              <div className="imgBox">
                <Image src={service.image} alt={service.imageAlt} />
              </div>
            </Col>
            <Col lg={6}>
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <ul className="list">
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{service.closing}</p>
              <Link to={service.buttonLink} className="btn btn-primary">{service.buttonText}</Link>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default ProfessionalServices;
