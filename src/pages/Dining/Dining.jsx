import React, { useState } from "react";
import styles from "./DiningPage.module.css";

// Import header images for each tab (adjust paths accordingly)
import MainDiningHeader from "../../../src/assets/Cruises/miana.png";
import CafeHeader from "../../../src/assets/Cruises/cafe.png";
import LoungeHeader from "../../../src/assets/Cruises/club.png";

// Image assets (update paths as per your project structure)
import EXimga from "../../../src/assets/OCEANEXPLORER/Expedition1.png";
import SGimga from "../../../src/assets/SEAGUARDIAN/SGR3.jpg";
import SDimga from "../../../src/assets/SERENITYDREAM/generatedimage.png";

import EXimgb from "../../../src/assets/OCEANEXPLORER/Expedition2.png";
import SGimgb from "../../../src/assets/SEAGUARDIAN/SGR2.jpg";
import SDimgb from "../../../src/assets/SERENITYDREAM/generatedimagea.png";

import EXimgc from "../../../src/assets/OCEANEXPLORER/Expedition3.png";
import SGimgc from "../../../src/assets/SEAGUARDIAN/SGR1.jpg";
import SDimgc from "../../../src/assets/SERENITYDREAM/generatedimagec.png";

// Tag icons
import OETAG from "../../../src/assets/OCEANEXPLORER/OETAG.png";
import SGTAG from "../../../src/assets/SEAGUARDIAN/SGTAG.png";
import SDTAG from "../../../src/assets/SERENITYDREAM/SDTAG.png";

// Main component
const DiningPage = () => {
  const [activeTab, setActiveTab] = useState({ diningTabs });

  // Map tab names to header images
  const headerImages = {
    "Main Dining": MainDiningHeader,
    Café: CafeHeader,
    "Club/Lounge": LoungeHeader,
  };

  const currentHeaderImage = headerImages[activeTab];

  // Define your tabs data
  const diningTabs = {
    "Main Dining": {
      sections: [
        {
          title: "🍽️Abyss Grill",
          description:
            "Hearty high-protein meals—grilled local seafood, quinoa bowls, and dive recovery plates.",
          offerings: [
            "Grilled lap cheong & quinoa bowls",
            "Post-dive recovery plates",
            "Bird's nest smoothies",
          ],
          dietarytitle: "Dietary Options:",
          dietaryOptions:
            "Gluten-free wraps, vegan kelp noodles, low-sodium dishes",
          imageSrc: EXimga,
          themeColor: "#E3F2FD",
          buttoncolor: "#13406D",
          shipIcon: OETAG,
        },
        {
          title: "🍽️Reef & Root",
          description:
            "100% plant-forward and sustainable seafood dishes using on-board herb garden greens.",
          offerings: [
            "Vegan XO sauce coral-shaped pasta",
            "100% sustainable seafood",
            "Compostable palm leaf plates",
          ],
          dietarytitle: "Local Partnerships:",
          dietaryOptions: "Organic, Non-GMO, Zero-waste focus",
          imageSrc: SGimga,
          themeColor: "#E8F5E9",
          buttoncolor: "#2E7D32",
          shipIcon: SDTAG,
        },
        {
          title: "🍽️ Tide & Table",
          description:
            "The signature underwater restaurant with marine character dinner shows, serving kid-approved classics and gourmet seafood",
          offerings: [
            "Family-style feasts: XO sauce mac ‘n’ cheese (adult twist), grilled lobster, coconut-curry seafood",
            "Weekly Underwater Dinner Shows with Captain Dolphin & Mermaid Lamma characters",
            "Kid-approved fish fingers & “Mermaid’s Treasure” seafood paella",
          ],
          dietarytitle: "Dietary Options:",
          dietaryOptions:
            "Vegan kids’ nuggets, gluten-free pasta, low-sugar desserts",
          imageSrc: SDimga,
          themeColor: "#fff6ea",
          buttoncolor: "#ffd413",
          shipIcon: SGTAG,
        },
      ],
    },
    Café: {
      sections: [
        {
          title: "☕Plankton Pit Stop",
          description:
            "Grab-and-go energy boosts like protein smoothies and avocado toast",
          offerings: [
            "Century egg avocado toast, local lychee protein smoothies, salted plum nut packs",
            "Yuenyeung protein lattes (Hong Kong’s iconic coffee-tea blend)",
            "Spill-proof cups with carabiners (dive gear-friendly—clip to belts!)",
          ],
          dietarytitle: "Dietary Options:",
          dietaryOptions:
            "Free dive log stickers for guests to collect & display",
          imageSrc: EXimgb,
          themeColor: "#E3F2FD",
          buttoncolor: "#13406D",
          shipIcon: OETAG,
        },
        {
          title: "☕Guardian Grind",
          description:
            "Fair-trade coffee, vegan pastries, and “Volunteer Fuel Packs” for beach cleanups",
          offerings: [
            "Vegan pineapple buns, calamansi fruit-infused water, fair-trade social enterprise coffee",
            "Free Volunteer Fuel Packs (granola, local fruit, bamboo utensils) for beach cleanups",
            "Refill stations (filtered seawater & coffee) with discounts for own containers",
          ],
          dietarytitle: "Zero-Waste Focus:",
          dietaryOptions: "No single-use bottles or cups on-site",
          imageSrc: SGimgb,
          themeColor: "#E8F5E9",
          buttoncolor: "#2E7D32",
          shipIcon: SDTAG,
        },
        {
          title: "☕Sunset Sips",
          description:
            "A bright café with homemade egg tarts, pineapple buns, and a kids’ sundae station",
          offerings: [
            "Homemade Hong Kong egg tarts, butter pineapple buns, lychee fruit skewers",
            "Afternoon “Build Your Own Sundae” station (local mango/red bean toppings)",
            "Seashell-shaped cup Hong Kong milk tea lattes & vegan coconut milkshakes",
          ],
          dietarytitle: "Kid-Focused:",
          dietaryOptions: "Sand table play area adjacent to outdoor seating",
          imageSrc: SDimgb,
          themeColor: "#fff6ea",
          buttoncolor: "#ffd413",
          shipIcon: SGTAG,
        },
      ],
    },
    "Club/Lounge": {
      sections: [
        {
          title: "🍽️Depth Debrief ",
          description:
            "A cozy lounge for post-dive craft beers and charcuterie, where you swap stories with fellow divers and experts",
          offerings: [
            "Local craft beers (Young Master Brewery), lap cheong charcuterie boards, late-night dim sum (har gow, siu mai)",
            "Weekly Underwater Photo Nights & Dive Master Q&As",
            "Bioluminescence viewing sessions (paired with craft beer tastings)",
          ],
          dietarytitle: "Event Highlight:",
          dietaryOptions:
            "Exclusive Palau shipwreck dive spot previews on map wall",
          imageSrc: EXimgc,
          themeColor: "#E3F2FD",
          buttoncolor: "#13406D",
          shipIcon: OETAG,
        },
        {
          title: "🍵Coral Commons",
          description:
            "A communal lounge for herbal teas and local vegan desserts, hosting conservation debriefs",
          offerings: [
            "Local lingzhi mushroom herbal tea, vegan mango pudding, sustainable palm sugar coconut jelly",
            "Conservation workshops (home composting, marine species ID) & Impact Story Nights",
            "Monthly coral restoration updates with live cam feeds of planted fragments",
          ],
          dietarytitle: "Non-Alcoholic:",
          dietaryOptions: "Focused on post-volunteer relaxation & education",
          imageSrc: SGimgc,
          themeColor: "#E8F5E9",
          buttoncolor: "#2E7D32",
          shipIcon: OETAG,
        },
        {
          title: "🍹Stellar Deck",
          description:
            "An adult lounge for tropical cocktails and charcuterie, connected to the stargazing deck",
          offerings: [
            "Family-style feasts: XO sauce mac ‘n’ cheese (adult twist), grilled lobster, coconut-curry seafood",
            "Weekly Underwater Dinner Shows with Captain Dolphin & Mermaid Lamma characters",
            "Kid-approved fish fingers & “Mermade’s Treasure” seafood paella",
          ],
          dietarytitle: "Adult-Only:",
          dietaryOptions:
            "Private cabanas available for rent with bottle service",
          imageSrc: SDimgc,
          themeColor: "#fff6ea",
          buttoncolor: "#ffd413",
          shipIcon: OETAG,
        },
      ],
    },
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Dynamic header image based on active tab */}
      <div className={styles.headerImageContainer}>
        <img
          src={headerImages[activeTab]}
          alt={`${activeTab} header`}
          className={styles.headerImage}
        />
      </div>

      {/* Main title */}
      <header className={styles.header}>
        <h1>Dining That Sails With Your Vibe</h1>
        <p>
          Ocean Park HK Cruise Line serves up theme-aligned, Hong Kong-inspired
          dining experiences tailored to every voyage—whether you’re refueling
          after deep-sea dives, savoring sustainable zero-waste meals, or
          enjoying laid-back family feasts at sea. Each venue blends functional
          flavors, immersive decor, and thoughtful touches to turn every meal
          into a memorable part of your ocean adventure.
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className={styles.filterNav}>
        {Object.keys(diningTabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.navBtn} ${activeTab === tab ? styles.active : ""}`}
          >
            {tab === "Main Dining" ? "🍽️ " : tab === "Café" ? "☕ " : "🍹 "}
            {tab}
          </button>
        ))}
      </nav>

      {/* Sections for active tab */}
      <div className={styles.tabContent}>
        {diningTabs[activeTab].sections.map((section, index) => (
          <DiningSection
            key={index}
            {...section}
            isFirst={index === 0}
            categoryIcon={
              /* directly pass the image source here */ "../../../src/assets/Cruises/miana.png"
            }
          />
        ))}
      </div>
    </div>
  );
};

// DiningSection component
const DiningSection = ({
  title,
  description,
  offerings,
  dietarytitle,
  dietaryOptions,
  imageSrc,
  themeColor,
  buttoncolor,
  shipIcon,
  isFirst,
  categoryIcon,
}) => (
  <div
    className={styles.sectionContainer}
    style={{ backgroundColor: themeColor }}
  >
    {isFirst && (
      <div className={styles.decorationWrapper}>
        <img
          src={categoryIcon}
          alt="category icon"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "2px solid #ccc",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            backgroundColor: "#fff",
            padding: "5px",
          }}
        />
      </div>
    )}

    {/* Ship Tag */}
    <div className={styles.shipTag}>
      <img src={shipIcon} alt="Ship Tag" className={styles.tagImage} />
    </div>

    {/* Content */}
    <div className={styles.sectionContent}>
      <div className={styles.textContent}>
        <h2 className={styles.restaurantTitle}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.details}>
          <strong>Signature Offerings:</strong>
          <ul>
            {offerings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.dietary}>
          <strong>{dietarytitle}</strong>
          <p className={styles.dietaryText}>{dietaryOptions}</p>
        </div>
      </div>
      <div className={styles.imageCard}>
        <img src={imageSrc} alt={title} className={styles.restaurantImage} />
        <button
          className={styles.menuButton}
          style={{ backgroundColor: buttoncolor, color: "white" }}
        >
          View Menu
        </button>
      </div>
    </div>
  </div>
);

export default DiningPage;
