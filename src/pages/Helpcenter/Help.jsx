import React from "react";
import { Link } from "react-router-dom";
import styles from "./Help.module.css";

// Assets (Ensure these paths are correct in your project)
import oeLogo from "../../assets/Cruises/OE-Logo.png";
import sgLogo from "../../assets/Cruises/SG-Logo.png";
import sdLogo from "../../assets/Cruises/SD-Logo.png";

const Help = () => {
  return (
    <div className={styles.helpCenterPage}>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* Top Navigation / Logo Section */}
      <nav className={styles.buttonContainer}>
        <p className={styles.bookNowLabel}>Book Now</p>
        <ul className={styles.logoList}>
          <li>
            <Link to="/CruiseBookingPageOE">
              <img src={oeLogo} alt="OE" />
            </Link>
          </li>
          <li>
            <Link to="/SEAGUARDIAN">
              <img src={sgLogo} alt="SG" />
            </Link>
          </li>
          <li>
            <Link to="/SERENITYDREAM">
              <img src={sdLogo} alt="SD" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className={styles.helpHeader}>
        <h1 className={styles.mainTitle}>Help Center</h1>
        <p className={styles.subtitle}>
          We value your questions, feedback, and cruise booking inquiries. Our
          dedicated guest experience team is here to assist you 7 days a week
          for all your ocean cruise needs.
        </p>
      </header>

      {/* Section 1: Contact Form Card */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionHeading}>1. Send Us a Message</h2>
        <div className={styles.contactCard}>
          {/* Blue Sidebar */}
          <div className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>How we help</h3>
            <div className={styles.contactInfoList}>
              <div className={styles.infoItem}>
                <i className="fa-solid fa-phone"></i>
                <span>+852 3923 2323</span>
              </div>
              <div className={styles.infoItem}>
                <i className="fa-solid fa-envelope"></i>
                <span>bookings@oceanparkcruise.com.hk</span>
              </div>
              <div className={styles.infoItem}>
                <i className="fa-solid fa-location-dot"></i>
                <span>180 Wong Chuk Hang Road, Aberdeen</span>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <div className={styles.socialIcon}>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className={styles.socialIcon}>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className={styles.socialIcon}>
                <i className="fa-brands fa-discord"></i>
              </div>
            </div>

            {/* Decorative circles */}
            <div className={styles.decorationCircleLg}></div>
            <div className={styles.decorationCircleSm}></div>
          </div>

          {/* Form Side */}
          <form className={styles.contactForm}>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" defaultValue="Chan" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="text" />
              </div>
            </div>

            <div className={styles.subjectBox}>
              <p className={styles.labelText}>Select Subject?</p>
              <div className={styles.radioGroup}>
                {["General Inquiry", "Booking Issue", "Feedback", "Other"].map(
                  (text, i) => (
                    <label key={i} className={styles.radioItem}>
                      <input
                        type="radio"
                        name="subject"
                        defaultChecked={i === 0}
                      />
                      <span>{text}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea placeholder="Write your message.."></textarea>
            </div>

            <div className={styles.btnContainer}>
              <button type="submit" className={styles.sendBtn}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 2: Links */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionHeading}>2. More help</h2>
        <div className={styles.linksGrid}>
          <a href="#contact">Contact us</a>
          <a href="./FAQSection">Frequently Asked Questions</a>
          <a href="./privacy">Privacy Policy</a>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Footer */}
      <footer className={styles.brandingFooter}>
        <h3 className={styles.brandName}>Ocean Park Hong Kong Cruise Line</h3>
        <div className={styles.brandStory}>
          <p>
            Born from Ocean Park Hong Kong's decades-long legacy of marine
            conservation and education...
          </p>
          <p>
            This is cruising redefined—for the ocean, for you, for the next
            generation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Help;
