import { Link } from "react-router-dom";

import Imagea from "../../../assets/Cruises/OE.webp";
import Imageb from "../../../assets/Cruises/SD.webp";
import Imagec from "../../../assets/Cruises/SG.webp";
// FIX 1: Ensure SEsum is imported
import SG2 from "../../../assets/SEAGUARDIAN/SG2.jpg";
import SGsum from "../../../assets/SEAGUARDIAN/SGsum.png";
import SGicon from "../../../assets/SEAGUARDIAN/SGicon.png";
import SGimga from "../../../assets/SEAGUARDIAN/SGR3.jpg";
import SGimgb from "../../../assets/SEAGUARDIAN/SGR2.jpg";
import SGimgc from "../../../assets/SEAGUARDIAN/SGR1.jpg";
import SGfooter from "../../../assets/SEAGUARDIAN/SGfooter.png";
import styles from "./SEAGUARDIAN.module.css";
import { useNavigate } from "react-router-dom";
import Heroimg1 from "../../../assets/SEAGUARDIAN/Clipsg.png";
import Heroimg2 from "../../../assets/SEAGUARDIAN/Oceancleanup1.png";
import Heroimg3 from "../../../assets/SEAGUARDIAN/seaturlerescue1.png";
import backgroundVideo from "../../../assets/SEAGUARDIAN/OceanLife .mp4";

const SEAGUARDIAN = () => {
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
    <div>
      {/* SECTION 1: Hero Area */}
      <section className={styles.heroContainer}>
        <video autoPlay loop muted playsInline className={styles.bgVideo}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className={styles.content}>
          <h1 className={styles.title}>SEA GUARDIAN</h1>
          <p className={styles.chineseTitle}>海洋保育號</p>

          <p className={styles.tagline}>
            A Covenant of Coexistence
            <br />
            Between Humans and the Sea
          </p>

          <div className={styles.btnRow}>
            <button
              className={styles.joinBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4caf50")} // Darker shade
              onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")} // Original color
              onClick={() => navigate("/CruiseBookingPageSG")} // Your click handler here
            >
              JOIN NOW
            </button>
            <button
              className={styles.infoBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#c0dfb1")} // Or any color
              onMouseOut={(e) => (e.target.style.backgroundColor = "#c0dfb1")} // Or original color
              onClick={() => navigate("/SGInfo")} // Your click handler here
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

        {/* Floating Image Composition */}
      </section>

      {/* hero end */}

      {/* SECTION 2: Difference Section */}
      <div className={styles.contentcontainer}>
        <div>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className={styles.experiencetitle}>
              Experience the Sea Guardian Difference
            </h2>
          </div>

          <div className={styles.contentblock}>
            <div style={{ flex: "0 0 auto" }}>
              <img src={SG2} className={styles.summaryimg} alt="Diver" />
            </div>

            <div style={{ color: "#000000", flex: "1", minWidth: "300px" }}>
              <p className={styles.summarytext}>
                Turn your vacation into a mission of hope aboard the SEA
                GUARDIAN—the volunteer-focused conservation cruise where every
                passenger becomes an ocean hero. More than a journey, this
                floating conservation hub invites you to roll up your sleeves
                and make a tangible impact: plant coral fragments to restore
                degraded reefs, assist in sea turtle nesting surveys and
                hatchling releases, and join coastal and underwater cleanup
                drives to rid our oceans of harmful debris—all guided by leading
                marine biologists and conservation experts. Alongside
                like-minded eco-warriors, you’ll attend eye-opening workshops,
                witness the fruits of your labor on before-and-after reef tours,
                and leave with not just memories, but the pride of knowing
                you’ve helped protect the planet’s most precious ecosystem for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgcontainer}>
        {/* The Background Image */}
        <img
          className={styles.imgimage}
          src={SGsum}
          alt="Underwater Exploration"
        />
      </div>
      <div className={styles.sectionbackground}>
        {/* Header Section */}
        <div>
          <div className={styles.headerflex}>
            <img className={styles.iconimage} src={SGicon} alt="Icon" />
            <h1 className={styles.titleheading}>
              Sustainable, Purpose-Driven Dining
            </h1>
          </div>

          <p className={styles.descriptiontext}>
            {" "}
            {/* 200% Font size */}
            Indulge in eco-conscious fare at three mission-aligned venues:
          </p>
        </div>
        {/* Cards Grid Container */}
        <div className={styles.cardscontainer}>
          {/* Floating Badge (Moved Further Right) */}
          <div className={styles.badge}>
            Every meal honors the ocean—no single-use plastics, no overfished
            species, just delicious, purposeful dining.
          </div>

          {/* Reusable Card Style with 200% specs */}
          {[
            {
              img: SGimga,
              title: "Reef & Root",
              desc: "100% plant-forward and sustainable seafood dishes, using on-board herb garden greens, with compostable tableware",
            },
            {
              img: SGimgb,
              title: "Guardian Grind",
              desc: "Fair-trade coffee, vegan pastries, and “Volunteer Fuel Packs” for beach cleanups",
            },
            {
              img: SGimgc,
              title: "Coral Commons",
              desc: "A communal lounge for herbal teas and local vegan desserts, hosting conservation debriefs",
            },
          ].map((card, i) => (
            <div className={styles.card} key={i}>
              {" "}
              {/* 200% Width */}
              <img src={card.img} className={styles.cardimg} alt={card.title} />
              <h2 className={styles.cardtitle}>{card.title}</h2>{" "}
              {/* 200% spacing/font */}
              <p className={styles.carddesc}>{card.desc}</p>{" "}
            </div>
          ))}
        </div>
        {/* Footer Links */}
        <div className={styles.footerlinks}>
          <p className={styles.footertext}>
            {" "}
            {/* 200% specs */}
            And more...
          </p>
          {/* <p className={styles.explorelink}>[Explore Diving-Focused Menus]</p> */}
        </div>
      </div>
      <div>
        <img className={styles.footerimage} src={SGfooter} alt="" />
      </div>
    </div>
  );
};

export default SEAGUARDIAN;
