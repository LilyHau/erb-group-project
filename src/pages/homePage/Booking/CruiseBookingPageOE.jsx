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
  const [passengers, setPassengers] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [showModal, setShowModal] = useState(false);

  // --- 2. CONFIG & CALCULATIONS ---
  const NIGHTS = 7;
  const cabinTypes = [
    {
      id: "deluxe",
      name: "Deluxe Cabin",
      price: 600,
      capacity: 2,
      img: "https://placeholder.com",
    },
    {
      id: "view",
      name: "Deluxe Sea View Cabin",
      price: 799,
      capacity: 2,
      img: "https://placeholder.com",
    },
    {
      id: "suite",
      name: "The Wall Hall Family Suite",
      price: 1299,
      capacity: 4,
      img: "https://placeholder.com",
    },
  ];

  const totalPeople = Number(party.adults) + Number(party.children);
  const currentCapacity =
    selectedCabins.deluxe * 2 +
    selectedCabins.view * 2 +
    selectedCabins.suite * 4;
  const isCapacityMet = currentCapacity >= totalPeople && totalPeople > 0;

  useEffect(() => {
    setPassengers((prev) =>
      Array.from(
        { length: totalPeople },
        (_, i) =>
          prev[i] || {
            title: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            country: "",
            city: "",
            addr1: "",
            addr2: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
          },
      ),
    );
  }, [totalPeople]);

  // --- 3. VALIDATION ---
  const validateEmail = (email) =>
    /@(gmail\.com|icloud\.com|hotmail\.com)$/i.test(email);

  const isPaxInfoComplete =
    passengers.length > 0 &&
    passengers.every(
      (p) =>
        p.title &&
        p.firstName &&
        p.lastName &&
        p.gender &&
        p.dob &&
        p.country &&
        p.city &&
        p.addr1 &&
        p.state &&
        p.zip &&
        p.phone &&
        validateEmail(p.email),
    );

  const isPaymentComplete =
    paymentDetails.cardName &&
    paymentDetails.cardNumber.length >= 13 &&
    paymentDetails.expiry &&
    paymentDetails.cvv.length >= 3;

  const cabinSubtotal =
    selectedCabins.deluxe * 600 * NIGHTS +
    selectedCabins.view * 799 * NIGHTS +
    selectedCabins.suite * 1299 * NIGHTS;
  const grandTotal = cabinSubtotal + insurance;

  // --- 4. HANDLERS ---
  const handleRoomChange = (id, val) =>
    setSelectedCabins((prev) => ({
      ...prev,
      [id]: Math.max(0, parseInt(val) || 0),
    }));
  const handlePaxChange = (i, field, val) => {
    const updated = [...passengers];
    updated[i] = { ...updated[i], [field]: val };
    setPassengers(updated);
  };
  const handlePayChange = (field, val) =>
    setPaymentDetails((prev) => ({ ...prev, [field]: val }));

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.mainTitle}>Your Custom Cruise Booking</h1>
      <div className={styles.mainLayout}>
        <div className={styles.formArea}>
          {/* STEP 1: DATES */}
          <section className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Select Your Travel Dates*</h3>
            <select
              className={styles.inputField}
              onChange={(e) => {
                setDates(e.target.value);
                setStep(2);
              }}
            >
              <option value="">-- Choose Dates --</option>
              <option value="Jan 24 - Jan 31, 2027">
                Jan 24 - Jan 31, 2027
              </option>
              <option value="Feb 15 - Feb 22, 2027">
                Feb 15 - Feb 22, 2027
              </option>
            </select>
          </section>

          {/* STEP 2: PARTY */}
          {step >= 2 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>1. Travel Party Details*</h3>
              <div className={styles.inputGrid}>
                <input
                  type="number"
                  min="1"
                  placeholder="Adults"
                  onChange={(e) => {
                    setParty({ ...party, adults: e.target.value });
                    setStep(3);
                  }}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Children"
                  onChange={(e) =>
                    setParty({ ...party, children: e.target.value })
                  }
                />
              </div>
            </section>
          )}

          {/* STEP 3: STATEROOMS */}
          {step >= 3 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>2. Select Stateroom Type*</h3>
              <p className={styles.infoAlert}>
                Party: {totalPeople} | Capacity: {currentCapacity}
              </p>
              {cabinTypes.map((c) => (
                <div key={c.id} className={styles.cabinCard}>
                  <img src={c.img} className={styles.cabinImg} alt={c.name} />
                  <div className={styles.cabinInfo}>
                    <strong>{c.name}</strong>
                    <span>
                      ${c.price}/nt (Fits {c.capacity})
                    </span>
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={selectedCabins[c.id]}
                    onChange={(e) => handleRoomChange(c.id, e.target.value)}
                  />
                </div>
              ))}
              {isCapacityMet ? (
                <button className={styles.nextBtn} onClick={() => setStep(4)}>
                  Next Step
                </button>
              ) : (
                <p className={styles.errorHint}>Need more rooms.</p>
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
                <option value="0">No Insurance</option>
                <option value="250">Basic ($250)</option>
              </select>
            </section>
          )}

          {/* STEP 5: PASSENGER INFO */}
          {step >= 5 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>5. Passenger Information*</h3>
              {passengers.map((p, i) => (
                <div key={i} className={styles.passengerBox}>
                  <h4 className={styles.paxHeader}>Passenger #{i + 1}</h4>
                  <div className={styles.paxGrid}>
                    <select
                      value={p.title}
                      onChange={(e) =>
                        handlePaxChange(i, "title", e.target.value)
                      }
                    >
                      <option value="">Title</option>
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                    </select>
                    <input
                      placeholder="First Name"
                      onChange={(e) =>
                        handlePaxChange(i, "firstName", e.target.value)
                      }
                    />
                    <input
                      placeholder="Middle Name"
                      onChange={(e) =>
                        handlePaxChange(i, "middleName", e.target.value)
                      }
                    />
                    <input
                      placeholder="Last Name"
                      onChange={(e) =>
                        handlePaxChange(i, "lastName", e.target.value)
                      }
                    />
                    <select
                      value={p.gender}
                      onChange={(e) =>
                        handlePaxChange(i, "gender", e.target.value)
                      }
                    >
                      <option value="">Gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                    <input
                      type="date"
                      onChange={(e) =>
                        handlePaxChange(i, "dob", e.target.value)
                      }
                    />
                    <input
                      placeholder="Country"
                      onChange={(e) =>
                        handlePaxChange(i, "country", e.target.value)
                      }
                    />
                    <input
                      placeholder="City"
                      onChange={(e) =>
                        handlePaxChange(i, "city", e.target.value)
                      }
                    />
                    <input
                      placeholder="Address 1"
                      className={styles.fullWidth}
                      onChange={(e) =>
                        handlePaxChange(i, "addr1", e.target.value)
                      }
                    />
                    <input
                      placeholder="State"
                      onChange={(e) =>
                        handlePaxChange(i, "state", e.target.value)
                      }
                    />
                    <input
                      placeholder="Zip"
                      onChange={(e) =>
                        handlePaxChange(i, "zip", e.target.value)
                      }
                    />
                    <input
                      placeholder="Phone"
                      onChange={(e) =>
                        handlePaxChange(i, "phone", e.target.value)
                      }
                    />
                    <div className={styles.emailWrapper}>
                      <input
                        placeholder="Email"
                        className={
                          p.email && !validateEmail(p.email)
                            ? styles.inputError
                            : ""
                        }
                        onChange={(e) =>
                          handlePaxChange(i, "email", e.target.value)
                        }
                      />
                      {p.email && !validateEmail(p.email) && (
                        <small className={styles.errorText}>
                          Gmail/iCloud/Hotmail only
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <button
                className={
                  isPaxInfoComplete ? styles.nextBtn : styles.disabledBtn
                }
                disabled={!isPaxInfoComplete}
                onClick={() => setStep(6)}
              >
                Go to Payment
              </button>
            </section>
          )}

          {/* STEP 6: PAYMENT DETAILS */}
          {step >= 6 && (
            <section className={styles.formSection}>
              <h3 className={styles.sectionTitle}>8. COMPLETE YOUR BOOKING</h3>
              <div className={styles.paymentMethods}>
                <label onClick={() => setPaymentMethod("card")}>
                  <input
                    type="radio"
                    name="pay"
                    checked={paymentMethod === "card"}
                    readOnly
                  />{" "}
                  💳 Credit / Debit Card
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className={styles.cardDetailsBox}>
                  <h4 className={styles.subHeader}>Card Information</h4>
                  <div className={styles.paxGrid}>
                    <input
                      placeholder="Cardholder Name"
                      className={styles.fullWidth}
                      onChange={(e) =>
                        handlePayChange("cardName", e.target.value)
                      }
                    />
                    <input
                      placeholder="Card Number (16 Digits)"
                      className={styles.fullWidth}
                      maxLength="16"
                      onChange={(e) =>
                        handlePayChange("cardNumber", e.target.value)
                      }
                    />
                    <input
                      placeholder="MM/YY"
                      onChange={(e) =>
                        handlePayChange("expiry", e.target.value)
                      }
                    />
                    <input
                      placeholder="CVV"
                      maxLength="4"
                      onChange={(e) => handlePayChange("cvv", e.target.value)}
                    />
                  </div>
                  <button
                    className={
                      isPaymentComplete ? styles.confirmBtn : styles.disabledBtn
                    }
                    disabled={!isPaymentComplete}
                    onClick={() => setShowModal(true)}
                  >
                    CONFIRM PAYMENT (${grandTotal.toLocaleString()})
                  </button>
                </div>
              )}
            </section>
          )}
        </div>

        {/* SIDEBAR SUMMARY */}
        <aside className={styles.sidebar}>
          <div className={styles.summaryBox}>
            <h3>Booking Summary</h3>
            <p>Dates: {dates || "---"}</p>
            <hr />
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
            <div className={styles.totalRow}>
              <span>TOTAL:</span>
              <span>${grandTotal.toLocaleString()}</span>
            </div>
          </div>
        </aside>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Payment Successful!</h2>
            <p>
              Your cruise booking is confirmed. Check your email for details.
            </p>
            <button
              className={styles.modalBtn}
              onClick={() => (window.location.href = "/next")}
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
