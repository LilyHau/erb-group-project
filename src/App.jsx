import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import OurCruisesPage from "./pages/ourCruisesPage/OurCruisesPage";
import OnboardThrillsPage from "./pages/onboardThrillsPage/OnboardThrillsPage";
import OCEANEXPLORER from "./pages/ourCruisesPage/Cruises/OCEANEXPLORER";
import SEAGUARDIAN from "./pages/ourCruisesPage/Cruises/SEAGUARDIAN";
import SERENITYDREAM from "./pages/ourCruisesPage/Cruises/SERENITYDREAM";
import FAQSection from "./pages/homePage/FAQ/FAQSection";
import Shop from "./pages/shopPage/Shop";
import Cart from "./pages/cartPage/Cart";
import { useState, useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
import CruiseBookingPageOE from "./pages/homePage/Booking/CruiseBookingPageOE";
import CruiseBookingPageSG from "./pages/homePage/Booking/CruiseBookingPageSG";
import CruiseBookingPageSD from "./pages/homePage/Booking/CruiseBookingPageSD";
import OEInfo from "./pages/ourCruisesPage/CruisesInfo/OEInfo";
import SGInfo from "./pages/ourCruisesPage/CruisesInfo/SGInfo";
import SDInfo from "./pages/ourCruisesPage/CruisesInfo/SDInfo";
import Help from "./pages/Helpcenter/Help.jsx";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Contact from "./pages/Contactus/Contact.jsx";
<<<<<<< Updated upstream
import AccommodationDetail from "./pages/AccommodationDetail/AccommodationDetail.jsx";
=======
import Dining from "./pages/Dining/Dining.jsx";
>>>>>>> Stashed changes

function App() {
  const cartItemsFromLocalStorage =
    JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const handleAddToCart = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : cartItem;
        }),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleIncrease = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : singleItem,
        ),
      );
    }
  };
  const handleDecrease = (product) => {
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem.quantity === 1) {
      setCartItems(
        cartItems.filter((oneItem) => oneItem.id !== selectedItem.id),
      );
    } else {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
            : singleItem,
        ),
      );
    }
  };
  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((oneItem) => oneItem.id !== product.id));
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout cartItems={cartItems} />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cruises" element={<OurCruisesPage />} />
          <Route path="onboard" element={<OnboardThrillsPage />} />
          <Route path="oeInfo" element={<OEInfo />} />
          <Route path="sgInfo" element={<SGInfo />} />
          <Route path="sdInfo" element={<SDInfo />} />
          <Route path="oeInfo" element={<OEInfo />} />
          <Route path="sgInfo" element={<SGInfo />} />
          <Route path="sdInfo" element={<SDInfo />} />
          <Route path="OCEANEXPLORER" element={<OCEANEXPLORER />} />
          <Route path="SEAGUARDIAN" element={<SEAGUARDIAN />} />
          <Route path="SERENITYDREAM" element={<SERENITYDREAM />} />
          <Route path="CruiseBookingPageOE" element={<CruiseBookingPageOE />} />
          <Route path="CruiseBookingPageSG" element={<CruiseBookingPageSG />} />
          <Route path="CruiseBookingPageSD" element={<CruiseBookingPageSD />} />
          <Route path="FAQSection" element={<FAQSection />} />
          <Route
            path="shop"
            element={<Shop handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="cart"
            element={
              <Cart
                cartItems={cartItems}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="Help" element={<Help />} />
          <Route path="Contact" element={<Contact />} />
<<<<<<< Updated upstream
          <Route path="AccommodationDetail" element={<AccommodationDetail />} />
=======
          <Route path="Dining" element={<Dining />} />
>>>>>>> Stashed changes
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
