import Button from "../../components/buttons/Button";
import FixedButton from "../../components/buttons/FixedButton";
import HeroSection from "./HeroSection";
import styles from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={`${styles.redBackgroundColor} ${styles.blueText}`}>
      <HeroSection />
      Home Page
      <p>123133</p>
      <Button>submit</Button>
      <Button>submi22t</Button>
      <Button>submi2231234t</Button>
      <FixedButton />
    </div>
  );
};

export default HomePage;
