import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Banner from "../../components/Banner";
import ServiceStats from "../../components/ServiceStats";
import ServiceProcessSection from "../../components/ServiceProcessSection";
import Cta from "../../components/Cta";
import FAQ from "../../components/FAQ";
import data from "../Home/data.json";
import ser1 from "../../assets/Icons/ser1.svg";
import ser2 from "../../assets/Icons/ser2.svg";
import ser3 from "../../assets/Icons/ser3.svg";
import ser4 from "../../assets/Icons/ser4.svg";
import ser5 from "../../assets/Icons/ser5.svg";
import ser6 from "../../assets/Icons/ser6.svg";
import ser7 from "../../assets/Icons/ser7.svg";
import ser8 from "../../assets/Icons/ser8.svg";
import ser9 from "../../assets/Icons/ser9.svg";
import ser10 from "../../assets/Icons/ser10.svg";
import ser11 from "../../assets/Icons/ser11.svg";
import ser12 from "../../assets/Icons/ser12.svg";
import ser13 from "../../assets/Icons/ser13.svg";
import ser14 from "../../assets/Icons/ser14.svg";
import ser15 from "../../assets/Icons/ser15.svg";
import ser16 from "../../assets/Icons/ser16.svg";
import ser17 from "../../assets/Icons/ser17.svg";
import ser18 from "../../assets/Icons/ser18.svg";
import ser19 from "../../assets/Icons/ser19.svg";
import ser20 from "../../assets/Icons/ser20.svg";
import ser21 from "../../assets/Icons/ser21.svg";
import ser22 from "../../assets/Icons/ser22.svg";
import ser23 from "../../assets/Icons/ser23.svg";
import ser24 from "../../assets/Icons/ser24.svg";
import ser25 from "../../assets/Icons/ser25.svg";
import ser26 from "../../assets/Icons/ser26.svg";
import ser27 from "../../assets/Icons/ser27.svg";
import ser28 from "../../assets/Icons/ser28.svg";
import ser29 from "../../assets/Icons/ser29.svg";
import ser30 from "../../assets/Icons/ser30.svg";
import ser31 from "../../assets/Icons/ser31.svg";
import ServiceSignsSection from "../../components/ServiceSignsSection";

const serIcons = {
  "ser1.svg": ser1,
  "ser2.svg": ser2,
  "ser3.svg": ser3,
  "ser4.svg": ser4,
  "ser5.svg": ser5,
  "ser6.svg": ser6,
  "ser7.svg": ser7,
  "ser8.svg": ser8,
  "ser9.svg": ser9,
  "ser10.svg": ser10,
  "ser11.svg": ser11,
  "ser12.svg": ser12,
  "ser13.svg": ser13,
  "ser14.svg": ser14,
  "ser15.svg": ser15,
  "ser16.svg": ser16,
  "ser17.svg": ser17,
  "ser18.svg": ser18,
  "ser19.svg": ser19,
  "ser20.svg": ser20,
  "ser21.svg": ser21,
  "ser22.svg": ser22,
  "ser23.svg": ser23,
  "ser24.svg": ser24,
  "ser25.svg": ser25,
  "ser26.svg": ser26,
  "ser27.svg": ser27,
  "ser28.svg": ser28,
  "ser29.svg": ser29,
  "ser30.svg": ser30,
  "ser31.svg": ser31
  
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = data.PROFESSIONAL_SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `HearCog - ${service.title}`;
    }
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const bannerData = {
    heading: service.title,
    description: service.intro,
  };

  return (
    <>
      <Banner data={bannerData} otherBanner noImage serviceId={slug} />
      <ServiceStats stats={service.stats} />
      <ServiceProcessSection section={service.detailSection} icons={serIcons} />
      <ServiceSignsSection section={service.signsSection} icons={serIcons} />
      <FAQ />
      <Cta />
    </>
  );
}

export default ServiceDetail;
