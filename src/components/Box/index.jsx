import { Image } from "react-bootstrap";
import styles from "./index.module.scss";

function Box({ data = [] }) {
  return data.map((item) => (
    <div key={item.title} className={styles.box}>
      <h5>
        <Image src={item.icon} alt={item.title} /> {item.title}
      </h5>
      <p className="mb-0">{item.description}</p>
    </div>
  ));
}

export default Box;
