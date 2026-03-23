import Text from "./Text";
import Image from "../../../assets/Whycruise/SERENITYDREAM.jpg";
import styles from "./Whycruise.module.css";

const Whycruise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.cruiseImage} src={Image} alt="Cruise Ship" />
      </div>

      <div className={styles.textContainer}>
        <Text />
        <p className={styles.description}>
          At Ocean Park HK Cruise Line, we believe <br /> a cruise is more than
          a vacation—it’s a <br />
          deep, meaningful connection to the ocean <br />
          that leaves both you and the planet better <br />
          off.
        </p>
        <br />
        <br />
        <p className={styles.footerText}>
          <strong>
            <Link to="/cruises">Find Your Perfect Cruise</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Whycruise;
