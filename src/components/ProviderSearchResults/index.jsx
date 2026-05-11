import { useMemo, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import ProviderCard from "../ProviderCard";
import styles from "./index.module.scss";

function ProviderSearchResults({ content }) {
  const [zipCode, setZipCode] = useState("");
  const [submittedZip, setSubmittedZip] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("English");

  const providers = useMemo(() => content.providers, [content.providers]);

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
          <h1 class="heading">{content.hero.title}</h1>
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
                  <ProviderCard provider={provider} />
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
