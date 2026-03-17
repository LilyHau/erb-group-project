import styles from "./Card1.module.css";
import Button from "../../components/buttons/Button";
import { Link } from "react-router-dom";

const Card1 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>救海龜</h2>
        <p>
          Call out a feature, benefit, or value of your site, then link to a
          page where people can learn more about it.
        </p>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            maxWidth: "12rem",
          }}
        >
          <Button>Call to action</Button>
        </Link>
      </div>
      <div className={styles.image}>
        <img src="../src/assets/homePage/explore002.jpg" alt="explore002" />
      </div>
    </div>
  );
};

export default Card1;
