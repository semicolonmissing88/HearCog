import AuthBranding from "../AuthBranding";
import styles from "./index.module.scss";

function AuthFormShell({ title, subtitle, icon, children }) {
  return (
    <div className={styles.shell}>
      <div className={styles.logoTop}>
        <AuthBranding />
      </div>
      <div className={styles.formCenter}>
        {icon && (
          <div className="d-flex justify-content-center mb-4">
            <img src={icon} alt="" style={{ width: 120, height: 120 }} />
          </div>
        )}
        {title && <h3 className={icon ? "mb-2 text-center" : ""}>{title}</h3>}
        {subtitle && <p className={`mb-4 ${icon ? "text-muted text-center" : ""}`} style={icon ? { maxWidth: 360, margin: "0 auto" } : undefined}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

export default AuthFormShell;
