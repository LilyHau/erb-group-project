import heroVideo from "../../assets/homePage/CRUISE-PROMO-video.mp4";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "550px",
        maxWidth: "2500px", // Optional: caps the width so it doesn't get TOO big
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
      {/* Text Overlay - Adjusted for Right-Top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start", // Vertically centers
          justifyContent: "flex-end", // Pushes to the RIGHT
          paddingRight: "1%", // Space from the right edge
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointerEvents: "none",
          paddingTop: "1%", // Space from the top edge
        }}
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
            backgroundColor: "#ffd664ba",
            // Aligns text lines to the right
          }}
        >
          Hong Kong departure
        </h1>
      </div>
      {/* Text Overlay - Adjusted for Right-Center */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center", // Vertically centers
          justifyContent: "flex-end", // Pushes to the RIGHT
          paddingRight: "2%", // Space from the right edge
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
            textAlign: "center", // Aligns text lines to the right
          }}
        >
          LET’S <br /> EXPLORE <br /> THE <br /> SEA!
        </h1>
      </div>
      <div>
        <button
          style={{
            position: "absolute",
            bottom: "39px", // Distance from bottom
            right: "90px", // Distance from right
            padding: "15px 25px", // Button size

            // 1. Initial Background Color
            backgroundColor: "#4271b7bf",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "11px",
            cursor: "pointer",
            transition: "0.3s ease",

            // 2. CRITICAL: must be auto for hover to work
            pointerEvents: "auto",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#4271b7b5"; // Hover Color
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#567db6"; // Original Color
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default Hero;
