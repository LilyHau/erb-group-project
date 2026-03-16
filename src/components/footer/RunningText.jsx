import Image from "../../assets/homePage/swimming_fish.gif";

const RunningText = ({
  text = "Connect People With Nature",
  text1 = "讓你我融入大自然",
  imgUrl = Image,
  speed = 15,
}) => {
  const moveKeyframes = `
    @keyframes moveLeftFull {
      0% { transform: translateX(100vw); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <div
      style={{
        background: "#f7f7f7",
        padding: "100px 0",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <style>{moveKeyframes}</style>

      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center",
          animation: `moveLeftFull ${speed}s linear infinite`,
          whiteSpace: "nowrap",
          color: "#118da8",
          padding: "40px 0",
          gap: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "150px",
              fontWeight: "bold",
              fontFamily: "Joti One, sans-serif",
              lineHeight: "1.1",
            }}
          >
            {text}
          </span>
          <span
            style={{
              fontSize: "80px",
              fontWeight: "normal",
              marginTop: "10px",
            }}
          >
            {text1}
          </span>
        </div>
        <img
          src={imgUrl}
          alt="icon"
          style={{
            height: "220px",
            width: "auto",
            borderRadius: "20px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <RunningText
      text="Connect People With Nature"
      text1="讓你我融入大自然"
      imgUrl={Image}
      speed={12}
    />
  );
}
