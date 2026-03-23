import styles from "./Whycruiseinfo.module.css";

const Whycruiseinfo = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Top Header Section */}
      <div className={styles.headerSection}>
        <h1 className={styles.mainTitle}>
          <span className={styles.moreText}>MORE</span>
          <span className={styles.subTitleText}>than just sailing ship</span>
        </h1>

        <div className={styles.quoteContainer}>
          <p className={styles.quoteText}>
            “ We’re crafting voyages that blend adventure, purpose, and
            relaxation into one unforgettable experience, rooted in three core
            promises that set us apart ! ”
          </p>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className={styles.featuresGrid}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>
            No Compromise: Adventure and <br /> Sustainability Go Hand in Hand
          </h4>
          <p className={styles.cardDescription}>
            We don’t just talk about protecting the ocean—we live it. Our ships
            run on low-emission fuel, our shore excursions use plastic-free
            beaches.
          </p>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Connect People With Nature</h4>
          <p className={styles.cardDescription}>
            Unlike generic cruise lines, every vessel in our fleet is designed
            for a specific way to engage with the sea—so you never have to
            choose between thrill, impact, or calm.
          </p>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>
            Small Groups, Big Connections—
            <br />
            With the Ocean and Each Other
          </h4>
          <p className={styles.cardDescription}>
            We keep our guest numbers small so you can skip the crowds and savor
            every moment: expert-led dives with max 15 people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whycruiseinfo;
