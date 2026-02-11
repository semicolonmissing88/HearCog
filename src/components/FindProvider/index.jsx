import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import { ScrollReveal } from "../ScrollAnimation";

function FindProvider() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="section">
      <Container>
        <SectionHeading title="Find Provider" desc="Imagine hearing the way it should be. You'll know exactly where to go." />
        <ScrollReveal animation="fadeUp" delay={0.15}>
          <Form className="form findProviderForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="form-group" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="City, State or Zip"
                {...register("location")}
                isInvalid={!!errors.location}
              />
              {errors.location && (
                <Form.Control.Feedback type="invalid">{errors.location.message}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="form-group" controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                className="form-select"
                {...register("type")}
                isInvalid={!!errors.type}
              >
                <option value="">Please select</option>
              </Form.Control>
              {errors.type && (
                <Form.Control.Feedback type="invalid">{errors.type.message}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="form-group" controlId="speciality">
              <Form.Label>Speciality</Form.Label>
              <Form.Control
                as="select"
                className="form-select"
                {...register("speciality")}
                isInvalid={!!errors.speciality}
              >
                <option value="">Please select</option>
              </Form.Control>
              {errors.speciality && (
                <Form.Control.Feedback type="invalid">{errors.speciality.message}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="form-group" controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control
                as="select"
                className="form-select"
                {...register("language")}
                isInvalid={!!errors.language}
              >
                <option value="en">English</option>
              </Form.Control>
              {errors.language && (
                <Form.Control.Feedback type="invalid">{errors.language.message}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Button type="submit">
              Find a Provider
            </Button>
          </Form>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default FindProvider;
