import Banner from "../../components/Banner";
import BgHolder from "../../components/BgHolder";
import CardSection from "../../components/CardSection";
import FindProvider from "../../components/FindProvider";
import OurCompetitive from "../../components/OurCompetitive";
import ProfessionalServices from "../../components/ProfessionalServices";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import Cta from "../../components/Cta";
import data from "./data.json";
import bannerImg from "../../assets/images/banner.png";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";

const bannerData = {
  ...data.BANNER_DATA,
  image: bannerImg,
};

const serviceImages = { "service1.png": service1, "service2.png": service2, "service3.png": service3, "service4.png": service4 };
const professionalServicesData = data.PROFESSIONAL_SERVICES.map((s) => ({
  ...s,
  image: serviceImages[s.image],
}));

function Home() {
  return (
    <>
      <Banner data={bannerData} />
      <BgHolder />
      <FindProvider />
      <ProfessionalServices services={professionalServicesData} />
      <OurCompetitive />
      <CardSection />
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}

export default Home;
