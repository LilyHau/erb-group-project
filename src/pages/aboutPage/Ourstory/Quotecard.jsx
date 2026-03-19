// import React from "react";

// const QuoteCard = () => {
//   const styles = {
//     container: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       width: "100%",
//       maxWidth: "1900px", // Scaled for your target width
//       margin: "80px auto",
//       backgroundColor: "#EDFAFF",
//       padding: "0 40px",
//       fontFamily: '"Joti One", system-ui',
//     },
//     card: {
//       width: "100%",
//       // In Figma it looks like a light gray section, not a floating white card
//       backgroundColor: "#edfaff",
//       padding: "160px 120px", // Doubled padding for 2200px scale
//       textAlign: "left",
//       borderRadius: "12px",
//     },
//     quoteMark: {
//       fontSize: "200px", // Massive quote marks to match the scale
//       color: "#333",
//       lineHeight: "0.1",
//       marginBottom: "100px", // More space after the quote mark
//       opacity: 0.8,
//     },
//     content: {
//       marginBottom: "100px",
//     },
//     line: {
//       // Increased clamp range for massive screens
//       fontSize: "clamp(4rem, 10vw, 8.5rem)",
//       color: "#3333336e", // Darker for better contrast
//       margin: "0",
//       lineHeight: "1.2",
//       fontWeight: "normal",
//     },
//     boldWord: {
//       fontFamily: '"Joti One", system-ui',
//       marginRight: "24px", // Increased spacing
//     },
//     footer: {
//       marginTop: "40px",
//     },
//     divider: {
//       width: "80px", // Longer line for the larger scale
//       height: "4px", // Thicker line
//       backgroundColor: "#333",
//       marginBottom: "20px",
//     },
//     attribution: {
//       fontSize: "clamp(2rem, 3vw, 3.5rem)", // Scaled attribution
//       color: "#333",
//       fontWeight: "normal",
//       margin: 0,
//       opacity: 0.7,
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.quoteMark}>“</div>

//         <div style={styles.content}>
//           <h1 style={styles.line}>
//             <span style={styles.boldWord}>Sailing</span>
//             is protecting,
//           </h1>
//           <h1 style={styles.line}>
//             <span style={styles.boldWord}>Experiencing</span>
//             is growing
//           </h1>
//         </div>

//         <div style={styles.footer}>
//           <div style={styles.divider}></div>
//           <p style={styles.attribution}>Ocean Park HK Cruise Line,</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteCard;

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
          <p className={styles.attribution}>Ocean Park HK Cruise Line,</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
