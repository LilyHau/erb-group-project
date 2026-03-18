import React from "react";
import { Link } from "react-router-dom";
import OEimage from "../../../assets/SERENITYDREAM/SDpagehead.png";
import Imagea from "../../../assets/Cruises/OE.PNG";
import Imageb from "../../../assets/Cruises/SD.PNG";
import Imagec from "../../../assets/Cruises/SG.PNG";
import SDsum from "../../../assets/SERENITYDREAM/SD2.jpg";
import SDsum1 from "../../../assets/SERENITYDREAM/SDsum1.png";
import SDsum2 from "../../../assets/SERENITYDREAM/SDsum2.png";
import SDfooter from "../../../assets/SERENITYDREAM/SDfooter.png";
import styles from "./SERENITYDREAM.module.css";

const SERENITYDREAM = () => {
  const thumbStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
    padding: "-5px",
  };

  const btnStyle = (bg) => ({
    padding: "27px 55px",
    marginTop: "100px",
    fontSize: "30px",
    backgroundColor: bg,
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "0.3s",
  });

  const thumbStyle1 = {
    width: "130px",
    height: "130px",
    objectFit: "contain",
    padding: "5px",
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Hero Image */}
      <div>
        <img className={styles.hero} src={OEimage} alt="Ocean Explorer" />
      </div>

      {/* MASTER OVERLAY - Perfectly Locked */}
      <div className={styles.herooverlayunit}>
        {/* Buttons Row (Top) */}
        <div className={styles.btnRow}>
          <button
            style={{ ...btnStyle("#d28d8d"), marginTop: 0 }} // Force remove the old margin
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d28d76")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#d28d8d")}
          >
            JOIN NOW
          </button>
          <button
            style={{ ...btnStyle("#f7d77e"), marginTop: 0 }} // Force remove the old margin
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e5c566")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f7d77e")}
          >
            MORE INFO
          </button>
        </div>

        {/* Thumbs container (Bottom) */}
        <div className={styles.thumbContainer}>
          <Link to="/OCEANEXPLORER">
            <img src={Imagea} style={thumbStyle1} alt="OE" />
          </Link>
          <Link to="/SEAGUARDIAN">
            <img src={Imagec} style={thumbStyle1} alt="SG" />
          </Link>
          <Link to="/SERENITYDREAM">
            <img src={Imageb} style={thumbStyle} alt="SD" />
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <div className={styles.contentContainer}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className={styles.experienceTitle}>
            Experience the Serenity Dream Difference
          </h2>
        </div>

        <div className={styles.contentBlock}>
          <div
            className={styles.summaryImgContainer}
            style={{ flex: "0 0 441px" }}
          >
            <img
              src={SDsum}
              className={styles.summaryImg}
              alt="Diver underwater"
            />
          </div>

          <div style={{ color: "black" }}>
            <p
              className={styles.summaryText}
              style={{
                fontSize: "30px",
                lineHeight: "1.8",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Escape the chaos of everyday life and sail into tranquility aboard
              the SERENITY DREAM—the family-friendly cruise designed for slow,
              sunny days and peaceful nights by the sea. This idyllic vessel is
              a haven for those who crave connection: whether you’re dining in
              the one-of-a-kind underwater restaurant, watching tropical fish
              glide past as you savor local gourmet fare, stargazing under a
              blanket of stars with guided astronomy sessions, or building
              sandcastles on secluded, crowd-free beaches. For kids, there are
              gentle snorkeling lessons and marine-themed craft workshops; for
              adults, quiet lounges with sea views and sunset beach bonfires
              with local folk music. Here, the pace slows down, the ocean takes
              center stage, and every moment is a chance to create warm, lasting
              memories with the ones you love.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Images */}
      <div>
        <img src={SDsum1} style={{ width: "100%" }} alt="" />
      </div>
      <div>
        <img src={SDsum2} style={{ width: "100%" }} alt="" />
      </div>
      <div>
        <img src={SDfooter} style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
};

export default SERENITYDREAM;
