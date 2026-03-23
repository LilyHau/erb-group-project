import { Link } from "react-router-dom";
import heroVideo from "../../assets/homePage/CRUISE-PROMO-video.mp4";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "550px",
        maxWidth: "2500px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          paddingRight: "1%",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointerEvents: "none",
          paddingTop: "1%",}}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            margin: 0,
            maxWidth: "4000px",
            borderRadius: "30px",
            lineHeight: "1.2",
            padding: 11,
            fontWeight: "bold",
            textAlign: "top",
            color: "white",
            backgroundColor: "#ffd664ba",}}
        >
          Hong Kong departure
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "2%",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            margin: 0,
            maxWidth: "900px",
            lineHeight: "1.1",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          LET’S <br /> EXPLORE <br /> THE <br /> SEA!
        </h1>
      </div>
      <div>
        <Link to="/about"><button
          style={{
            position: "absolute",
            bottom: "39px",
            right: "90px",
            padding: "15px 25px",
            backgroundColor: "#4271b7bf",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "11px",
            cursor: "pointer",
            transition: "0.3s ease",
            pointerEvents: "auto",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#4271b7b5";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#567db6";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Start Planning
        </button></Link>
      </div>
    </div>
  );
};

export default Hero;
