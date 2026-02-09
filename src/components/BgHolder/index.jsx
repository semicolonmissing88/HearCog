import { Card, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./index.module.scss";
import icon1 from "../../assets/icons/s1.svg";
import icon2 from "../../assets/icons/s2.svg";
import icon3 from "../../assets/icons/s3.svg";
import icon4 from "../../assets/icons/s4.svg";

function BgHolder() {
  const data = [
    {
      id: 1,
      icon: icon1,
      title: "48M",
      description: "Adults in the U.S. Living with Hearing Loss"
    },
    {
      id: 2,
      icon: icon2,
      title: "2-5x",
      description: "Increased Dementia Risk with Untreated Hearing Loss"
    },
    {
      id: 3,
      icon: icon3,
      title: "30-40%",
      description: "Faster Cognitive Decline with Untreated Hearing Loss"
    },
    
    {
      id: 4,
      icon: icon4,
      title: "32-48%",
      description: "Risk Reduction with Hearing Aid Use"
    }
  ]
  return (
    <section className="section">
      <Container>
        <div className={styles.bgHolder}>
          <Row>
            {
            data.map((item) => (
              <Col md={3} key={item.id}>
              <div class={'card ' + styles.customCard}>
               <div className={styles.icon}>
                 <Image src={item.icon} alt={item.title} />
               </div>
                 <h2>{item.title}</h2>
                 <p className="mb-0">{item.description}</p>
              </div>
             </Col> 
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default BgHolder;
