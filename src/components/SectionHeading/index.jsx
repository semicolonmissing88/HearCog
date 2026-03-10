import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";

function SectionHeading({ title, desc, small, leftAlign }) {
  const className = [styles.sectionHeading, small && styles.small, leftAlign && styles.leftAlign].filter(Boolean).join(" ");
  return (
    <ScrollReveal animation="fadeUp" className={className}>
      <h2 className="heading">{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </ScrollReveal>
  );
}

export default SectionHeading;
