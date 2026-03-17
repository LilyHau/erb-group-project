import styles from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <button className={styles.btn}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
