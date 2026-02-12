import Banner from "../../components/Banner";
import HowWeWorkSection from "../../components/HowWeWorkSection";
import FAQ from "../../components/FAQ";
import Cta from "../../components/Cta";
import data from "./data.json";
import Testimonials from "../../components/Testimonials";

const bannerData = {
  ...data.BANNER_DATA,
};

function HowItWorks() {
  return (
    <>
      <Banner data={bannerData} otherBanner noImage />
      <HowWeWorkSection />
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}

export default HowItWorks;
