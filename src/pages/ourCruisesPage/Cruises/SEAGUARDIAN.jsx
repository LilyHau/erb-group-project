import { Link } from "react-router-dom";
import OEimage from "../../../assets/SEAGUARDIAN/SGpagehead.png";
import Imagea from "../../../assets/Cruises/OE.PNG";
import Imageb from "../../../assets/Cruises/SD.PNG";
import Imagec from "../../../assets/Cruises/SG.PNG";
// FIX 1: Ensure SEsum is imported
import SG2 from "../../../assets/SEAGUARDIAN/SG2.jpg";
import SGsum from "../../../assets/SEAGUARDIAN/SGsum.png";
import SGicon from "../../../assets/SEAGUARDIAN/SGicon.png";
import SGimga from "../../../assets/SEAGUARDIAN/SGR3.jpg";
import SGimgb from "../../../assets/SEAGUARDIAN/SGR2.jpg";
import SGimgc from "../../../assets/SEAGUARDIAN/SGR1.jpg";
import SGfooter from "../../../assets/SEAGUARDIAN/SGfooter.png";
import styles from "/src/pages//OurCruisesPage/Cruises/SEAGUARDIAN.module.css";

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

  return (
    <div>
      {/* SECTION 1: Hero Area */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <img className={styles.hero} src={OEimage} alt="Sea Guardian" />

        <div className={styles.herooverlayunit}>
          {/* Buttons Row */}
          <div className={styles.btnrow}>
            <button
              style={btnStyle("#4caf50")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4caf42")} // Darker shade for Join Now
              onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
            >
              JOIN NOW
            </button>
            <button
              style={btnStyle("#c0dfb1")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4caf50")} // Darker shade for More Info
              onMouseOut={(e) => (e.target.style.backgroundColor = "#c0dfb1")}
            >
              MORE INFO
            </button>
          </div>
          <div className={styles.thumbcontainer}>
            <Link to="/OCEANEXPLORER">
              <img src={Imagea} style={thumbStyle1} alt="OE" />
            </Link>
            <Link to="/SEAGUARDIAN">
              <img src={Imagec} style={thumbStyle} alt="SG" />
            </Link>
            <Link to="/SERENITYDREAM">
              <img src={Imageb} style={thumbStyle1} alt="SD" />
            </Link>
          </div>
        </div>

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
                  drives to rid our oceans of harmful debris—all guided by
                  leading marine biologists and conservation experts. Alongside
                  like-minded eco-warriors, you’ll attend eye-opening workshops,
                  witness the fruits of your labor on before-and-after reef
                  tours, and leave with not just memories, but the pride of
                  knowing you’ve helped protect the planet’s most precious
                  ecosystem for generations to come.
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
                <img
                  src={card.img}
                  className={styles.cardimg}
                  alt={card.title}
                />
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
            <p className={styles.explorelink}>[Explore Diving-Focused Menus]</p>
          </div>
        </div>
        <div>
          <img className={styles.footerimage} src={SGfooter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SEAGUARDIAN;
