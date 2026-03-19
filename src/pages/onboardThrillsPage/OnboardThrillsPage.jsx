import styles from "./OnboardThrillsPage.module.css";
import sg from "../../assets/homePage/SEA-GUARDIAN.jpg";
import oe from "../../assets/homePage/OCEAN-EXPLORER.jpg";
import sd from "../../assets/homePage/SERENITY-DREAM.jpg";
import { Link } from "react-router-dom";

const OnboardThrillsPage = () => {
  return <div className={styles.onboardThrills}>
    <div className={styles.hero}>
      <h1>Onboard Activities</h1>
    </div>
    <div className={styles.info}>
      <div className={styles.infoDescription}>
        <h2>Connect with Nature, Sail into Wonder</h2>
        <p>When you set sail with Ocean Park HK Cruise Line, every voyage is a harmony of adventure, purpose, and relaxation—crafted to deepen your bond with the ocean.</p>
        <p>Whether you’re diving into scientific exploration, giving back through conservation, or unwinding with your loved ones, our three distinct ships offer experiences that let you embrace the sea your way, no compromises needed.</p>
        <ul className={styles.infoLinks}>
          <li><Link to="/cruises">Find Your Perfect Cruise</Link></li>
          <li><Link to="/">Book Now</Link></li>
        </ul>
      </div>
      <div className={styles.infoImage}>
        <img src={sg} alt="sea guardian" />
        <img src={oe} alt="ocean explorer" />
        <img src={sd} alt="serenity dream" />
      </div>
    </div>
    <div className={styles.recreation}>
      <h2><span>RECREATION & WELLNESS</span></h2>
      <div className={styles.cardContainer}>
        <div className={styles.recreationCard}>
          <div className={styles.cardContent}>
          <h3>Family-Friendly Activity Zones</h3>
          <p>Let kids play in tide pool-themed climbing areas and pirate laser tag arenas, while adults enjoy quiet spa treatments with sea-sourced products.</p>
          </div>
          <img src={sg} alt="" />
        </div>
        <p>Balance adventure with calm—recharge your mind and body with ocean-inspired wellness and leisure activities.</p>
        <div className={styles.recreationCard}>
          <div className={styles.cardContent}>
          <h3>Eco-Friendly Pool & Water Play</h3>
          <p>Splash in our sustainably filtered wave pools, with gentle swells for little ones and bigger breaks for thrill-seekers.</p>
          </div>
          <img src={oe} alt="" />
        </div>
        <div className={styles.recreationCard}>
          <div className={styles.cardContent}>
          <h3>Ocean-View Yoga & Meditation</h3>
          <p>Practice yoga at sunrise or sunset on the deck, with the sound of waves as your backdrop, or join guided meditation sessions focused on mindfulness.</p>
          </div>
          <img src={sd} alt="" />
        </div>
      </div>
    </div>
  </div>;
};

export default OnboardThrillsPage;
