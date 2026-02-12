import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import Tabs from "../Tabs";
import { ScrollReveal } from "../ScrollAnimation";
import shapeImg from "../../assets/images/h1.svg";
import shapeImg2 from "../../assets/images/h2.svg";
import shapeImg3 from "../../assets/images/h3.svg";
import shapeImg4 from "../../assets/images/h4.svg";
import shapeImg5 from "../../assets/images/h5.svg";
import provider1 from "../../assets/images/p1.svg";
import provider2 from "../../assets/images/p2.svg";
import provider3 from "../../assets/images/p3.svg";
import provider4 from "../../assets/images/p4.svg";
import provider5 from "../../assets/images/p5.svg";
import styles from "./index.module.scss";

const SHAPE_IMGS = [
  shapeImg,
  shapeImg2,
  shapeImg3,
  shapeImg4,
  shapeImg5,
];

const PROVIDER_IMGS = [
  provider1,
  provider2,
  provider3,
  provider4,
  provider5,
];
const TABS = [
  { id: "patients", label: "For Patients" },
  { id: "providers", label: "For Providers" },
];

const STEPS_PATIENTS = [
  { id: 1, left: "image", right: "text", title: "Search by Location", text: "Enter your city or ZIP code to find verified hearing healthcare providers within a 25-mile radius. This keeps care local and accessible." },
  { id: 2, left: "text", right: "image", title: "Explore Verified Providers", text: "Every provider on HearCog is reviewed and approved before being listed. Patients can view key details such as specialties, practice name and distance." },
  { id: 3, left: "image", right: "text", title: "Understand What They Offer", text: "Profiles highlight the provider's background, hearing services, and approach to proper evaluation and treatment. This helps patients know what to expect before scheduling." },
  { id: 4, left: "text", right: "image", title: "Reach Out Directly", text: "Once a patient finds the right provider, they can contact the practice directly to schedule an appointment or send a message from their page." },
  { id: 5, left: "image", right: "text", title: "Get Proper Hearing Healthcare", text: "Patients receive care from a verified provider who follows evidence-based practices, ensuring accurate evaluations and appropriate recommendations." },
];

const STEPS_PROVIDERS = [
  { id: 1, left: "image", right: "text", title: "Create Your Account", text: "Start by signing up with your name, email, speciality and basic practice information." },
  { id: 2, left: "text", right: "image", title: "Upload Your Credentials", text: "Submit your active state license and required documents so we can verify your qualifications." },
  { id: 3, left: "image", right: "text", title: "Add Your Practice Details", text: "Enter your practice name, bio, services, contact, and a profile photo to help patients understand your expertise." },
  { id: 4, left: "text", right: "image", title: "Verification Review", text: "Our team reviews your information and credentials. Once approved, your profile becomes part of the HearCog directory." },
  { id: 5, left: "image", right: "text", title: "Appear in Patient Search", text: "Verified providers are visible to patients searching within a 25-mile radius, helping you reach individuals seeking qualified hearing healthcare." },
];

const STEP_DELAY = 0.08;

function StepSide({ step, side, index, stepImages }) {
  const isImage = step[side] === "image";
  const animation = side === "left" ? (isImage ? "fadeRight" : "fadeLeft") : (isImage ? "fadeLeft" : "fadeRight");
  const className = side === "left" ? styles.stepLeft : styles.stepRight;

  return (
    <div className={className}>
      <ScrollReveal animation={animation} delay={index * STEP_DELAY}>
        {isImage ? (
          <div className={styles.stepImage}>
            <Image src={stepImages[index]} alt="" />
          </div>
        ) : (
          <div className={styles.stepTextBlock}>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepText}>{step.text}</p>
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}

function HowWeWorkSection() {
  const [activeTab, setActiveTab] = useState("patients");
  const steps = activeTab === "patients" ? STEPS_PATIENTS : STEPS_PROVIDERS;
  const stepImages = activeTab === "patients" ? SHAPE_IMGS : PROVIDER_IMGS;

  return (
    <section className="section">
      <Container>
        <SectionHeading
          title="How We Work: A Simple, Seamless Process for Your Care"
          desc="Our straightforward process guides both patients and providers through every step, ensuring a smooth and efficient experience from start to finish."
        />
        <Tabs tabs={TABS} activeId={activeTab} onChange={setActiveTab} />
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.id} className={styles.stepRow}>
              <StepSide step={step} side="left" index={index} stepImages={stepImages} />
              <div className={styles.stepCenter}>
                <div className={styles.stepNumber}>{step.id}</div>
              </div>
              <StepSide step={step} side="right" index={index} stepImages={stepImages} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowWeWorkSection;
