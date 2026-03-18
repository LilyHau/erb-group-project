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

const SERENITYDREAM = () => {
  const thumbStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
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
      {/* Media Queries Hook */}
      <style>
        {`
           @media (max-width: 992px) {
  .hero-overlay-unit { 
    /* Anchors to horizontal center */
    top: 7% !important; 
    left: 23% !important; 
    transform: translateX(-50%) !important; 
    
    /* Centers children (rows) vertically */
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important; 
    
    width: 100% !important;
    gap: 20px !important; 
  }

  .btn-row { 
    gap: 15px !important; 
    justify-content: center !important; /* Centers buttons horizontally */
    width: 100% !important;
  }

  .action-btn { 
    padding: 12px 25px !important; 
    font-size: 16px !important; 
    margin-top: 0 !important; 
  }

  .thumb-container { 
    gap: 10px !important; 
    justify-content: center !important; /* Centers thumbnails horizontally */
    width: 100% !important;
  }

  .thumb-img { 
    width: 60px !important; 
    height: 60px !important; 
  }

  .experience-title { 
    font-size: 40px !important; 
  }

  .content-block { 
    flex-direction: column !important; 
    gap: 30px !important; 
  }
}

          @media (max-width: 768px) {
  /* Updated class name and centered positioning */
  .hero-overlay-unit { 
    top: 7% !important; 
    left: 23% !important; 
    transform: translateX(-50%) !important; 
    width: 90% !important;
    gap: 15px !important;
    align-items: center !important; 
  }

  /* Stack buttons vertically on mobile for better fit */
  .btn-row { 
    flex-direction: column !important; 
    gap: 10px !important; 
    width: 100% !important;
    align-items: center !important;
  }

  /* Make buttons wider/easier to tap on phone */
  .action-btn { 
    width: 90px !important; 
    padding: 10px 20px !important; 
    font-size: 7px !important; 
  }

  .thumb-container { 
    gap: 10px !important; 
    justify-content: center !important; 
  }

  .thumb-img { 
    width: 50px !important; 
    height: 50px !important; 
  }

  .experience-title { 
    font-size: 32px !important; 
    padding-bottom: 10px !important; 
    text-align: center !important;
  }

  .summary-img-container { 
    flex: 0 0 auto !important; 
    width: 100% !important; 
  }

  .summary-img { 
    width: 100% !important; 
    height: auto !important; 
    max-width: 300px !important; 
    margin: 0 auto !important; 
  }

  .summary-text { 
    font-size: 16px !important; 
    line-height: 1.6 !important; 
    text-align: center !important;
  }
}
        `}
      </style>

      {/* Hero Image */}
      <div style={{ width: "100%" }}>
        <img
          src={OEimage}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            minHeight: "400px",
            objectFit: "cover",
          }}
          alt="Ocean Explorer"
        />
      </div>

      {/* MASTER OVERLAY - Perfectly Locked */}
      <div
        className="hero-overlay-unit"
        style={{
          position: "absolute",
          top: "10%", // Adjust this to move the whole block up or down
          left: "10%",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "40px", // Exact spacing between the rows
          fontFamily: "sans-serif",
        }}
      >
        {/* Buttons Row (Top) */}
        <div
          className="btn-row"
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <button
            className="action-btn"
            style={{ ...btnStyle("#d28d8d"), marginTop: 0 }} // Force remove the old margin
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d28d76")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#d28d8d")}
          >
            JOIN NOW
          </button>
          <button
            className="action-btn"
            style={{ ...btnStyle("#f7d77e"), marginTop: 0 }} // Force remove the old margin
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e5c566")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f7d77e")}
          >
            MORE INFO
          </button>
        </div>

        {/* Thumbs container (Bottom) */}
        <div
          className="thumb-container"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-end", // Aligns different height thumbs to the bottom
          }}
        >
          <Link to="/OCEANEXPLORER">
            <img
              src={Imagea}
              className="thumb-img"
              style={thumbStyle1}
              alt="OE"
            />
          </Link>
          <Link to="/SEAGUARDIAN">
            <img
              src={Imagec}
              className="thumb-img"
              style={thumbStyle1}
              alt="SG"
            />
          </Link>
          <Link to="/SERENITYDREAM">
            <img
              src={Imageb}
              className="thumb-img"
              style={thumbStyle}
              alt="SD"
            />
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <div
        style={{
          minHeight: "1100px",
          backgroundColor: "#f7d77e",
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            className="experience-title"
            style={{
              color: "Black",
              fontSize: "85px",
              fontFamily: "'Irish Grover', cursive",
              margin: "0",
              display: "inline-block",
              borderBottom: "2px solid rgb(0, 0, 0)",
              paddingBottom: "20px",
            }}
          >
            Experience the Serenity Dream Difference
          </h2>
        </div>

        <div
          className="content-block"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "60px",
            maxWidth: "1700px",
          }}
        >
          <div className="summary-img-container" style={{ flex: "0 0 441px" }}>
            <img
              src={SDsum}
              className="summary-img"
              alt="Diver underwater"
              style={{
                width: "441px",
                height: "541px",
                objectFit: "cover",
                borderRadius: "40px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                display: "block",
              }}
            />
          </div>

          <div style={{ color: "black" }}>
            <p
              className="summary-text"
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
