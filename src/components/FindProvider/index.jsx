import { useForm } from "react-hook-form";
import { Button, Container } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import FormField from "../FormField";
import styles from "./index.module.scss";

const FIELDS = [
  { type: "input", name: "location", label: "Location", placeholder: "City, State or Zip" },
  {
    type: "select",
    name: "type",
    label: "Type",
    placeholder: "Please select",
    options: [{ value: "", label: "Please select" }],
  },
  {
    type: "select",
    name: "speciality",
    label: "Speciality",
    placeholder: "Please select",
    options: [{ value: "", label: "Please select"  }],
  },
  {
    type: "select",
    name: "language",
    label: "Language",
    options: [{ value: "en", label: "English" }],
  },
];

function FindProvider() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="section">
      <Container>
        <SectionHeading title="Find Provider" desc="Imagine hearing the way it should be. You'll know exactly where to go." />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fields}>
            {FIELDS.map((field) => (
              <FormField
                key={field.name}
                type={field.type}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                options={field.options}
                register={register}
                error={errors[field.name]}
              />
            ))}
          </div>
          <Button type="submit"> Find a Provider</Button>
        </form>
      </Container>
    </section>
  );
}

export default FindProvider;
