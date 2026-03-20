import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Ocean Park HK Cruise Line</h2>
          <p>Sailing is protecting . Experiencing is growing</p>
          <h3>
            Subscribe and be the first to receive any new updates and special
            offers
          </h3>
        </div>
        <div className={styles.linkbar}>
          <div className={styles.link}>
            <h2>Overview</h2>
            <Link to="/cruises">Ships Overview</Link>
            <Link to="/onboard">Activities</Link>
            <Link to="/">Overview</Link>
          </div>
          <div className={styles.link}>
            <h2>Support</h2>
            <Link to="/FAQSection">Contact</Link>
            <Link to="/FAQSection">Support</Link>
            <Link to="/FAQSection">Legal</Link>
            {/* <p>Contact</p>
          <p>Support</p>
          <p>Legal</p> */}
          </div>
          <div className={styles.link}>
            <h2>Our Curises</h2>
            <Link to="/OCEANEXPLORER">Ocean Explorer</Link>
            <Link to="/SEAGUARDIAN">Sea Giardian</Link>
            <Link to="/SERENITYDREAM">Serenity Dream</Link>
          </div>
        </div>
      </div>
      <div className={styles.bar}>
        <form action="" method="" className={styles.form}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <button>SUBSCRIBE</button>
          {/* <input type="submit" value="SUBSCRIBE" /> */}
        </form>
        <div className={styles.icon}>
          <i class="fa-brands fa-instagram fa-xl"></i>
          <i class="fa-brands fa-linkedin-in fa-xl"></i>
          <i class="fa-brands fa-x-twitter fa-xl"></i>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Ocean Park HK Cruise Line. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
