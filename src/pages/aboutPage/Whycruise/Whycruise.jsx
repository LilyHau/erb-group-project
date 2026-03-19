// import Text from "./Text";
// import Image from "../../../assets/Whycruise/SERENITYDREAM.jpg";

// const Whycruise = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#edfaff",
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center",
//         // gap: "40px", // 1. Gap removed
//         width: "100%",
//         maxWidth: "2300px",
//         height: "900px",
//         margin: "0 auto",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           flex: "0 0 auto",
//           transform: "translateX(-30%)",
//           width: "53%",
//         }}
//       >
//         <img
//           style={{
//             borderRadius: "50%",
//             width: "950px",
//             height: "750px",
//             objectFit: "cover",
//           }}
//           src={Image}
//           alt="Cruise Ship"
//         />
//       </div>

//       <div
//         style={{
//           width: "1000px", // 2. Set width to 1000px
//           textAlign: "left",
//           transform: "translateX(-50px)",
//           zIndex: 1,
//         }}
//       >
//         <Text />
//         <p style={{ lineHeight: "1.6", fontSize: "2.3rem" }}>
//           At Ocean Park HK Cruise Line, we believe <br /> a cruise is more than
//           a vacation—it’s a <br />
//           deep, meaningful connection to the ocean <br />
//           that leaves both you and the planet better <br />
//           off.
//         </p>
//         <br />
//         <br />
//         <p
//           style={{
//             color: "#00000065",
//             fontSize: "27px",
//           }}
//         >
//           <strong>Find Your Perfect Cruise | Book Your Voyage Now</strong>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Whycruise;

import Text from "./Text";
import Image from "../../../assets/Whycruise/SERENITYDREAM.jpg";
import styles from "./Whycruise.module.css";

const Whycruise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.cruiseImage} src={Image} alt="Cruise Ship" />
      </div>

      <div className={styles.textContainer}>
        <Text />
        <p className={styles.description}>
          At Ocean Park HK Cruise Line, we believe <br /> a cruise is more than
          a vacation—it’s a <br />
          deep, meaningful connection to the ocean <br />
          that leaves both you and the planet better <br />
          off.
        </p>
        <br />
        <br />
        <p className={styles.footerText}>
          <strong>Find Your Perfect Cruise | Book Your Voyage Now</strong>
        </p>
      </div>
    </div>
  );
};

export default Whycruise;
