// import React from "react";

// // Updated Card Style: Scaled up by 200%
// const cardStyle = {
//   flex: "1",
//   minWidth: "500px", // Doubled from 250px
//   maxWidth: "700px", // Doubled from 350px
//   padding: "20px", // Doubled from 10px
//   backgroundColor: "transparent",
//   textAlign: "left",
// };

// const Whycruiseinfo = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: "4600px", // Doubled from 2300px
//         margin: "0 auto",
//         padding: "160px 80px", // Doubled from 80px 40px
//         backgroundColor: "#EDFAFF",
//         fontFamily: "'Inter', sans-serif",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       {/* Top Header Section */}
//       <div
//         style={{ textAlign: "center", width: "100%", marginBottom: "120px" }}
//       >
//         <h1
//           style={{
//             fontFamily: '"Joti One", cursive',
//             fontSize: "clamp(80px, 12vw, 140px)", // Doubled from 40px/70px
//             margin: "0",
//             display: "flex",
//             alignItems: "baseline",
//             justifyContent: "center",
//             gap: "30px", // Doubled from 15px
//           }}
//         >
//           <span style={{ color: "#43c5ff" }}>MORE</span>
//           <span
//             style={{
//               fontFamily: "Inter",
//               fontWeight: "300",
//               fontSize: "0.7em",
//               color: "#333",
//             }}
//           >
//             than just sailing ship
//           </span>
//         </h1>

//         <div style={{ maxWidth: "1400px", margin: "80px auto 0 auto" }}>
//           {" "}
//           {/* Doubled margin/maxWidth */}
//           <p
//             style={{
//               fontStyle: "italic",
//               fontSize: "2.4rem", // Doubled from 1.2rem
//               lineHeight: "1.6",
//               color: "#444",
//             }}
//           >
//             “ We’re crafting voyages that blend adventure, purpose, and
//             relaxation into one unforgettable experience, rooted in three core
//             promises that set us apart ! ”
//           </p>
//         </div>
//       </div>

//       {/* Bottom Features Section */}
//       <div
//         style={{
//           display: "flex",
//           gap: "100px", // Doubled from 50px
//           justifyContent: "center",
//           flexWrap: "wrap",
//           width: "100%",
//           marginTop: "80px", // Doubled from 40px
//         }}
//       >
//         <div style={cardStyle}>
//           <h4
//             style={{
//               fontWeight: "bold",
//               marginBottom: "30px",
//               fontSize: "2rem",
//             }}
//           >
//             No Compromise: Adventure and <br /> Sustainability Go Hand in Hand
//           </h4>
//           <p style={{ fontSize: "1.9rem", color: "#555", lineHeight: "1.5" }}>
//             {" "}
//             {/* Doubled from 0.95rem */}
//             We don’t just talk about protecting the ocean—we live it. Our ships
//             run on low-emission fuel, our shore excursions use plastic-free
//             beaches.
//           </p>
//         </div>

//         <div style={cardStyle}>
//           <h4
//             style={{
//               fontWeight: "bold",
//               marginBottom: "30px",
//               fontSize: "2rem",
//             }}
//           >
//             Connect People With Nature
//           </h4>
//           <p style={{ fontSize: "1.9rem", color: "#555", lineHeight: "1.5" }}>
//             Unlike generic cruise lines, every vessel in our fleet is designed
//             for a specific way to engage with the sea—so you never have to
//             choose between thrill, impact, or calm.
//           </p>
//         </div>

//         <div style={cardStyle}>
//           <h4
//             style={{
//               fontWeight: "bold",
//               marginBottom: "30px",
//               fontSize: "2rem",
//             }}
//           >
//             Small Groups, Big Connections—
//             <br />
//             With the Ocean and Each Other
//           </h4>
//           <p style={{ fontSize: "1.9rem", color: "#555", lineHeight: "1.5" }}>
//             We keep our guest numbers small so you can skip the crowds and savor
//             every moment: expert-led dives with max 15 people.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Whycruiseinfo;

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
