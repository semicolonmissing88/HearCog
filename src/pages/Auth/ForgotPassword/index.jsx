import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthFormShell from "../../../components/Auth/AuthFormShell";
import emailSentIcon from "../../../assets/Icons/emaiSent.svg";

const schema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
});

const initialValues = { email: "" };

function ForgotPassword() {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  if (emailSent) {
    return (
      <AuthFormShell
        icon={emailSentIcon}
        title="Email Sent"
        subtitle="You will receive an email with instructions on how to reset your password in a few minutes."
      >
        <div className="d-flex flex-column align-items-center w-100 gap-2">
          <Button
            type="button"
            className="w-100"
            onClick={() => navigate("/reset-password")}
          >
            Reset Password
          </Button>
          <Button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate("/login")}
          >
            Back to Sign In
          </Button>
        </div>
      </AuthFormShell>
    );
  }

  return (
    <AuthFormShell
      title="Forgot Password"
      subtitle="Enter your email address below, and we'll send you reset instructions to your email."
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          setEmailSent(true);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, isValid, submitCount }) => (
          <Form className="form authForm" onSubmit={handleSubmit}>
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
            <Button
              className="w-100 full-width"
              type="submit"
              disabled={!values.email?.trim() || !isValid}
            >
              Send Reset Instructions
            </Button>
            <Button
              type="button"
              className="btn btn-outline-secondary w-100 mt-2"
              onClick={() => navigate("/login")}
            >
              Back to Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </AuthFormShell>
  );
}

export default ForgotPassword;
