import React from "react";
import QuoteCard from "./Quotecard";
import Photozoom from "./Photozoon";
import Phototext from "./Phototext";
import styles from "./Ourstory.module.css"; // 匯入 CSS Module

const Ourstory = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Our Story</h1>

      <div className={`${styles.photoSection} Photo-Container`}>
        {/* Photozoom Container - Fixed width for the image */}
        <div className={styles.photoWrapper}>
          <Photozoom />
        </div>

        {/* Phototext Container - Set width to match design proportions */}
        <div>
          <Phototext />
        </div>
      </div>

      {/* Centered QuoteCard */}
      <div className={styles.quoteWrapper}>
        <QuoteCard />
      </div>
    </div>
  );
};

export default Ourstory;
