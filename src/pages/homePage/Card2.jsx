import styles from "./Card2.module.css";
import Button from "../../components/buttons/Button";
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
          When there’s one great thing, there’s usually another. What’s your
          second thing to showcase?
        </p>
        <Link
          to="/cruises"
          style={{
            textDecoration: "none",
            maxWidth: "12rem",
          }}
        >
          <Button>Another button</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
