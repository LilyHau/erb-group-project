import Image from "../../assets/Cruises/cruisesum.png";
import Image1 from "../../assets/Cruises/OE.PNG";
import Image2 from "../../assets/Cruises/SD.PNG";
import Image3 from "../../assets/Cruises/SG.PNG";
import Line from "../../assets/Cruises/Line.png";
import Accommodations from "../ourCruisesPage/Accommodations";

const OurCruisesPage = () => {
  const thumbStyle = {
    width: "350px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <div>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* 1. Main Hero Image */}
        <img
          src={Image}
          style={{ width: "100%", display: "block" }}
          alt="Cruise Hero"
        />

        {/* 2. Join Now Button - Exactly Centred */}
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "47%",
            transform: "translate(-50%, -50%)",
            padding: "15px 50px",
            fontSize: "2.5rem",
            backgroundColor: "#02a6f4",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            zIndex: 10,
          }}
        >
          Join Now
        </button>

        {/* 3. Bottom Images - Centred horizontally at the bottom of the hero */}
        <div
          style={{
            position: "absolute",
            bottom: "40px", // Distance from bottom edge of hero image
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "30px", // Space between the 3 items
            zIndex: 5,
          }}
        >
          {/* Item 1 */}
          <div style={{ textAlign: "center", color: "white" }}>
            <img src={Image1} style={thumbStyle} alt="Ocean Explorer" />
            <p
              style={{
                fontSize: "3rem",
                marginTop: "10px",
                color: "black",
              }}
            >
              OCEAN Explorer
            </p>
          </div>

          {/* Item 2 */}
          <div style={{ textAlign: "center", color: "white" }}>
            <img src={Image3} style={thumbStyle} alt="Sea Guardian" />
            <p
              style={{
                fontSize: "3rem",
                marginTop: "10px",
                color: "black",
              }}
            >
              SEA Guardian
            </p>
          </div>

          {/* Item 3 */}
          <div style={{ textAlign: "center", color: "white" }}>
            <img src={Image2} style={thumbStyle} alt="Serenity Dream" />
            <p
              style={{
                fontSize: "3rem",
                marginTop: "10px",
                color: "black",
              }}
            >
              Serenity Dream
            </p>
          </div>
        </div>
      </div>
      <div>
        <img style={{ width: "100%" }} src={Line} alt="" />
      </div>
      <Accommodations />
    </div>
  );
};

export default OurCruisesPage;
