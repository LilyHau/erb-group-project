// const Phototext = () => {
//   return (
//     <>
//       <div>
//         <div
//           style={{
//             fontSize: "clamp(2.6rem, 3vw, 1rem)",
//             color: "#000000",
//             backgroundColor: "#EDFAFF",
//             lineHeight: "1.7",
//           }}
//         >
//           <p>
//             Born from Ocean Park Hong Kong's
//             <br />
//             decades-long legacy of marine
//             <br />
//             conservation and education, we set out to
//             <br />
//             reimagine cruising. We saw a gap
//             <br />
//             between vacations that are all fun and no
//             <br />
//             purpose, and trips that feel like a chore—
//             <br />
//             so we built something in between: a
//             <br />
//             cruise where you can zip line over the
//             <br />
//             ocean at sunrise, plant coral at noon, and
//             <br />
//             stargaze with scientists at night.
//           </p>
//           <br />
//           <br />
//           <p>
//             This is cruising redefined—for the ocean,
//             <br />
//             for you, for the next generation.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Phototext;

import React from "react";
import styles from "./Phototext.module.css"; // 匯入 CSS Module

const Phototext = () => {
  return (
    <>
      <div>
        <div className={styles.textWrapper}>
          <p>
            Born from Ocean Park Hong Kong's
            <br />
            decades-long legacy of marine
            <br />
            conservation and education, we set out to
            <br />
            reimagine cruising. We saw a gap
            <br />
            between vacations that are all fun and no
            <br />
            purpose, and trips that feel like a chore—
            <br />
            so we built something in between: a
            <br />
            cruise where you can zip line over the
            <br />
            ocean at sunrise, plant coral at noon, and
            <br />
            stargaze with scientists at night.
          </p>
          <br />
          <br />
          <p>
            This is cruising redefined—for the ocean,
            <br />
            for you, for the next generation.
          </p>
        </div>
      </div>
    </>
  );
};

export default Phototext;
