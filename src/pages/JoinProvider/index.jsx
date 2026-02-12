import Banner from "../../components/Banner";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Cta from "../../components/Cta";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading";
import { ScrollReveal } from "../../components/ScrollAnimation";
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

const valueIcons = [valueIcon1, valueIcon2, valueIcon3, valueIcon4, valueIcon5, valueIcon6];

const bannerData = {
  ...data.BANNER_DATA,
  image: bannerImg,
  stats: data.BANNER_DATA.stats?.map((stat, i) => ({
    ...stat,
    icon: [icon1, icon2][i] ?? stat.icon,
  })),
};

function JoinProvider() {
  return (
    <>
      <Banner data={bannerData} otherBanner provider />

      <section className="section">
        <Container>
          <SectionHeading
            title="Why Join HearCog?"
            desc="Joining HearCog helps professionals connect with patients in need of trusted hearing care. By joining our network, you increase visibility, gain access to more patients, and become part of a trusted and verified directory."
          />
          <Row className="justify-content-center mb-4">
            {data.VALUES_CARDS.map((card, i) => (
              <Col key={card.id} lg={i >= data.VALUES_CARDS.length - 2 ? 6 : 4} md={6} className="mb-4">
                <ScrollReveal as="div" animation="fadeUp" delay={i * 0.12} className="card grayBg">
                  <Image className="mb-4 iconAnimation" width={50} height={50} src={valueIcons[i]} alt={card.title} />
                  <h5 className="fw-normal">{card.title}</h5>
                  <p>{card.description}</p>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Button>Get Started Today</Button>
            <Button variant="outline">Meet Our Team</Button>
          </div>
        </Container>
      </section>
      <section className="section purpleBg mb-0">
        <Container>
          <SectionHeading title="Who Can Join?" desc="We welcome licensed hearing healthcare providers, including:" />
          <Row className="justify-content-center">
            {data.WHO_CAN_JOIN.map((item, i) => (
              <Col key={item.id} lg={item.fullWidth ? 12 : 4} md={6} className="mb-4">
                <ScrollReveal as="div" animation="fadeUp" delay={i * 0.12} className="card grayBg text-center">
                  <h5 className="fw-medium mb-0 text-purple">{item.title}</h5>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Testimonials noMargin />
      <FAQ />
      <Cta />
    </>
  );
}

export default JoinProvider;
