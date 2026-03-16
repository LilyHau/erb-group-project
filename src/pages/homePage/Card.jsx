import styles from "./Card.module.css";
import Button from "../../components/buttons/Button";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>救海龜</h2>
        <p>
          Call out a feature, benefit, or value of your site, then link to a
          page where people can learn more about it.
        </p>
        <Button>Call to action</Button>
      </div>
      <div className={styles.image}>
        <img src="../src/assets/homePage/explore002.jpg" alt="explore002" />
      </div>
    </div>
  );
};

export default Card;
