import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.background}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.invite}>
            <h2>Subscribe to our newsletter</h2>
            <p>Be the first to receive any new updates and special offers</p>
          </div>
          <form>
            <input
              className={styles.input}
              type="email"
              placeholder="  Enter your email"
              required
            />
            <button className={styles.button}>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
