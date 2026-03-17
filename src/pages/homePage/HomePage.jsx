import FixedButton from "./buttons/FixedButton";
import Hero from "./Hero";
import CruiseSection from "./CruiseSection";
import WaterShadow from "./WaterShadow";
import ExperiencesSection from "./ExperiencesSection";
import MerchSection from "./MerchSection";
import Subscribe from "./Subscribe";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CruiseSection />
      <WaterShadow />
      <ExperiencesSection />
      <MerchSection />
      <FixedButton />
      <Subscribe />
    </>
  );
};

export default HomePage;
