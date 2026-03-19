// import React, { useState } from "react";
// import Ophk01 from "../../../assets/Ourstory/ocean-park-hong-kong-01.jpg";
// import Ophk02 from "../../../assets/Ourstory/ocean-park-hong-kong-02-2.jpg";
// import Ophk03 from "../../../assets/Ourstory/ocean-park-hong-kong-03.jpg";
// import Ophk04 from "../../../assets/Ourstory/ocean-park-hong-kong-04.jpg";

// const Photozoom = () => {
//   const [currentPhoto, setCurrentPhoto] = useState(Ophk01);

//   const images = [Ophk01, Ophk02, Ophk03, Ophk04];

//   return (
//     <div
//       style={{
//         width: "1000px", // Match the 850px width we set in the parent earlier
//         display: "flex",
//         backgroundColor: "#EDFAFF",
//         flexDirection: "column",
//         gap: "24px", // Space between main image and thumbnails
//       }}
//     >
//       {/* Main Image Container */}
//       <div
//         style={{
//           width: "100%",
//           height: "800px", // Adjusted height for better proportions
//           backgroundColor: "#ffffff",
//           borderRadius: "8px",
//           overflow: "hidden",
//         }}
//       >
//         <img
//           src={currentPhoto}
//           alt="Main"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover", // "cover" fills the box like your Figma design
//             display: "block",
//           }}
//         />
//       </div>

//       {/* Thumbnail Row */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           gap: "12px", // Gap between thumbnails
//           width: "100%",
//           height: "120px", // Height for the thumbnail row
//         }}
//       >
//         {images.map((img, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentPhoto(img)}
//             style={{
//               flex: 1, // This makes thumbnails share the width equally
//               height: "100%",
//               backgroundColor: "#f8f8f8",
//               cursor: "pointer",
//               borderRadius: "8px",
//               overflow: "hidden",
//               border:
//                 currentPhoto === img
//                   ? "3px solid #04040479"
//                   : "2px solid transparent",
//               transition: "border 0.2s ease",
//             }}
//           >
//             <img
//               src={img}
//               alt=""
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Photozoom;

import React, { useState } from "react";
import styles from "./Photozoom.module.css"; // 匯入 CSS Module
import Ophk01 from "../../../assets/Ourstory/ocean-park-hong-kong-01.jpg";
import Ophk02 from "../../../assets/Ourstory/ocean-park-hong-kong-02-2.jpg";
import Ophk03 from "../../../assets/Ourstory/ocean-park-hong-kong-03.jpg";
import Ophk04 from "../../../assets/Ourstory/ocean-park-hong-kong-04.jpg";

const Photozoom = () => {
  const [currentPhoto, setCurrentPhoto] = useState(Ophk01);
  const images = [Ophk01, Ophk02, Ophk03, Ophk04];

  return (
    <div className={styles.container}>
      {/* Main Image Container */}
      <div className={styles.mainImageContainer}>
        <img src={currentPhoto} alt="Main" className={styles.mainImage} />
      </div>

      {/* Thumbnail Row */}
      <div className={styles.thumbnailRow}>
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentPhoto(img)}
            className={`${styles.thumbnailWrapper} ${
              currentPhoto === img ? styles.activeThumbnail : ""
            }`}
          >
            <img src={img} alt="" className={styles.thumbnailImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photozoom;
