import { useState } from "react";
import { Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./index.module.scss";

function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.wrap}>
      <Form.Control type={showPassword ? "text" : "password"} {...props} />
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setShowPassword((p) => !p)}
        aria-label={showPassword ? "Hide password" : "Show password"}
        tabIndex={-1}
      >
        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
      </button>
    </div>
  );
}

export default PasswordInput;
