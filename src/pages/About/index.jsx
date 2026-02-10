import Banner from "../../components/Banner";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Cta from "../../components/Cta";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading";
import data from "./data.json";
import bannerImg from "../../assets/images/dummy.png";
import icon1 from "../../assets/Icons/a1.svg";
import icon2 from "../../assets/Icons/a2.svg";
import valueIcon1 from "../../assets/Icons/i1.svg";
import valueIcon2 from "../../assets/Icons/i2.svg";
import valueIcon3 from "../../assets/Icons/i3.svg";
import valueIcon4 from "../../assets/Icons/i4.svg";
import valueIcon5 from "../../assets/Icons/i5.svg";
import valueIcon6 from "../../assets/Icons/i6.svg";
import aboutIcon from "../../assets/Icons/abt1.svg";
import aboutIcon2 from "../../assets/Icons/abt2.svg";
import aboutIcon3 from "../../assets/Icons/abt3.svg";
import aboutImg from "../../assets/images/abt1.png";
import ProfessionalServices from "../../components/ProfessionalServices";


const valueIcons = [valueIcon1, valueIcon2, valueIcon3, valueIcon4, valueIcon5, valueIcon6];

const whyIcons = { "abt1.svg": aboutIcon, "abt2.svg": aboutIcon2, "abt3.svg": aboutIcon3 };
const whyImages = { "abt1.png": aboutImg };

const bannerData = {
  ...data.BANNER_DATA,
  image: bannerImg,
  stats: data.BANNER_DATA.stats?.map((stat, i) => ({
    ...stat,
    icon: [icon1, icon2][i] ?? stat.icon,
  })),
};

const serviceImages = { "dummy.png": bannerImg };
const professionalServicesData = (data.PROFESSIONAL_SERVICES ?? data.WHY_HEARCOG?.PROFESSIONAL_SERVICES ?? []).map((s) => ({
  ...s,
  image: serviceImages[s.image],
}));

function About() {
  return (
    <>
      <Banner data={bannerData} otherBanner />
      <section className="section">
        <Container>
          <SectionHeading
            title="Driven by Purpose, Guided by Vision"
            desc="Every decision we make, every innovation we pursue, and every patient we serve is rooted in our commitment to excellence and compassionate care."
          />
          <Row>
            {data.ABOUT_CARDS.map((card) => (
              <Col key={card.id} lg={6}>
                <Card>
                  <div className="badge purple mb-4">{card.badge}</div>
                  <h2>{card.title}</h2>
                  {card.paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section purpleBg">
        <SectionHeading title="Values That Drive Us" desc="The principles that shape every decision we make and every patient interaction we have." />
        <Container>
          <Row>
            {data.VALUES_CARDS.map((card, i) => (
              <Col key={card.id} lg={4} className="mb-4">
                <Card>
                  <Image className="mb-4 iconAnimation" width={50} height={50} src={valueIcons[i]} alt={card.title} />
                  <h5 className="fw-normal">{card.title}</h5>
                  <p>{card.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section">
        <SectionHeading
          title={data.WHY_HEARCOG.sectionTitle}
          desc={data.WHY_HEARCOG.sectionDesc}
        />
        <Container>
          <Row className="align-items-stretch">
            <Col lg={6} className="mb-4 d-flex flex-lg-column justify-content-between">
              {data.WHY_HEARCOG.leftCards.map((card, idx) => (
                <Card key={card.id} className={idx === 0 ? "mb-4" : ""} style={{ minHeight: "unset" }}>
                  <Image className="mb-4 iconAnimation" width={50} height={50} src={whyIcons[card.icon]} alt={card.title} />
                  <h5 className="fw-normal">{card.title}</h5>
                  {card.intro && <p>{card.intro}</p>}
                  {card.listItems?.length > 0 && (
                    <ul className="list">
                      {card.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {card.paragraphs?.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </Card>
              ))}
            </Col>
            <Col lg={6} className="mb-4 d-flex flex-lg-column justify-content-between">
              <div className="imgBox mb-4">
                <Image src={whyImages[data.WHY_HEARCOG.rightImage]} alt="" />
              </div>
              {data.WHY_HEARCOG.rightCards.map((card) => (
                <Card key={card.id} style={{ minHeight: "unset" }}>
                  <Image className="mb-4 iconAnimation" width={50} height={50} src={whyIcons[card.icon]} alt={card.title} />
                  <h5 className="fw-normal">{card.title}</h5>
                  {card.intro && <p>{card.intro}</p>}
                  {card.listItems?.length > 0 && (
                    <ul className="list">
                      {card.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {card.paragraphs?.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      {professionalServicesData.length > 0 && <ProfessionalServices aboutUs services={professionalServicesData} />}
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}

export default About;
