import React, { useState, useEffect } from "react";
import styles from "./CruiseBookingPageOE.module.css";

const CruiseBookingPageOE = () => {
  // --- 1. STATE MANAGEMENT ---
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState("");
  const [party, setParty] = useState({ adults: 1, children: 0 });
  const [selectedCabins, setSelectedCabins] = useState({
    deluxe: 0,
    view: 0,
    suite: 0,
  });
  const [insurance, setInsurance] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showModal, setShowModal] = useState(false);

  // --- 2. DATA CONFIGURATION ---
  const NIGHTS = 7;
  const cabinTypes = [
    { id: "deluxe", name: "Deluxe Cabin", price: 600 },
    { id: "view", name: "Deluxe Sea View Cabin", price: 799 },
    { id: "suite", name: "The Wall Hall Family Suite", price: 1299 },
  ];

  // --- 3. CALCULATIONS ---
  const totalPassengers = Number(party.adults) + Number(party.children);
  const roomsRequired = Math.ceil(totalPassengers / 2);
  const roomsSelected = Object.values(selectedCabins).reduce(
    (a, b) => a + b,
    0,
  );

  const cabinSubtotal = Object.entries(selectedCabins).reduce(
    (acc, [id, qty]) => {
      const cabin = cabinTypes.find((c) => c.id === id);
      return acc + cabin.price * NIGHTS * qty;
    },
    0,
  );

  const grandTotal = cabinSubtotal + insurance;

  // --- 4. HANDLERS ---
  const handleRoomChange = (id, val) => {
    const qty = Math.max(0, parseInt(val) || 0);
    setSelectedCabins((prev) => ({ ...prev, [id]: qty }));
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.mainTitle}>Your Custom Cruise Booking</h1>

      <div className={styles.mainLayout}>
        <div className={styles.formArea}>
          {/* STEP 1: TRAVEL DATES */}
          <section className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Select Your Travel Dates*</h3>
            <select
              className={styles.inputField}
              onChange={(e) => {
                setDates(e.target.value);
                setStep(2);
              }}
            >
              <option value="">-- Select Date --</option>
              <option value="Jan 24 - Jan 31, 2027">
                Jan 24, 2027 - Jan 31, 2027
              </option>
              <option value="Feb 15 - Feb 22, 2027">
                Feb 15, 2027 - Feb 22, 2027
              </option>
            </select>
          </section>

          {/* STEP 2: TRAVEL PARTY */}
          {step >= 2 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>1. Travel Party Details*</h3>
              <div className={styles.inputGrid}>
                <div>
                  <label>Adults (18+)</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    onChange={(e) => {
                      setParty({ ...party, adults: e.target.value });
                      setStep(3);
                    }}
                  />
                </div>
                <div>
                  <label>Children (-7)</label>
                  <input
                    type="number"
                    min="0"
                    defaultValue="0"
                    onChange={(e) =>
                      setParty({ ...party, children: e.target.value })
                    }
                  />
                </div>
              </div>
            </section>
          )}

          {/* STEP 3: STATEROOM SELECTION */}
          {step >= 3 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>2. Select Stateroom Type*</h3>
              <p className={styles.infoAlert}>
                Required Rooms: <strong>{roomsRequired}</strong> | Selected:{" "}
                <strong>{roomsSelected}</strong>
              </p>

              <div className={styles.cabinList}>
                {cabinTypes.map((cabin) => (
                  <div
                    key={cabin.id}
                    className={`${styles.cabinCard} ${selectedCabins[cabin.id] > 0 ? styles.activeCard : ""}`}
                  >
                    <img
                      src={cabin.img}
                      alt={cabin.name}
                      className={styles.cabinImg}
                    />
                    <div className={styles.cabinInfo}>
                      <strong>{cabin.name}</strong>
                      <span>${cabin.price} USD / night</span>
                    </div>
                    <div className={styles.qtyBox}>
                      <label>Qty:</label>
                      <input
                        type="number"
                        min="0"
                        value={selectedCabins[cabin.id]}
                        onChange={(e) =>
                          handleRoomChange(cabin.id, e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              {roomsSelected === roomsRequired ? (
                <button className={styles.nextBtn} onClick={() => setStep(4)}>
                  Next: Insurance
                </button>
              ) : (
                <p className={styles.errorHint}>
                  Please adjust room count to match {roomsRequired}.
                </p>
              )}
            </section>
          )}

          {/* STEP 4: INSURANCE */}
          {step >= 4 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>4. Travel Insurance*</h3>
              <select
                className={styles.inputField}
                onChange={(e) => {
                  setInsurance(Number(e.target.value));
                  setStep(5);
                }}
              >
                <option value="">-- Choose Insurance --</option>
                <option value="250">Basic Coverage ($250)</option>
                <option value="500">Premium Coverage ($500)</option>
                <option value="0">No Insurance</option>
              </select>
            </section>
          )}

          {/* STEP 5: PASSENGER INFO */}
          {step >= 5 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>5. Passenger Information*</h3>
              {[...Array(totalPassengers)].map((_, i) => (
                <div key={i} className={styles.passengerForm}>
                  <h4>Passenger {i + 1}</h4>
                  <div className={styles.inputGrid}>
                    <input placeholder="First Name" required />
                    <input placeholder="Last Name" required />
                  </div>
                </div>
              ))}
              <button className={styles.nextBtn} onClick={() => setStep(6)}>
                Go to Payment
              </button>
            </section>
          )}

          {/* STEP 6: PAYMENT */}
          {step >= 6 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>8. COMPLETE YOUR BOOKING</h3>
              <div
                className={styles.paymentRow}
                onClick={() => setPaymentMethod("card")}
              >
                <input
                  type="radio"
                  name="pay"
                  checked={paymentMethod === "card"}
                  readOnly
                />{" "}
                💳 Credit / Debit Card
              </div>
              {paymentMethod && (
                <div className={styles.paymentDetails}>
                  <input
                    placeholder="Cardholder Name"
                    className={styles.inputField}
                  />
                  <input
                    placeholder="Card Number"
                    className={styles.inputField}
                  />
                  <button
                    className={styles.confirmBtn}
                    onClick={() => setShowModal(true)}
                  >
                    CONFIRM PAYMENT
                  </button>
                </div>
              )}
            </section>
          )}
        </div>

        {/* SIDEBAR SUMMARY */}
        <aside className={styles.sidebar}>
          <div className={styles.summaryBox}>
            <h3 style={{ marginTop: 0 }}>Booking Summary</h3>
            <p className={styles.summarySub}>7 Night: OCEAN EXPLORER</p>
            <hr />
            <div className={styles.summaryRow}>
              <span>Dates:</span> <span>{dates || "---"}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Passengers:</span> <span>{totalPassengers}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Rooms:</span>{" "}
              <span>
                {roomsSelected} / {roomsRequired}
              </span>
            </div>

            {Object.entries(selectedCabins).map(
              ([id, qty]) =>
                qty > 0 && (
                  <div key={id} className={styles.summaryRow}>
                    <span>
                      {qty}x {cabinTypes.find((c) => c.id === id).name}
                    </span>
                    <span>
                      $
                      {(
                        cabinTypes.find((c) => c.id === id).price *
                        NIGHTS *
                        qty
                      ).toLocaleString()}
                    </span>
                  </div>
                ),
            )}

            <hr />
            <div className={styles.totalRow}>
              <span>TOTAL AMOUNT</span>
              <span>${grandTotal.toLocaleString()} USD</span>
            </div>
          </div>
        </aside>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Success!</h2>
            <p>Your payment was successful and booking is confirmed.</p>
            <button
              className={styles.modalOk}
              onClick={() => (window.location.href = "/next-page")}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CruiseBookingPageOE;
