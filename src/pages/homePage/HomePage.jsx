import FixedButton from "../../components/buttons/FixedButton";
import Hero from "./Hero";
import CruiseSection from "./CruiseSection";
import WaterShadow from "./WaterShadow";
import ExperiencesSection from "./ExperiencesSection";
import Subscribe from "./Subscribe";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CruiseSection />
      <WaterShadow />
      <ExperiencesSection />
      <FixedButton />
      <Subscribe />
    </>
  );
};

export default HomePage;
