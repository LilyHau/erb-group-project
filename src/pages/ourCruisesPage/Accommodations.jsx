import React, { useState } from "react";
import { Link } from "react-router-dom";

import CRUISEregular from "../../assets/Cruises/CRUISEregularsuitewithnoseaview.jpg";
import CRUISEluxrysuite2 from "../../assets/Cruises/CRUISEluxrysuite2.jpg";
import CRUISEluxrysuiteforfamily from "../../assets/Cruises/CRUISEluxrysuiteforfamily4people.jpg";

const Accommodations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cruises = [
    {
      img: CRUISEregular, // Use the variable, not a string "SEAGUARDIAN"
      title: "2 adults",
      cn: "De Luxe Room",
      desc: "from $756* a night",
    },
    {
      img: CRUISEluxrysuite2,
      title: "2 adults | 1 children below 7",
      cn: "De Luxe Sea View",
      desc: "from $1016* a night",
    },
    {
      img: CRUISEluxrysuiteforfamily,
      title: "4 adults | 2 children below 7",
      cn: "The Wellhall Family Suite",
      desc: "from $1650* a night",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
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
          // backgroundImage: "linear-gradient(90deg, #4272B6 25%, #8bdaf9 100%)",
          borderRadius: "15px",
          marginBottom: "60px",
          // boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Joti One', sans-serif",
            color: "Black",
            fontSize: "clamp(24px, 5vw, 45px)",
            textAlign: "center",
            margin: 0,
          }}
        >
          Accommodations
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
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              width: "350px",

              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
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
            <div style={{ overflow: "hidden", height: "240px" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  margin: "0 0 5px 0",
                  fontSize: "20px",
                  fontWeight: "800",
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
              <Link to="/AccommodationDetail"><a style={{cursor: "pointer",fontWeight:"bold",color: "var(--text-gray)"}}>View More</a></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodations;
