import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./index.module.scss";

function FormField({ type, name, label, placeholder, options = [], register, error, ...rest }) {
  const [selectOpen, setSelectOpen] = useState(false);

  const renderControl = () => {
    if (type === "select") {
      const { ref, onBlur, onChange, ...reg } = register(name);
      return (
        <div className={styles.selectWrap}>
          <select
            className={styles.select}
            ref={ref}
            onBlur={(e) => {
              setSelectOpen(false);
              onBlur(e);
            }}
            onFocus={() => setSelectOpen(true)}
            onChange={onChange}
            {...reg}
            aria-label={label}
            {...rest}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className={`${styles.chevron} ${selectOpen ? styles.chevronOpen : ""}`} aria-hidden>
            <FaChevronDown />
          </span>
        </div>
      );
    }
    if (type === "textarea") {
      return <textarea className={styles.control} placeholder={placeholder} {...register(name)} aria-label={label} {...rest} />;
    }
    return <input type={type || "text"} className={styles.control} placeholder={placeholder} {...register(name)} aria-label={label} {...rest} />;
  };

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      {renderControl()}
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
}

export default FormField;
