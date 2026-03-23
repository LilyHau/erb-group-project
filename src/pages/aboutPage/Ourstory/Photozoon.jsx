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
