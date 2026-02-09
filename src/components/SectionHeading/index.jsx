import styles from "./index.module.scss";
function SectionHeading({ title, desc }) {
  return (
    <div className={styles.sectionHeading}>
      <h2 className="heading">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default SectionHeading;
