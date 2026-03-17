import React, { useState } from "react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(0);

  const tabs = ["General", "Features", "Resources"];

  const faqData = [
    {
      icon: "ⓘ",
      question:
        "What are the core features of these cruises, and how do they differ from regular cruises?",
      answer:
        "We focus on the in-depth integration of 'ocean + theme park' experiences. Unlike regular cruises, we not only offer luxury accommodations and dining but also exclusively feature onboard thrill rides, large-scale water parks, and co-branded conservation/IP activities with Ocean Park Hong Kong. You can enjoy park-level exciting attractions at sea while accessing exclusive discounts.",
    },
    {
      icon: "♡",
      question: "What are the departure ports and travel schedules?",
      answer:
        "Our primary departure ports include Hong Kong, Singapore, and Tokyo. Schedules vary by season, typically ranging from 3-day weekend escapes to 7-day regional tours.",
    },
    {
      icon: "🌐",
      question:
        "What language support and customer service are available onboard?",
      answer:
        "We provide multilingual support including English, Mandarin, and Cantonese. Our guest services desk is available 24/7 to assist with bookings and inquiries.",
    },
    {
      icon: "👤",
      question:
        "Are these cruises suitable for children and the elderly, and are there dedicated areas for them?",
      answer:
        "Absolutely. We have dedicated 'Kids Zones' with supervised play and 'Serenity Lounges' for seniors looking for a quieter experience.",
    },
    {
      icon: "📋",
      question: "How can I get the latest promotions and voyage updates?",
      answer:
        "You can subscribe to our newsletter via the footer of this website or follow our official social media channels for real-time updates.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#e0f4ff",
        padding: "60px 20px",
        position: "relative",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      {/* Background Bubbles (Decorative) */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "3%",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.4)",
        }}
      />

      {/* HEADER SECTION */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "160px",
          background: "linear-gradient(90deg, #4272B6 0%, #8bdaf9 100%)",
          borderRadius: "80px",
          display: "flex",
          alignItems: "center",
          padding: "0 40px",
          marginBottom: "40px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        <div style={{ flex: 1, color: "white" }}>
          <p style={{ margin: 0, fontSize: "18px", letterSpacing: "2px" }}>
            FREQUENTLY ASKED
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: "60px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Questions
          </h1>
        </div>
        {/* Placeholder for Cruise Ship Image */}
        <div
          style={{
            width: "200px",
            height: "120px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "20px",
          }}
        >
          <img
            src="https://placeholder.com"
            alt="Cruise"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>

      {/* TABS */}
      <div
        style={{
          backgroundColor: "white",
          padding: "8px",
          borderRadius: "30px",
          display: "flex",
          gap: "10px",
          marginBottom: "40px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 25px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
              backgroundColor: activeTab === tab ? "#5CB2D6" : "transparent",
              color: activeTab === tab ? "white" : "#888",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "white",
          borderRadius: "40px",
          padding: "40px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.05)",
        }}
      >
        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom:
                index !== faqData.length - 1 ? "1px solid #eee" : "none",
            }}
          >
            <div
              onClick={() => toggleAccordion(index)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "25px 0",
                cursor: "pointer",
                gap: "20px",
              }}
            >
              <span style={{ fontSize: "20px", color: "#4272B6" }}>
                {item.icon}
              </span>
              <h3
                style={{
                  flex: 1,
                  margin: 0,
                  fontSize: "18px",
                  color: openIndex === index ? "#4272B6" : "#333",
                  fontWeight: "600",
                  lineHeight: "1.4",
                }}
              >
                {item.question}
              </h3>
              <span style={{ fontSize: "24px", color: "#ccc" }}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer Content */}
            <div
              style={{
                maxHeight: openIndex === index ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p
                style={{
                  margin: "0 0 25px 45px",
                  color: "#777",
                  lineHeight: "1.6",
                  fontSize: "15px",
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Illustrations (Placeholders) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "5%",
          fontSize: "80px",
        }}
      >
        🐬
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "5%",
          fontSize: "80px",
        }}
      >
        🐠
      </div>
    </div>
  );
};

export default FAQSection;
