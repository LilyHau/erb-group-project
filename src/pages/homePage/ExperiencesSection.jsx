import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import styles from "./ExperiencesSection.module.css"
const ExperiencesSection = () => {
  return (
    <section className={styles.section}>
      <div
        className={styles.container}
      >
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </section>
  );
};

export default ExperiencesSection;
