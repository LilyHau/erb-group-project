import Image from "../../assets/homePage/wave.png";
import styles from "./WaterShadow.module.css";

const WaterShadow = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${Image})` }}
    >
      <h1 className={styles.title}>
        THE EXPERIENCE
      </h1>
    </div>
  );
};

export default WaterShadow;
