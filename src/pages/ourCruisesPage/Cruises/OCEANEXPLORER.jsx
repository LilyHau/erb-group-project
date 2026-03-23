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

import { useNavigate } from "react-router-dom";
import backgroundVideo from "../../../assets/OCEANEXPLORER/OEherovideo.mp4"; // Path to your video

const OCEANEXPLORER = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* Hero Overlay */}
      <section className={styles.heroContainer}>
        <video autoPlay loop muted playsInline className={styles.bgVideo}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className={styles.content}>
          <h1 className={styles.title}>OCEAN EXPLORER</h1>
          <p className={styles.chineseTitle}>海洋探索號</p>

          <p className={styles.tagline}>
            Dive into the Deep,
            <br />
            Touch the Abyss
          </p>

          <div className={styles.btnRow}>
            <button
              className={styles.joinBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4c93af")} // Darker shade
              onMouseOut={(e) => (e.target.style.backgroundColor = "#5ca4bc")} // Original color
              onClick={() => navigate("/CruiseBookingPageOE")} // Your click handler here
            >
              JOIN NOW
            </button>
            <button
              className={styles.infoBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4c93af")} // Or any color
              onMouseOut={(e) => (e.target.style.backgroundColor = "#5ca4bc")} // Or original color
              onClick={() => navigate("/oeInfo")} // Your click handler here
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
                <img src={Imageb} alt="Turtle" />
              </Link>
            </div>
            <div className={styles.iconItem}>
              <Link to="/SERENITYDREAM">
                <img src={Imagec} alt="Island" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Image Composition */}
      </section>

      {/* hero end */}

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
