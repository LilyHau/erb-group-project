import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<div>Contact Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
