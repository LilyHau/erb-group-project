import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import SEAGUARDIAN from "../../assets/homePage/SEA-GUARDIAN.jpg";
import OCEANEXPLORER from "../../assets/homePage/OCEAN-EXPLORER.jpg";
import SERENITYDREAM from "../../assets/homePage/SERENITY-DREAM.jpg";

const CruiseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cruises = [
    {
      img: OCEANEXPLORER, // Swapped to match title logic
      title: "OCEAN EXPLORER",
      cn: "海洋探索號",
      desc: "A hardcore diving adventure ship offering expert-led dives, sea labs, and scientific exploration routes.",
      Link: "/OCEANEXPLORER",
    },
    {
      img: SEAGUARDIAN, // Swapped to match title logic
      title: "SEA GUARDIAN",
      cn: "海洋保育號",
      desc: "A volunteer-focused cruise ship where passengers participate in coral planting, turtle rescue, and ocean cleanup.",
      Link: "/SEAGUARDIAN",
    },
    {
      img: SERENITYDREAM,
      title: "SERENITY DREAM",
      cn: "海洋悠享號",
      desc: "A relaxing family-friendly cruise featuring underwater dining, star-gazing decks, and peaceful beach getaways.",
      Link: "/SERENITYDREAM",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "2400px",
        margin: "0 auto",
        backgroundColor: "#d4f0fa",
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "850px",
        boxSizing: "border-box",
      }}
    >
      {/* HEADER BOX */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
          height: "100px",
          backgroundImage: "linear-gradient(90deg, #4272B6 25%, #8bdaf9 100%)",
          borderRadius: "15px",
          marginBottom: "60px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Joti One', sans-serif",
            color: "white",
            fontSize: "clamp(24px, 5vw, 45px)",
            textAlign: "center",
            margin: 0,
          }}
        >
          LET'S MEET OUR CRUISES
        </h2>
      </div>

      {/* CARDS CONTAINER */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        {cruises.map((item, index) => (
          <Link
            key={index}
            to={item.Link}
            style={{ textDecoration: "none", color: "inherit" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                width: "350px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                cursor: "pointer",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                transform: hoveredIndex === index ? "scale(1.06)" : "scale(1)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 25px 50px rgba(0,0,0,0.2)"
                    : "0 10px 30px rgba(0,0,0,0.1)",
                zIndex: hoveredIndex === index ? 10 : 1,
              }}
            >
              {/* Image Container with subtle zoom effect */}
              <div style={{ overflow: "hidden", height: "240px" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>

              {/* Text Content */}
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    margin: "0 0 5px 0",
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#000",
                  }}
                >
                  {item.title}
                </h3>
                <h4
                  style={{
                    margin: "0 0 15px 0",
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  {item.cn}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "25px",
                    minHeight: "80px",
                  }}
                >
                  {item.desc}
                </p>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    color: hoveredIndex === index ? "#4272B6" : "#000",
                    transition: "color 0.2s",
                  }}
                >
                  View Now →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CruiseSection;
