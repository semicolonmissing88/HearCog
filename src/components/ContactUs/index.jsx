import { Formik } from "formik";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";
import * as Yup from "yup";
import contact1 from "../../assets/Icons/contact1.svg";
import contact2 from "../../assets/Icons/contact2.svg";
import contact3 from "../../assets/Icons/contact3.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSnapchat, FaXTwitter } from "react-icons/fa6";

const data = [
  {
    icon: contact1,
    title: "Hotline:",
    description: "+92 XXX XXX XXXX",
  },
  {
    icon: contact2,
    title: "Email:",
    description: "support@hearcog.com",
  },
  {
    icon: contact3,
    title: "SMS / WhatsApp:",
    description: "+123 456 78900",
  },
];

const contactSchema = Yup.object().shape({
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  email: Yup.string().trim().email("Enter a valid email address").required("Email is required"),
  phone: Yup.string().trim(),
  reason: Yup.string().required("Please select a reason for contact"),
  message: Yup.string().trim().required("Message is required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
};

function ContactUs() {
  return (
    <section className="section contactUs">
      <Container>
        <ScrollReveal animation="fadeUp">
          <h1 className="heading">Contact Us</h1>
        </ScrollReveal>
        <Card className="contactUsCard">
          <Row className="flex-lg-row-reverse">
          <Col lg={4} className="mb-4">
              <ScrollReveal animation="fadeRight" delay={0.18}>
              <Card className="purpleBg justify-content-between">
                <div className="mb-3">
                  <h4>Hi! We are always here to help you.</h4>
                  <p className="mb-4">We’re here to assist you with any inquiries or concerns you may have. Choose the best way to reach us below:</p>
                  <ul className={styles.contactList}>
                    {data.map((item, index) => (
                      <li key={index}>
                        <Image className="iconAnimation" width={32} height={32} src={item.icon} alt={item.title} />
                        <div>
                          <h6 className="mb-0 fw-semibold text-white">{item.title}:</h6>
                          <p className="m-0">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.socialListContainer}>
                  <h6 className="text-white">Connect with us</h6>
                  <ul className={styles.socialList}>
                    <li>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaSnapchat />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaXTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </Card>
              </ScrollReveal>
            </Col>
            <Col lg={8}>
              <ScrollReveal animation="fadeLeft" delay={0.1}>
              <h2>Send Us a Message</h2>
              <p>Got a question? Need help with your hearing needs or our services? Feel free to reach out, and we'll get back to you as soon as possible.</p>
              <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={() => {
                  // Add form submission logic (e.g. API call) here
                }}>
                {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                  <Form className="form" onSubmit={handleSubmit}>
                    <Form.Group className="form-group" controlId="firstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.firstName && !!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-group" controlId="lastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.lastName && !!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-group full-width" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-group" controlId="phone">
                      <div className="d-flex align-items-center justify-content-between">
                        <Form.Label>Phone Number</Form.Label>
                        <small className="fw-normal text-muted">(optional)</small>
                      </div>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-group" controlId="reason">
                      <Form.Label>Reason for Contact</Form.Label>
                      <Form.Control
                        as="select"
                        name="reason"
                        className={`form-select${values.reason ? " has-value" : ""}`}
                        value={values.reason}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.reason && !!errors.reason}>
                        <option value="">Please select</option>
                        <option value="1">General Inquiry</option>
                        <option value="2">Technical Support</option>
                        <option value="3">Other</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">{errors.reason}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-group full-width" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="Write your message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.message && !!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="w-100 full-width" type="submit">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              </ScrollReveal>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  );
}

export default ContactUs;
