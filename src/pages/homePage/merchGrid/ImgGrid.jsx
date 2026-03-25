import { useState, useEffect } from "react";
import styles from "./ImgGrid.module.css";
import tshirtImg from "../../../assets/shopPage/紀念品水手上衣3.jpg";
import turtleImg from "../../../assets/shopPage/紀念品水手衣服海龜.jpg";
import capImg from "../../../assets/shopPage/紀念品水手帽.jpg";
import coffeeImg from "../../../assets/shopPage/紀念品杯.jpg";
import keychainImg from "../../../assets/homePage/海洋公園郵輪限定紀念品鑰匙扣.jpg";
import bearImg from "../../../assets/shopPage/紀念品水手衣服動物公仔.jpg";
import shipImg from "../../../assets/homePage/海洋公園郵輪限定紀念品冰箱貼.jpg";

const images = [
  {
    id: "tshirt",
    src: tshirtImg,
    alt: "T-shirt",
  },
  {
    id: "turtle",
    src: turtleImg,
    alt: "Turtle",
  },
  { id: "cap", src: capImg, alt: "Cap" },
  { id: "coffee", src: coffeeImg, alt: "Coffee" },
  {
    id: "keychain",
    src: keychainImg,
    alt: "Keychain",
  },
  {
    id: "bear",
    src: bearImg,
    alt: "Bear",
  },
  {
    id: "ship",
    src: shipImg,
    alt: "Cruise Ship",
  },
];

const ImgGrid = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // 當圖片放大時，禁止背景捲動
  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "auto";
  }, [selectedImg]);

  return (
    <div className={styles.container}>
      {/* 網格圖片列表 */}
      <div className={styles.grid}>
        {images.map((img) => (
          <div
            key={img.id}
            className={`${styles.item} ${styles[img.id]}`}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* 放大後的彈窗 (Lightbox) */}
      {selectedImg && (
        <div className={styles.overlay} onClick={() => setSelectedImg(null)}>
          <div className={styles.modal}>
            <img src={selectedImg.src} alt={selectedImg.alt} />
            <span className={styles.close}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgGrid;
