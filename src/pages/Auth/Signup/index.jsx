import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import AuthFormShell from "../../../components/Auth/AuthFormShell";
import PasswordInput from "../../../components/PasswordInput";

const schema = Yup.object({
  fullName: Yup.string().trim().required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const initialValues = { fullName: "", email: "", password: "", confirmPassword: "" };

function Signup() {
  return (
    <AuthFormShell title="Join Us Today" subtitle={<>
    Hearing Care is Brain Care.<br />
    Create your free account to continue.
    </>}>
      <Button className="btn-google" type="button">
        <FaGoogle className="btn-google__icon" size={20} />
        Sign Up with Google
      </Button>
      <div className="divider">
        <span className="line" />
        <span className="text">or</span>
        <span className="line" />
      </div>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => console.log(values)}>
        {({ handleSubmit, handleChange, handleBlur, values, errors, isValid, submitCount }) => (
          <Form className="form authForm" onSubmit={handleSubmit}>
            <Form.Group className={`form-group full-width input-floating ${values.fullName ? "input-floating-filled" : ""}`} controlId="fullName">
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={submitCount > 0 && !!errors.fullName}
              />
              <Form.Label className="form-label">Full Name</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={`form-group full-width input-floating ${values.email ? "input-floating-filled" : ""}`} controlId="email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={submitCount > 0 && !!errors.email}
              />
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={`form-group full-width input-floating ${values.password ? "input-floating-filled" : ""}`} controlId="password">
              <PasswordInput
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={submitCount > 0 && !!errors.password}
              />
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={`form-group full-width input-floating ${values.confirmPassword ? "input-floating-filled" : ""}`} controlId="confirmPassword">
              <PasswordInput
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={submitCount > 0 && !!errors.confirmPassword}
              />
              <Form.Label className="form-label">Confirm Password</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
            </Form.Group>
            <Button className="w-100 full-width mb-4" type="submit" disabled={!isValid}>
              Join Now
            </Button>
          </Form>
        )}
      </Formik>
      <p className="text-center text-muted">
        Already have an account?{" "}
        <Link to="/login" className="text-decoration-underline" style={{ color: "#6D2ECC" }}>
          Sign In
        </Link>
      </p>
    </AuthFormShell>
  );
}

export default Signup;
