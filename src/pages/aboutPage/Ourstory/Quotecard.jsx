import React from "react";
import styles from "./Quotecard.module.css"; // 匯入 CSS Module

const QuoteCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.quoteMark}>“</div>

        <div className={styles.content}>
          <h1 className={styles.line}>
            <span className={styles.boldWord}>Sailing</span>
            is protecting,
          </h1>
          <h1 className={styles.line}>
            <span className={styles.boldWord}>Experiencing</span>
            is growing
          </h1>
        </div>

        <div className={styles.footer}>
          <div className={styles.divider}></div>
          <p className={styles.attribution}>Ocean Park HK Cruise Line</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
