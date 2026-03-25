import React from "react";
import { Link } from "react-router-dom";
import OEimage from "../../../assets/SERENITYDREAM/SDpagehead.png";
import Imagea from "../../../assets/Cruises/OE.webp";
import Imageb from "../../../assets/Cruises/SD.webp";
import Imagec from "../../../assets/Cruises/SG.webp";
import SDsum from "../../../assets/SERENITYDREAM/SD2.jpg";
import SDsum1 from "../../../assets/SERENITYDREAM/SDsum1.png";
import SDsum2 from "../../../assets/SERENITYDREAM/SDsum2.png";
import SDfooter from "../../../assets/SERENITYDREAM/SDfooter.png";
import styles from "./SERENITYDREAM.module.css";
import { useNavigate } from "react-router-dom";
import Heroimg1 from "../../../assets/SERENITYDREAM/Clippathgroup.png";
import Heroimg2 from "../../../assets/SERENITYDREAM/Group.png";
import Heroimg3 from "../../../assets/SERENITYDREAM/Clip.png";
import backgroundVideo from "../../../assets/SERENITYDREAM/World.mp4";

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
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Hero Overlay */}
      <section className={styles.heroContainer}>
        <video autoPlay loop muted playsInline className={styles.bgVideo}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className={styles.content}>
          <h1 className={styles.title}>Serenity Dream</h1>
          <p className={styles.chineseTitle}>海洋悠享號</p>

          <p className={styles.tagline}>
            A Luxury Resort Floating
            <br />
            on the Sea
          </p>

          <div className={styles.btnRow}>
            <button
              className={styles.joinBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d28d8d")} // Darker shade
              onMouseOut={(e) => (e.target.style.backgroundColor = "#d28d8d")} // Original color
              onClick={() => navigate("/CruiseBookingPageSD")} // Your click handler here
            >
              JOIN NOW
            </button>
            <button
              className={styles.infoBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f7d77e")} // Or any color
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f7d77e")} // Or original color
              onClick={() => navigate("/SDInfo")} // Your click handler here
            >
              MORE INFO
            </button>
          </div>

          {/* Small Navigation Icons */}
          <div className={styles.iconNav}>
            <div className={styles.iconItem}>
              <Link to="/OCEANEXPLORER">
                <img src={Imagea} alt="Eco" />
              </Link>
            </div>
            <div className={styles.iconItem}>
              <Link to="/SEAGUARDIAN">
                <img src={Imagec} alt="Turtle" />
              </Link>
            </div>
            <div className={styles.iconItem}>
              <Link to="/SERENITYDREAM">
                <img src={Imageb} alt="Island" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* hero end */}

      {/* Experience Section */}
      <div className={styles.contentContainer}>
        <div>
          <h2 className={styles.experienceTitle}>
            Experience the Serenity Dream Difference
          </h2>
        </div>

        <div className={styles.contentBlock}>
          <div className={styles.summaryImgContainer}>
            <img
              src={SDsum}
              className={styles.summaryImg}
              alt="Diver underwater"
            />
          </div>

          <div style={{ color: "black" }}>
            <p className={styles.summaryText}>
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
        <img src={SDsum1} style={{ width: "100%", display: "block" }} alt="" />
      </div>
      <div>
        <img src={SDsum2} style={{ width: "100%", display: "block" }} alt="" />
      </div>
      <div>
        <img
          src={SDfooter}
          style={{ width: "100%", display: "block" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default SERENITYDREAM;
