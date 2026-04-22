import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function CallToAction({
  text = "Start Your Hearing Journey",
  link = "/your-target-route",
}) {
  return (
    <div className={styles.cta}>
      <Button as={Link} to={link}>
        {text}
      </Button>
    </div>
  );
}

export default CallToAction;