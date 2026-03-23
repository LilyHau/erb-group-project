import { Link } from "react-router-dom";
import Image from "../../assets/Cruises/cruisesum.png";
import Image1 from "../../assets/Cruises/OE.webp";
import Image2 from "../../assets/Cruises/SD.webp";
import Image3 from "../../assets/Cruises/SG.webp";
import Line from "../../assets/Cruises/Line.png";
import Accommodations from "../ourCruisesPage/Accommodations";
import styles from "./OurCruisesPage.module.css";
import Onboardactivities from "./Onboardactivities.jsx";
import DiningShop from "./DiningShop.jsx";

const OurCruisesPage = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <img src={Image} className={styles.heroImage} alt="Cruise Hero" />
        <div className={styles.thumbWrapper}>
          <div className={styles.thumbItem}>
            <Link to="/OCEANEXPLORER">
              <img
                src={Image1}
                className={styles.thumbImage}
                alt="Ocean Explorer"
              />
              <p className={styles.thumbText}>Ocean Explorer</p>
            </Link>
          </div>
          <div className={styles.thumbItem}>
            <Link to="/SEAGUARDIAN">
              <img
                src={Image3}
                className={styles.thumbImage}
                alt="Sea Guardian"
              />
              <p className={styles.thumbText}>Sea Guardian</p>
            </Link>
          </div>
          <div className={styles.thumbItem}>
            <Link to="/SERENITYDREAM">
              <img
                src={Image2}
                className={styles.thumbImage}
                alt="Serenity Dream"
              />
              <p className={styles.thumbText}>Serenity Dream</p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img className={styles.dividerLine} src={Line} alt="" />
      </div>
      <Onboardactivities />
      <Accommodations />
      <DiningShop />
    </div>
  );
};

export default OurCruisesPage;
