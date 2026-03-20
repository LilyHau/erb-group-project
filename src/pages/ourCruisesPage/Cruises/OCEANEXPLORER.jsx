// import { Link } from "react-router-dom";
// import OEimage from "../../../assets/OCEANEXPLORER/OEpagehead.png";
// import Imagea from "../../../assets/Cruises/OE.PNG";
// import Imageb from "../../../assets/Cruises/SD.PNG";
// import Imagec from "../../../assets/Cruises/SG.PNG";
// import SEsum from "../../../assets/OCEANEXPLORER/SEpagesum.jpg";
// import SEsum1 from "../../../assets/OCEANEXPLORER/SEpagesum1.png";
// import EXicon from "../../../assets/OCEANEXPLORER/icon.png";
// import EXimga from "../../../assets/OCEANEXPLORER/Expedition1.png";
// import EXimgb from "../../../assets/OCEANEXPLORER/Expedition2.png";
// import EXimgc from "../../../assets/OCEANEXPLORER/Expedition3.png";
// import ADCimga from "../../../assets/OCEANEXPLORER/ADC1.png";
// import ADCimgb from "../../../assets/OCEANEXPLORER/ADC2.png";

// const OCEANEXPLORER = () => {
//   const thumbStyle = {
//     width: "180px",
//     height: "180px",
//     objectFit: "cover",
//     borderRadius: "10px",
//     padding: "20px",
//   };
//   const btnStyle = (bg) => ({
//     padding: "12px 35px",
//     marginTop: "100px",
//     fontSize: "30px",
//     backgroundColor: bg,
//     color: "white",
//     border: "none",
//     borderRadius: "50px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//     transition: "0.3s",
//   });

//   const thumbStyle1 = {
//     width: "180px",
//     height: "180px",
//     objectFit: "contain",

//     padding: "5px",
//   };
//   return (
//     <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//       {/* 1. Main Background Image */}
//       <img
//         src={OEimage}
//         style={{
//           width: "100%",
//           height: "auto",
//           display: "block",
//           minHeight: "600px",
//           objectFit: "cover",
//         }}
//         alt="Ocean Explorer Background"
//       />

//       {/* 2. Content Overlay Container (Moves everything to the left side) */}
//       <div
//         style={{
//           position: "absolute",
//           top: "15%",
//           left: "10%",
//           marginTop: "-550px", // 1. Moves the entire block up by 400px
//           color: "white",
//           zIndex: 10,
//           fontFamily: "sans-serif",
//         }}
//       >
//         {/* Buttons Row */}
//         <div
//           style={{
//             display: "flex",
//             gap: "40px", // 2. Increased gap for the zoom look
//             marginBottom: "80px",
//           }}
//         >
//           <Link
//             to="/CruiseBookingPageOE"
//             style={{
//               ...btnStyle("#5ca4bc"),
//               display: "inline-block",
//               textDecoration: "none",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#4a8ba1")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#5ca4bc")}
//           >
//             JOIN NOW
//           </Link>
//           <button
//             style={btnStyle("#175490")}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#0d3a66")} // Darker shade for More Info
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#175490")}
//           >
//             MORE INFO
//           </button>
//         </div>

//         {/* Logos Row */}
//         <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
//           <Link to="/OCEANEXPLORER">
//             <img
//               src={Imagea}
//               style={{
//                 ...thumbStyle1,
//                 width: "150px", // 3. Set image width
//                 height: "150px", // 4. Set image height
//                 border: "4px solid black",
//                 backgroundColor: "white",
//               }}
//               alt="OE"
//             />
//           </Link>
//           <Link to="/SEAGUARDIAN">
//             <img
//               src={Imagec}
//               style={{ ...thumbStyle, width: "150px", height: "150px" }}
//               alt="SG"
//             />
//           </Link>
//           <Link to="/SERENITYDREAM">
//             <img
//               src={Imageb}
//               style={{ ...thumbStyle, width: "150px", height: "150px" }}
//               alt="SD"
//             />
//           </Link>
//         </div>
//       </div>
//       <div
//         style={{
//           minHeight: "1100px",
//           backgroundColor: "#175490",
//           padding: "80px 40px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center", // Centers the header and content block
//           fontFamily: "'Inter', sans-serif",
//         }}
//       >
//         {/* Header Section */}
//         <div style={{ textAlign: "center", marginBottom: "60px" }}>
//           <h2
//             style={{
//               color: "#ffffff",
//               fontSize: "85px",
//               fontFamily: "'Irish Grover', cursive",
//               margin: "0",
//               display: "inline-block",
//               borderBottom: "2px solid rgba(255, 255, 255, 0.5)", // The underline from your image
//               paddingBottom: "20px",
//             }}
//           >
//             Experience the Ocean Explorer Difference
//           </h2>
//         </div>

//         {/* Content Block */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center", // Vertically centers image and text
//             gap: "60px", // Professional spacing between image and text
//             maxWidth: "1700px",
//           }}
//         >
//           {/* Image Container */}
//           <div style={{ flex: "0 0 441px" }}>
//             <img
//               src={SEsum}
//               alt="Diver underwater"
//               style={{
//                 width: "441px", // Fixed width
//                 height: "541px", // Fixed height
//                 objectFit: "cover", // 1. Prevents stretching, crops to fit instead
//                 borderRadius: "40px",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//                 display: "block", // 2. Removes any small gap below the image
//               }}
//             />
//           </div>

//           {/* Text Container */}
//           <div style={{ color: "#ffffff" }}>
//             <p
//               style={{
//                 fontSize: "30px",
//                 lineHeight: "1.8", // Matches the spacious text in the screenshot
//                 fontWeight: "1200px",
//                 textAlign: "left",
//               }}
//             >
//               Dive into the ocean’s best-kept secrets aboard the{" "}
//               <strong>OCEAN EXPLORER</strong>—the ultimate vessel for hardcore
//               divers, aspiring marine scientists, and adventure seekers who
//               refuse to stay on the surface. This purpose-built expedition ship
//               isn’t just a cruise; it’s your ticket to uncharted dive sites,
//               from vibrant coral walls teeming with manta rays to sunken
//               shipwrecks steeped in history, all led by a team of certified dive
//               instructors and oceanographers. <br />
//               <br />
//               Whether you’re joining hands-on sea lab sessions to analyze marine
//               life, chasing bioluminescent plankton on night dives, or gaining
//               exclusive access to remote biodiversity hotspots accessible only
//               by this ship, every moment is a chance to turn curiosity into
//               discovery—and every dive is a story worth telling.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//         {/* The Background Image */}
//         <img
//           style={{
//             width: "100%",
//             display: "block",
//             minHeight: "600px",
//             objectFit: "cover",
//           }}
//           src={SEsum1}
//           alt="Underwater Exploration"
//         />

//         {/* The Floating Text Box */}
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "10%",
//             transform: "translateY(-50%)", // Centers text vertically
//             maxWidth: "750px", // Keeps text narrow like in the photo
//             color: "#ffffff",
//             fontFamily: "'Inter', sans-serif",
//             zIndex: 2,
//           }}
//         >
//           {/* Quote Icon */}
//           <h2
//             style={{
//               fontSize: "60px",
//               margin: "0",
//               lineHeight: "1",
//               opacity: "0.8",
//             }}
//           >
//             “
//           </h2>

//           {/* Heading */}
//           <h2
//             style={{
//               fontSize: "clamp(60px, 4vw, 42px)",
//               fontWeight: "bold",
//               margin: "10px 0 20px 0",
//               lineHeight: "1.2",
//             }}
//           >
//             Expert-Led Diving &<br /> Scientific Exploration
//           </h2>

//           {/* Paragraph */}
//           <p
//             style={{
//               fontSize: "40px",
//               lineHeight: "1.6",
//               marginBottom: "30px",
//               opacity: "0.9",
//             }}
//           >
//             Dive into uncharted underwater realms with certified dive
//             instructors, explore vibrant coral walls and historic shipwrecks,
//             and join hands-on sea lab sessions to analyze marine life and ocean
//             health. Enjoy after-dive debriefs with oceanographers, night dives
//             to witness bioluminescent plankton, and exclusive access to remote
//             biodiversity hotspots only accessible by this vessel!
//           </p>

//           {/* Link/Button Style */}
//           <p
//             style={{
//               fontSize: "40px",
//               fontWeight: "bold",
//               cursor: "pointer",
//               borderBottom: "1px solid white",
//               display: "inline-block",
//               paddingBottom: "5px",
//             }}
//           >
//             Explore Diving & Science Experiences
//           </p>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "#175490",
//           padding: "160px 80px", // 200% Padding
//           color: "white",
//           textAlign: "center",
//           fontFamily: "sans-serif",
//         }}
//       >
//         {/* Header Section */}
//         <div>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "40px", // 200% Gap
//               borderBottom: "4px solid white", // 200% Border thickness
//               paddingBottom: "20px",
//               marginBottom: "60px",
//               maxWidth: "fit-content",
//               margin: "0 auto 60px auto",
//             }}
//           >
//             <img
//               src={EXicon}
//               alt="Icon"
//               style={{ width: "200px", height: "auto" }} // 200% Icon size
//             />
//             <h1
//               style={{
//                 color: "white",
//                 fontSize: "180px", // 200% Font size
//                 margin: 0,
//                 fontFamily: "sans-serif",
//               }}
//             >
//               Expedition-Ready Dining
//             </h1>
//           </div>

//           <p
//             style={{
//               fontSize: "36px",
//               opacity: 0.9,
//               marginBottom: "80px",
//               textAlign: "left",
//               padding: "15px",
//             }}
//           >
//             {" "}
//             {/* 200% Font size */}
//             Fuel your underwater adventures at themed venues tailored for
//             explorers:
//           </p>
//         </div>

//         {/* Cards Grid Container */}
//         <div
//           style={{
//             position: "relative",
//             display: "flex",
//             justifyContent: "center",
//             gap: "60px", // 200% Gap
//             flexWrap: "wrap",
//             maxWidth: "2400px", // 200% Container width
//             margin: "0 auto",
//           }}
//         >
//           {/* Floating Badge (Moved Further Right) */}
//           <div
//             style={{
//               position: "absolute",
//               top: "-100px", // Adjusted for zoom
//               right: "-50px", // Moved further right
//               maxWidth: "360px", // 200% Width
//               transform: "rotate(15deg)",
//               textAlign: "right",
//               fontSize: "28px", // 200% Font size
//               fontWeight: "bold",
//               lineHeight: "1.2",
//             }}
//           >
//             Every bite is designed to replenish energy for your next deep-sea
//             discovery.
//           </div>

//           {/* Reusable Card Style with 200% specs */}
//           {[
//             {
//               img: EXimga,
//               title: "Abyss Grill",
//               desc: "Hearty high-protein meals—grilled local seafood, quinoa bowls, and dive recovery plates—with al fresco deck seating",
//             },
//             {
//               img: EXimgb,
//               title: "Plankton Pit Stop",
//               desc: "Grab-and-go energy boosts like protein smoothies and avocado toast",
//             },
//             {
//               img: EXimgc,
//               title: "Depth Debrief",
//               desc: "A cozy lounge for post-dive craft beers and charcuterie, where you swap stories with fellow divers and experts",
//             },
//           ].map((card, i) => (
//             <div key={i} style={{ width: "700px", textAlign: "left" }}>
//               {" "}
//               {/* 200% Width */}
//               <img
//                 src={card.img}
//                 style={{
//                   width: "100%",
//                   height: "440px",
//                   objectFit: "cover",
//                   borderRadius: "10px",
//                 }} // 200% Height
//                 alt={card.title}
//               />
//               <h2 style={{ fontSize: "48px", margin: "40px 0 20px" }}>
//                 {card.title}
//               </h2>{" "}
//               {/* 200% spacing/font */}
//               <p style={{ fontSize: "30px", lineHeight: "1.5", opacity: 0.8 }}>
//                 {card.desc}
//               </p>{" "}
//               {/* 200% font */}
//             </div>
//           ))}
//         </div>

//         {/* Footer Links */}
//         <div style={{ marginTop: "120px" }}>
//           <p
//             style={{
//               fontSize: "40px",
//               fontStyle: "italic",
//               marginBottom: "40px",
//             }}
//           >
//             {" "}
//             {/* 200% specs */}
//             And more...
//           </p>
//           <p
//             style={{
//               display: "inline-block",
//               borderBottom: "2px solid white",
//               paddingBottom: "10px",
//               cursor: "pointer",
//               fontWeight: "bold",
//               fontSize: "32px", // 200% font
//             }}
//           >
//             [Explore Diving-Focused Menus]
//           </p>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "#175490",
//           padding: "160px 80px", // 200% Padding
//           color: "white",
//           fontFamily: "sans-serif",
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         {/* 1. Header with Checkmark */}
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "1800px",
//             display: "flex",
//             alignItems: "center",
//             gap: "30px",
//             marginBottom: "80px",
//           }}
//         >
//           <span style={{ fontSize: "100px" }}>✓</span> {/* Big checkmark */}
//           <h1
//             style={{
//               fontSize: "80px", // 200% Zoom
//               margin: 0,
//               borderBottom: "4px solid white",
//               paddingBottom: "10px",
//             }}
//           >
//             Adventure-Designed Comforts
//           </h1>
//         </div>

//         {/* 2. Four-Quadrant Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gridTemplateRows: "1fr 1fr",
//             width: "100%",
//             maxWidth: "1800px",
//             position: "relative",
//           }}
//         >
//           {/* Grid Divider Lines (The white cross) */}
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "0",
//               width: "100%",
//               height: "2px",
//               backgroundColor: "white",
//               opacity: 0.5,
//             }}
//           ></div>
//           <div
//             style={{
//               position: "absolute",
//               top: "0",
//               left: "50%",
//               width: "2px",
//               height: "100%",
//               backgroundColor: "white",
//               opacity: 0.5,
//             }}
//           ></div>

//           {/* Top Left: Text 1 */}
//           <div
//             style={{
//               padding: "60px",
//               textAlign: "right",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//             }}
//           >
//             <p
//               style={{ fontSize: "32px", lineHeight: "1.6", maxWidth: "600px" }}
//             >
//               All cabins feature durable, functional layouts with dedicated
//               storage for dive gear, quick-access charging ports for underwater
//               cameras, and split bathrooms to streamline post-dive routines.
//             </p>
//           </div>

//           {/* Top Right: Image 1 */}
//           <div
//             style={{
//               padding: "60px",
//               display: "flex",
//               justifyContent: "flex-start",
//             }}
//           >
//             <img
//               src={ADCimga}
//               style={{
//                 width: "600px",
//                 height: "450px",
//                 objectFit: "cover",
//                 border: "2px solid white",
//               }}
//               alt="Cabin interior"
//             />
//           </div>

//           {/* Bottom Left: Image 2 */}
//           <div
//             style={{
//               padding: "60px",
//               display: "flex",
//               justifyContent: "flex-end",
//             }}
//           >
//             <img
//               src={ADCimgb}
//               style={{
//                 width: "600px",
//                 height: "450px",
//                 objectFit: "cover",
//                 border: "2px solid white",
//               }}
//               alt="Bathroom layout"
//             />
//           </div>

//           {/* Bottom Right: Text 2 */}
//           <div style={{ padding: "60px", textAlign: "left" }}>
//             <p
//               style={{
//                 fontSize: "32px",
//                 lineHeight: "1.6",
//                 maxWidth: "600px",
//                 marginBottom: "40px",
//               }}
//             >
//               Throughout the ship, find practical touches like a gear
//               maintenance station, a decompression rest area, and cozy communal
//               spaces—crafted for explorers who value utility and comfort
//               equally.
//             </p>
//             <div style={{ marginLeft: "410px" }}>
//               <p
//                 style={{
//                   fontSize: "30px",
//                   fontWeight: "bold",
//                   borderBottom: "2px solid white",
//                   display: "inline-block",
//                   cursor: "pointer",
//                   margin: 0,
//                 }}
//               >
//                 [Explore Explorer Cabins]
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OCEANEXPLORER;

import { Link } from "react-router-dom";
import styles from "./OCEANEXPLORER.module.css";

import OEimage from "../../../assets/OCEANEXPLORER/OEpagehead.png";
import Imagea from "../../../assets/Cruises/OE.PNG";
import Imageb from "../../../assets/Cruises/SD.PNG";
import Imagec from "../../../assets/Cruises/SG.PNG";
import SEsum from "../../../assets/OCEANEXPLORER/SEpagesum.jpg";
import SEsum1 from "../../../assets/OCEANEXPLORER/SEpagesum1.png";
import EXicon from "../../../assets/OCEANEXPLORER/icon.png";
import EXimga from "../../../assets/OCEANEXPLORER/Expedition1.png";
import EXimgb from "../../../assets/OCEANEXPLORER/Expedition2.png";
import EXimgc from "../../../assets/OCEANEXPLORER/Expedition3.png";
import ADCimga from "../../../assets/OCEANEXPLORER/ADC1.png";
import ADCimgb from "../../../assets/OCEANEXPLORER/ADC2.png";

const OCEANEXPLORER = () => {
  return (
    <div className={styles.container}>
      <img src={OEimage} className={styles.mainBg} alt="Background" />

      {/* Hero Overlay */}
      <div className={styles.overlayContainer}>
        <div className={styles.buttonRow}>
          <Link
            to="/CruiseBookingPageOE"
            className={`${styles.btnBase} ${styles.joinNowBtn}`}
          >
            JOIN NOW
          </Link>
          <button className={`${styles.btnBase} ${styles.moreInfoBtn}`}>
            MORE INFO
          </button>
        </div>
        <div className={styles.logosRow}>
          <Link to="/OCEANEXPLORER">
            <img src={Imagea} className={styles.logoImgActive} alt="OE" />
          </Link>
          <Link to="/SEAGUARDIAN">
            <img src={Imagec} className={styles.logoImg} alt="SG" />
          </Link>
          <Link to="/SERENITYDREAM">
            <img src={Imageb} className={styles.logoImg} alt="SD" />
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <div className={styles.contentSection}>
        <h2 className={styles.headerText}>
          Experience the Ocean Explorer Difference
        </h2>
        <div className={styles.flexContent}>
          <img src={SEsum} className={styles.diverImage} alt="Diver" />
          <p className={styles.descriptionText}>
            Dive into the ocean’s best-kept secrets aboard the{" "}
            <strong>OCEAN EXPLORER</strong>—the ultimate vessel for hardcore
            divers, aspiring marine scientists, and adventure seekers who refuse
            to stay on the surface. This purpose-built expedition ship isn’t
            just a cruise; it’s your ticket to uncharted dive sites, from
            vibrant coral walls teeming with manta rays to sunken shipwrecks
            steeped in history, all led by a team of certified dive instructors
            and oceanographers. Whether you’re joining hands-on sea lab sessions
            to analyze marine life, chasing bioluminescent plankton on night
            dives, or gaining exclusive access to remote biodiversity hotspots
            accessible only by this ship, every moment is a chance to turn
            curiosity into discovery—and every dive is a story worth telling.
          </p>
        </div>
      </div>

      {/* Expert-Led Section */}
      <div className={styles.quoteSection}>
        <img src={SEsum1} className={styles.mainBg} alt="Underwater" />
        <div className={styles.quoteBox}>
          <h2 style={{ fontSize: "60px", margin: "0", opacity: "0.8" }}>“</h2>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 42px)",
              fontWeight: "bold",
              margin: "20px 0",
            }}
          >
            Expert-Led Diving & Scientific Exploration
          </h2>
          <p className={styles.quoteLargeText}>
            Dive into uncharted underwater realms with certified dive
            instructors, explore vibrant coral walls and historic shipwrecks,
            and join hands-on sea lab sessions to analyze marine life and ocean
            health. Enjoy after-dive debriefs with oceanographers, night dives
            to witness bioluminescent plankton, and exclusive access to remote
            biodiversity hotspots only accessible by this vessel!
          </p>
          <p className={styles.quoteLink}>
            Explore Diving & Science Experiences
          </p>
        </div>
      </div>

      {/* Dining Section */}
      <div className={styles.diningContainer}>
        <div className={styles.diningHeader}>
          <img src={EXicon} style={{ width: "100px" }} alt="Icon" />
          <h1 className={styles.diningTitle}>Expedition-Ready Dining</h1>
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.floatingBadge}>
            Every bite is designed to replenish energy for your next deep-sea
            discovery.
          </div>
          {[
            {
              img: EXimga,
              title: "Abyss Grill",
              desc: "Hearty high-protein meals—grilled local seafood, quinoa bowls, and dive recovery plates—with al fresco deck seating",
            },
            {
              img: EXimgb,
              title: "Plankton Pit Stop",
              desc: "Grab-and-go energy boosts like protein smoothies and avocado toast",
            },
            {
              img: EXimgc,
              title: "Depth Debrief",
              desc: "A cozy lounge for post-dive craft beers and charcuterie, where you swap stories with fellow divers and experts",
            },
          ].map((card, i) => (
            <div key={i} className={styles.diningCard}>
              <img src={card.img} className={styles.cardImg} alt={card.title} />
              <h2 style={{ fontSize: "48px", margin: "40px 0 20px" }}>
                {card.title}
              </h2>
              <p className={styles.descriptionText}>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <p style={{ fontSize: "40px", fontStyle: "italic" }}>And more...</p>
          <p
            style={{ cursor: "pointer", fontWeight: "bold", fontSize: "35px" }}
          >
            [Explore Diving-Focused Menus]
          </p>
        </div>
      </div>

      {/* Comforts Grid */}
      <div className={styles.contentSection}>
        <h1 className={styles.headerText} style={{ fontSize: "80px" }}>
          ✓ Adventure-Designed Comforts
        </h1>
        <div className={styles.gridContainer}>
          <div className={styles.gridLineH} />
          <div className={styles.gridLineV} />
          <div className={styles.gridCell}>
            <p>
              All cabins feature durable, functional layouts with dedicated
              storage for dive gear, quick-access charging ports for underwater
              cameras, and split bathrooms to streamline post-dive routines.
            </p>
          </div>
          <div className={styles.gridCell}>
            <img src={ADCimga} className={styles.gridImg} alt="Cabin" />
          </div>
          <div className={styles.gridCell}>
            <img src={ADCimgb} className={styles.gridImg} alt="Bath" />
          </div>
          <div className={styles.gridCell}>
            <p>
              Throughout the ship, find practical touches like a gear
              maintenance station, a decompression rest area, and cozy communal
              spaces—crafted for explorers who value utility and comfort
              equally.
            </p>
            <p
              className={styles.quoteLink}
              style={{ marginTop: "50px", fontSize: "45px" }}
            >
              [Explore Explorer Cabins]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCEANEXPLORER;
