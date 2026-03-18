import React from "react";
import styles from "./CruiseBookingPageOE.module.css";

function CruiseBookingPageOE() {
  // Styles for fixed containers

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Your Custom Cruise Booking</h1>

      <div className={styles.mainLayout}>
        {/* LEFT COLUMN: FORM DETAILS */}
        <div className={styles.formFlow}>
          <section className={styles.formSection}>
            <h3>1. Travel Party Details</h3>
            <div className={styles.inputGrid}>
              <div>
                <label>Number of Adults (18+)</label>
                <input type="number" defaultValue="1" />
              </div>
              <div>
                <label>Number of Children (-7)</label>
                <input type="number" defaultValue="0" />
              </div>
            </div>
          </section>

          <section className={styles.formSection}>
            <h3>2. Select Cabin Type</h3>
            <div className={styles.cabinCard}>
              <div
                className={styles.cabinImg}
                style={{ background: "#ddd" }}
              ></div>
              <div className={styles.cabinInfo}>
                <strong>Deluxe Cabin</strong>
                <p>$600 USD a night</p>
              </div>
            </div>
            <div className={styles.cabinCard}>
              <div
                className={styles.cabinImg}
                style={{ background: "#bbb" }}
              ></div>
              <div className={styles.cabinInfo}>
                <strong>Deluxe Sea View Cabin</strong>
                <p>$799 USD a night</p>
              </div>
            </div>
          </section>

          <section className={styles.formSection}>
            <h3>3. Additional Activities</h3>
            <label>
              <input type="checkbox" /> PADI Open Water Course ($600)
            </label>
            <br />
            <label>
              <input type="checkbox" /> Blue Hole Exploration ($250)
            </label>
          </section>

          <section className={styles.formSection}>
            <h3>5. Passenger Information</h3>
            <div className={styles.inputGrid}>
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Email" />
              <input placeholder="Phone" />
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: SUMMARY & PAYMENT */}
        <aside className={styles.sidebar}>
          <div className={styles.stickyBox}>
            <h4>Booking Summary</h4>
            <hr />
            <p>7 Night: OCEAN EXPLORER</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Total Amount</span>
              <strong>$0.00</strong>
            </div>
            <button
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "10px",
                background: "#5bc0de",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Confirm Booking
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CruiseBookingPageOE;
