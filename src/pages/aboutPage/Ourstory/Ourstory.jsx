// import React from "react";
// import QuoteCard from "./Quotecard";
// import Photozoom from "./Photozoon";
// import Phototext from "./Phototext";
// const Ourstory = () => {
//   return (
//     <div
//       style={{
//         maxWidth: "2300px",
//         margin: "0 auto",
//         padding: "150px 80px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center", // Centers the H1 and the entire Container
//         backgroundColor: "#EDFAFF",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "clamp(5rem, 10vw, 12rem)",
//           color: "#04040479",
//           marginBottom: "120px",

//           fontFamily: '"Joti One", system-ui',
//           textAlign: "center",
//           lineHeight: "1.2",
//         }}
//       >
//         Our Story
//       </h1>

//       <div
//         className="Photo-Container"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "flex-start", // Keeps the top of the photo and top of text aligned
//           justifyContent: "center", // <--- CENTERS THE PHOTO AND TEXT TOGETHER
//           gap: "20px",
//           //   width: "100%",
//           marginBottom: "100px",
//         }}
//       >
//         {/* Photozoom Container - Fixed width for the image */}
//         <div style={{ flex: "0 0 20px" }}>
//           <Photozoom />
//         </div>

//         {/* Phototext Container - Set width to match design proportions */}
//         <div
//         // style={{
//         //   flex: "0 1 900px", // Allows it to be centered without stretching too far
//         //   textAlign: "left",
//         // }}
//         >
//           <Phototext />
//         </div>
//       </div>

//       {/* Centered QuoteCard */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "2200px",
//           display: "flex",
//           justifyContent: "center",
//           border: "1px solid #000000",
//           backgroundColor: "#EDFAFF",
//         }}
//       >
//         <QuoteCard />
//       </div>
//     </div>
//   );
// };

// export default Ourstory;

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
