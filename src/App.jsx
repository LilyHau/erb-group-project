import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import OurCruisesPage from "./pages/ourCruisesPage/OurCruisesPage";
import OnboardThrillsPage from "./pages/onboardThrillsPage/OnboardThrillsPage";
import ExclusiveMerchPage from "./pages/exclusiveMerchPage/ExclusiveMerchPage";
import OCEANEXPLORER from "./pages/ourCruisesPage/Cruises/OCEANEXPLORER";
import SEAGUARDIAN from "./pages/ourCruisesPage/Cruises/SEAGUARDIAN";
import SERENITYDREAM from "./pages/ourCruisesPage/Cruises/SERENITYDREAM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cruises" element={<OurCruisesPage />} />
          <Route path="onboard" element={<OnboardThrillsPage />} />
          <Route path="exclusive" element={<ExclusiveMerchPage />} />
          <Route path="OCEANEXPLORER" element={<OCEANEXPLORER />} />
          <Route path="SEAGUARDIAN" element={<SEAGUARDIAN />} />
          <Route path="SERENITYDREAM" element={<SERENITYDREAM />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
