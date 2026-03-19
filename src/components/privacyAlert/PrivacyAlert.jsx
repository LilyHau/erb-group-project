import styles from "./PrivacyAlert.module.css";

const PrivacyAlert = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h1>We value your privacy</h1>
        <p>
          We use cookies to enhance your browsing experience, serve personalised
          ads or content, and analyse our traffic. By clicking "Accept All", you
          consent to our use of cookies.
        </p>
        <div className={styles.btnContainer}>
          <button onClick={onClose} className={styles.btn}>
            Reject All
          </button>
          <button onClick={onClose} className={styles.btn}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAlert;
