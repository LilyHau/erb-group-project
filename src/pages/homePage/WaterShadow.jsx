import Image from "../../assets/homePage/wave.png";

const WaterShadow = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100px",
        maxWidth: "2280px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage: `url(${Image})`,
        backgroundPosition: "center",
        imageSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "9px",
        // Moves image to the bottom
        backgroundSize: "cover",
        fontFamily: "Joti One, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          letterSpacing: "1rem",
          color: "rgba(255, 255, 255, 0.76)",
        }}
      >
        THE EXPERIENCE
      </h1>
    </div>
  );
};

export default WaterShadow;
