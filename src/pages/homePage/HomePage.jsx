import Hero from "./Hero";
import CruiseSection from "./CruiseSection";
import WaterShadow from "./WaterShadow";
import ExperiencesSection from "./ExperiencesSection";
import MerchSection from "./MerchSection";
import Subscribe from "./Subscribe";
import React, { useState, useEffect } from "react";
import PrivacyAlert from "../../components/privacyAlert/PrivacyAlert";

const HomePage = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenHomeAlert");

    if (!hasSeen) {
      setIsAlertVisible(true);
      sessionStorage.setItem("hasSeenHomeAlert", "true");
    }
  }, []);

  return (
    <>
      {isAlertVisible && (
        <PrivacyAlert onClose={() => setIsAlertVisible(false)} />
      )}
      <Hero />
      <CruiseSection />
      <WaterShadow />
      <ExperiencesSection />
      <MerchSection />
      <Subscribe />
    </>
  );
};

export default HomePage;
