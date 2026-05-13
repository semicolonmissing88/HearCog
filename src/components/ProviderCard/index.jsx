/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import providerImage1 from "../../assets/images/provider1.png";
import providerImage2 from "../../assets/images/provider2.png";
import providerImage3 from "../../assets/images/provider3.png";
import providerImage4 from "../../assets/images/provider4.png";
import providerImage5 from "../../assets/images/provider5.png";
import providerImage6 from "../../assets/images/provider6.png";
import providerImage7 from "../../assets/images/provider7.png";
import providerImage8 from "../../assets/images/provider8.png";
import providerImage9 from "../../assets/images/provider9.png";
import providerImage10 from "../../assets/images/provider10.png";
import styles from "./index.module.scss";

const providerImages = {
  "provider1.png": providerImage1,
  "provider2.png": providerImage2,
  "provider3.png": providerImage3,
  "provider4.png": providerImage4,
  "provider5.png": providerImage5,
  "provider6.png": providerImage6,
  "provider7.png": providerImage7,
  "provider8.png": providerImage8,
  "provider9.png": providerImage9,
  "provider10.png": providerImage10,
};

function ProviderCard({ provider }) {
  const profileUrl = `/provider/${provider.slug}`;

  return (
    <Card as={Link} to={profileUrl} className={styles.providerCard}>
      <div className={styles.imageWrapper}>
        <Card.Img
          variant="top"
          src={providerImages[provider.image]}
          alt={provider.name}
        />
      </div>
      <Card.Body>
        <Card.Title as="h1" className={styles.title}>{provider.name}</Card.Title>
        <p className={styles.credentials}>{provider.credentials}</p>
        <p className={styles.clinicName}>{provider.clinicName}</p>
        <div className={styles.tags}>
          <span className={styles.tag}>{provider.specialty}</span>
          <span className={styles.tag}>{provider.type}</span>
        </div>
        <div className={styles.footer}>
          <span className={styles.location}>{provider.city}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProviderCard;
