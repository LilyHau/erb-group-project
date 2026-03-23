import styles from "./Card3.module.css";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";

const Card3 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>Ocean Guardians Interactive Programme</h2>
        <p>
          Turn learning into action with this hands-on workshop—held in the ship’s dedicated Kids’ Club or family activity zone! Kids become “Junior Ocean Guardians” as they practice reducing waste, conserving water, and protecting marine habitats. 
        </p>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            maxWidth: "12rem",
          }}
        >
          <Button>MORE INFO</Button>
        </Link>
      </div>
      <div className={styles.image}>
        <img src="../src/assets/homePage/explore001.jpg" alt="explore001" />
      </div>
    </div>
  );
};

export default Card3;
