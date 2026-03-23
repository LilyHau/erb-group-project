import styles from "./Card2.module.css";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";

const Card2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="../src/assets/homePage/diving.webp" alt="diving" />
      </div>
      <div className={styles.content}>
        <h2>Sea Diving Adventures</h2>
        <p>
          Embark on guided dives to explore coral reefs, underwater caves, and marine habitats, with access to onboard sea labs for hands-on learning.
        </p>
        <Link
          to="/cruises"
          style={{
            textDecoration: "none",
            maxWidth: "12rem",
          }}
        >
          <Button>MORE INFO</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
