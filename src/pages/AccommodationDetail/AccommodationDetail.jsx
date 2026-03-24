import styles from "./AccommodationDetail.module.css";
import { Link } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import {oeRooms} from "../../../data.js";
import {sgRooms} from "../../../data.js";
import {sdRooms} from "../../../data.js";

const AccommodationDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}></div>
      <div className={styles.content}>
      <section className={styles.intro}>
        <h1>Your Home at Sea</h1>
        <p>Every Ocean Park HK Cruise Line ship offers three thoughtfully designed stateroom tiers, each tailored to the ship’s unique theme—whether you’re exploring marine science, volunteering for conservation, or relaxing with your family. All rooms feature core amenities, eco-friendly touches, and ocean-inspired decor, with style variations that match your cruise’s adventure.</p>
      </section>
      <section className={`${styles.shipSection} ${styles.oeSection}`}>
        <h2>OCEAN EXPLORER</h2>
        <h3>Dive-Ready Scientific Expedition Style</h3>
        <Slideshow cards={oeRooms}/>
        <Link to="/CruiseBookingPageOE"><a>Book Now</a></Link>
      </section>
      <section className={`${styles.shipSection} ${styles.sgSection}`}>
        <h2>SEA GUARDIAN</h2>
        <h3>Volunteer-Focused Eco-Conscious Style</h3>
        <Slideshow cards={sgRooms}/>
        <Link to="/CruiseBookingPageSG"><a>Book Now</a></Link>
      </section>
      <section className={`${styles.shipSection} ${styles.sdSection}`}>
        <h2>Serenity Dream</h2>
        <h3>Family-Relaxation Ocean-Focused Style</h3>
        <Slideshow cards={sdRooms}/>
        <Link to="/CruiseBookingPageSD"><a>Book Now</a></Link>
      </section>
    </div></div>
  )
}

export default AccommodationDetail