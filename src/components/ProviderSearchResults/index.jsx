import { useMemo, useState } from "react";
import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { HiOutlineBuildingOffice2, HiOutlineMapPin } from "react-icons/hi2";
import provider1 from "../../assets/images/provider1.png";
import provider2 from "../../assets/images/provider2.png";
import provider3 from "../../assets/images/provider3.png";
import provider4 from "../../assets/images/provider4.png";
import provider5 from "../../assets/images/provider5.png";
import provider6 from "../../assets/images/provider6.png";
import provider7 from "../../assets/images/provider7.png";
import provider8 from "../../assets/images/provider8.png";
import provider9 from "../../assets/images/provider9.png";
import dummy from "../../assets/images/dummy.png";
import styles from "./index.module.scss";

const providerImages = {
  "provider1.png": provider1,
  "provider2.png": provider2,
  "provider3.png": provider3,
  "provider4.png": provider4,
  "provider5.png": provider5,
  "provider6.png": provider6,
  "provider7.png": provider7,
  "provider8.png": provider8,
  "provider9.png": provider9,
  "dummy.png": dummy,
};

function ProviderSearchResults({ content }) {
  const [zipCode, setZipCode] = useState("");
  const [submittedZip, setSubmittedZip] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("English");

  const providers = useMemo(
    () =>
      content.providers.map((provider) => ({
        ...provider,
        image: providerImages[provider.image] ?? dummy,
      })),
    [content.providers]
  );

  const typeOptions = useMemo(
    () => [...new Set(providers.map((provider) => provider.type))],
    [providers]
  );

  const specialtyOptions = useMemo(
    () => [...new Set(providers.map((provider) => provider.specialty))],
    [providers]
  );

  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      const matchesType = !typeFilter || provider.type === typeFilter;
      const matchesSpecialty = !specialtyFilter || provider.specialty === specialtyFilter;
      const matchesLanguage = !languageFilter || provider.language === languageFilter;
      return matchesType && matchesSpecialty && matchesLanguage;
    });
  }, [providers, typeFilter, specialtyFilter, languageFilter]);

  const hasSearchResults = Boolean(submittedZip) && filteredProviders.length > 0;

  const handleSearch = (event) => {
    event.preventDefault();
    const normalizedZip = zipCode.trim();
    setSubmittedZip(normalizedZip);
  };

  return (
    <section className={`section ${styles.section}`}>
      <Container>
        <div className={styles.hero}>
          <h1>{content.hero.title}</h1>
          <Form onSubmit={handleSearch} className={styles.searchInputWrap}>
            <Form.Control
              type="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              placeholder={content.hero.placeholder}
            />
            <button type="submit" className={styles.searchButton} aria-label="Search providers">
              <FiSearch size={17} />
            </button>
          </Form>
        </div>

        <div className={styles.filtersHeader}>
          <h2>{content.filters.heading}</h2>

          <div className={styles.filters}>
            <Form.Select
              className={styles.filterSelect}
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
            >
              <option value="">{content.filters.typeLabel}</option>
              {typeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              className={styles.filterSelect}
              value={specialtyFilter}
              onChange={(event) => setSpecialtyFilter(event.target.value)}
            >
              <option value="">{content.filters.specialtyLabel}</option>
              {specialtyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              className={styles.filterSelect}
              value={languageFilter}
              onChange={(event) => setLanguageFilter(event.target.value)}
            >
              <option value="English">{content.filters.languageLabel}</option>
            </Form.Select>
          </div>
        </div>

        {hasSearchResults ? (
          <div className={styles.resultsWrap} aria-live="polite">
            <Row>
              {filteredProviders.map((provider) => (
                <Col key={provider.id} lg={4} md={6} className="mb-4">
                  <Card className={`card ${styles.providerCard}`}>
                    <Image src={provider.image} alt={provider.name} className={styles.providerImage} />
                    <div className={styles.providerBody}>
                      <h5>{provider.name}</h5>
                      <p className={styles.credentials}>{provider.credentials}</p>
                      <ul className={styles.providerMeta}>
                        <li>
                          <HiOutlineBuildingOffice2 size={14} />
                          <span>Clinic Name</span>
                        </li>
                        <li>
                          <HiOutlineMapPin size={14} />
                          <span>{provider.city}</span>
                        </li>
                      </ul>
                      <div className={styles.providerFooter}>
                        <span className={styles.distance}>{provider.distance}</span>
                        <span className={styles.specialty}>
                          {provider.specialty}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <div className={styles.emptyState} aria-live="polite">
            <div className={styles.emptyArtwork} aria-hidden="true">
              <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="55" y="28" width="105" height="132" rx="16" fill="#EEF0FB" />
                <rect x="70" y="56" width="68" height="10" rx="5" fill="#FFFFFF" />
                <rect x="70" y="82" width="82" height="10" rx="5" fill="#FFFFFF" />
                <rect x="70" y="108" width="56" height="10" rx="5" fill="#FFFFFF" />
                <circle cx="170" cy="132" r="32" stroke="#E4E7F7" strokeWidth="10" />
                <path d="M192 154L210 172" stroke="#E4E7F7" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </div>
            <p>{content.emptyState.message}</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProviderSearchResults;
