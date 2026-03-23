import styles from "./Card1.module.css";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";

const Card1 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>Turtle Rescue & Rehabilitation</h2>
        <p>
          Assist our crew in monitoring nesting sites, caring for injured turtles, and learning how to protect these endangered creatures.
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
        <img src="../src/assets/homePage/explore002.jpg" alt="explore002" />
      </div>
    </div>
  );
};

export default Card1;
