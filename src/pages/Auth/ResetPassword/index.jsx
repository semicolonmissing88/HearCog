import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthFormShell from "../../../components/Auth/AuthFormShell";
import PasswordInput from "../../../components/PasswordInput";
import updatePasswordIcon from "../../../assets/Icons/updatePassword.svg";

const schema = Yup.object({
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const initialValues = { password: "", confirmPassword: "" };

function ResetPassword() {
  const navigate = useNavigate();
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  if (passwordUpdated) {
    return (
      <AuthFormShell
        icon={updatePasswordIcon}
        title="Password Updated Successfully"
        subtitle="Your password has been changed. You can now log in using your new credentials."
      >
        <div className="d-flex flex-column align-items-center w-100">
          <Button
            type="button"
            className="w-100"
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
      title="Reset Password"
      subtitle="Enter your new password below to update your account."
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          setPasswordUpdated(true);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, isValid, submitCount }) => (
          <Form className="form authForm" onSubmit={handleSubmit}>
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
            <Button
              className="w-100 full-width"
              type="submit"
              disabled={!values.password?.trim() || !values.confirmPassword?.trim() || !isValid}
            >
              Update Password
            </Button>
            <Button
              type="button"
              className="btn btn-outline-secondary w-100 "
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

export default ResetPassword;
