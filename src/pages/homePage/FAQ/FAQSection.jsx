import React, { useState } from "react";
import Faqbg from "../../../assets/FAQ/FAQBG.png";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(0);

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

  const feaData = [
    {
      icon: "ⓘ",
      question: "Are the onboard thrill rides and water parks free of charge?",
      answer:
        "Most core attractions are free and included in the cruise fare, such as most water slides, swimming pools, and regular performances. However, some VIP experiences (e.g., private pool rentals, VIP fast-track access), specialty dining (e.g., a la carte orders at the underwater restaurant), and select paid courses require additional fees, with details marked as Free/Paid on the Rides & Water Parks page.",
    },
    {
      icon: "♡",
      question:
        "How can I redeem the co-branded benefits with Ocean Park (e.g., ticket discounts, fast-track access)?",
      answer:
        "Booking our cruise packages automatically entitles you to a 10% discount on Ocean Park tickets and fast-track access to the Panda Pavilion. Simply note your needs during booking or contact customer service, and we will provide you with an exclusive redemption code and admission guidelines.",
    },
    {
      icon: "🌐",
      question:
        "Are there any physical requirements or prerequisites for participating in special activities (e.g., diving, coral planting)?",
      answer:
        "Clear entry criteria apply.◦ Diving activities: A health certificate is required, and height/weight must meet equipment restrictions(see Travel Tips for details). Beginner courses are available with one-on-one instructor guidance, suitable for zero-experience participants. ◦ Conservation activities: Suitable for all age groups. Children can join simplified planting sessions, while adults can apply for official volunteer certificates. Specific restrictions and reservation methods for all activities are listed on the Special Activities & Itineraries page of each ship.",
    },
    {
      icon: "👤",
      question: "Are activity times fixed, and what if I miss an activity?",
      answer:
        "Core performances and activities have fixed schedules (see the daily itinerary), but some outdoor activities may be adjusted due to weather conditions. We recommend checking the daily schedule on the Service & Support page or the onboard APP before departure. If an activity is missed due to force majeure, rescheduling within the same voyage may be arranged upon consultation with onboard staff.",
    },
    {
      icon: "📋",
      question:
        "Besides the activities listed on the official website, are there other paid entertainment options onboard?",
      answer:
        "In addition to core free attractions, the ship offers a variety of paid upgrade experiences, such as ocean-view SPA, exclusive photography packages, specialty dinner reservations, and private cabin services. You can select these during the add-on service step on the booking page or book via the in-cabin service hotline after boarding, with all prices clearly stated.",
    },
  ];

  const resData = [
    {
      icon: "ⓘ",
      question:
        "What payment methods are supported, and is installment payment available?",
      answer: "International Visa/Mastercard payments are accepted.",
    },
    {
      icon: "♡",
      question:
        "How much deposit is required for booking, and when is the balance due?",
      answer:
        "30% deposit of the total fare is required for regular routes, and the balance must be paid 15 days prior to departure. Special deposit requirements may apply to early-bird special routes, subject to the booking terms of the specific voyage.",
    },
    {
      icon: "🌐",
      question:
        "What is the cancellation policy if I cannot travel due to unforeseen circumstances?",
      answer:
        "The cancellation policy is strictly implemented based on the following timeframes:◦ 90+ days before departure: Full deposit refunded after deducting administrative fees.◦ 30–89 days before departure: 50% of the deposit refunded.◦ Within 30 days before departure: Deposit non-refundable and non-transferable.◦ Note: If travel insurance is purchased, claims can be filed in accordance with the insurance terms.",
    },
    {
      icon: "👤",
      question:
        "Can I reschedule or upgrade my cabin after paying the deposit?",
      answer:
        "Yes. Rescheduling must be requested 7 days before departure, and you may need to pay the price difference between the original and new cabins plus any rescheduling fees (if applicable). Cabin upgrades must be requested 30 days before departure, with the price difference to be paid. Specific fees for rescheduling/upgrades will be calculated and displayed in real time during the modify information step.",
    },
    {
      icon: "📋",
      question:
        "Will I receive an electronic contract or invoice after successful booking?",
      answer:
        "Upon successful order submission and payment, the system will automatically generate an electronic contract and send it to your registered email address. If an invoice is required, please submit an application on the Service & Support page, and we will issue an electronic VAT invoice for you.",
    },
  ];

  const faqContent = {
    General: faqData,
    Features: feaData,
    Resources: resData,
  };

  const tabs = Object.keys(faqContent);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#e0f4ff",
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* HEADER WITH CORRECTED BACKGROUND IMAGE */}
      <div
        style={{
          width: "100%",
          maxWidth: "1900px",
          height: "160px",
          backgroundImage: `url(${Faqbg})`, // FIXED
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
          marginBottom: "40px",
          position: "relative",
          textAlign: "center",
          color: "black",
          fontFamily: "Joti One",
        }}
      >
        <p style={{ margin: 0, fontSize: "28px", letterSpacing: "3px" }}>
          FREQUENTLY ASKED
        </p>
        <h1 style={{ margin: 0, fontSize: "64px", fontFamily: "serif" }}>
          Questions
        </h1>
      </div>

      {/* TABS */}
      <div
        style={{
          backgroundColor: "white",
          padding: "8px",
          borderRadius: "35px",
          display: "flex",
          gap: "10px",
          marginBottom: "40px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            style={{
              padding: "12px 30px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: activeTab === tab ? "#4272B6" : "transparent",
              color: activeTab === tab ? "white" : "#888",
              transition: "0.3s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ACCORDION */}
      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          backgroundColor: "white",
          borderRadius: "40px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {faqContent[activeTab].map((item, index) => (
          <div
            key={`${activeTab}-${index}`}
            style={{
              borderBottom:
                index !== faqContent[activeTab].length - 1
                  ? "1px solid #eee"
                  : "none",
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
                }}
              >
                {item.question}
              </h3>
              <span style={{ fontSize: "20px", color: "#ccc" }}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              style={{
                maxHeight: openIndex === index ? "300px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p
                style={{
                  margin: "0 0 25px 45px",
                  color: "#666",
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
    </div>
  );
};

export default FAQSection;
