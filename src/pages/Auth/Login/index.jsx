import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import AuthFormShell from "../../../components/Auth/AuthFormShell";
import PasswordInput from "../../../components/PasswordInput";

const schema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = { email: "", password: "", keepLoggedIn: false };

function Login() {
  return (
    <AuthFormShell title="Sign In" subtitle="Please login to continue to your account.">
      <Button className="btn-google" type="button">
        <FaGoogle className="btn-google__icon" size={20} />
        Sign In with Google
      </Button>
      <div className="divider">
        <span className="line" />
        <span className="text">or</span>
        <span className="line" />
      </div>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => console.log(values)}>
        {({ handleSubmit, handleChange, handleBlur, values, errors, isValid, submitCount }) => (
          <Form className="form authForm" onSubmit={handleSubmit}>
            <Form.Group className={`form-group full-width input-floating ${values.email ? "input-floating-filled" : ""}`} controlId="email">
              <Form.Control type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} isInvalid={submitCount > 0 && !!errors.email} />
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
            <Form.Group className="form-group full-width d-flex flex-wrap gap-2 justify-content-between align-items-center">
              <Form.Check type="checkbox" id="keepLoggedIn" name="keepLoggedIn" label="Keep me logged in"   checked={values.keepLoggedIn} onChange={handleChange} />
              <Link to="/forgot-password" className="text-muted text-decoration-none">
                Forgot your password?
              </Link>
            </Form.Group>
            <Button className="w-100 full-width mb-4" type="submit" disabled={!isValid}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
      <p className="text-center text-muted">
        Need an account?{" "}
        <Link to="/signup" className="text-decoration-underline" style={{ color: "#6D2ECC" }}>
          Create one
        </Link>
      </p>
    </AuthFormShell>
  );
}

export default Login;
