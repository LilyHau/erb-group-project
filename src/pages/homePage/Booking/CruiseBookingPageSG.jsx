import React, { useState, useEffect } from "react";
import styles from "./CruiseBookingPageSG.module.css";
import { Link } from "react-router-dom";

import CRUISEregular from "../../../assets/Cruises/CRUISEregularsuitewithnoseaview.jpg";
import CRUISEluxrysuite2 from "../../../assets/Cruises/CRUISEluxrysuite2.jpg";
import CRUISEluxrysuiteforfamily from "../../../assets/Cruises/CRUISEluxrysuiteforfamily4people.jpg";

const CruiseBookingPageSG = () => {
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState("");
  const [party, setParty] = useState({ adults: 1, children: 0 });
  const [selectedCabins, setSelectedCabins] = useState({
    deluxe: 0,
    view: 0,
    suite: 0,
  });
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [insurance, setInsurance] = useState(0);
  const [passengers, setPassengers] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [showModal, setShowModal] = useState(false);

  const NIGHTS = 7;
  const cabinTypes = [
    {
      id: "deluxe",
      name: "Deluxe Cabin",
      info: "Sleeps 2 Adults",
      info2: "250 sq ft",
      price: 600,
      capacity: 2,
      img: CRUISEregular,
    },
    {
      id: "view",
      name: "Deluxe Sea View Cabin",
      info: "Sleeps 2 Adults",
      info2: "300 sq ft",
      price: 799,
      capacity: 2,
      img: CRUISEluxrysuite2,
    },
    {
      id: "suite",
      name: "The Wall Hall Family Suite",
      info: "Sleeps 2 Adults + 2 Child (≤7)",
      info2: "528 sq ft",
      price: 1299,
      capacity: 4,
      img: CRUISEluxrysuiteforfamily,
    },
  ];

  const activityList = [
    { id: "No", name: "No activities", price: 0 },
    { id: "cert", name: "Adult Dive Certification Courses", price: 450 },
    { id: "padi", name: "PADI Open Water Dive Course", price: 600 },
    { id: "junior_sub", name: "ADI Bubbleblower Course", price: 200 },
    { id: "junior_bio", name: "Junior Snorkel Workshop", price: 320 },
    { id: "blue_hole", name: "Blue Hole Exploration Dive", price: 250 },
    { id: "gen_bio", name: "General Marine Workshop", price: 300 },
  ];

  const totalPeople = Number(party.adults) + Number(party.children);
  const currentCapacity =
    selectedCabins.deluxe * 2 +
    selectedCabins.view * 2 +
    selectedCabins.suite * 4;
  const isCapacityMet = currentCapacity >= totalPeople && totalPeople > 0;

  const cabinSubtotal =
    selectedCabins.deluxe * 600 * NIGHTS +
    selectedCabins.view * 799 * NIGHTS +
    selectedCabins.suite * 1299 * NIGHTS;
  const activitiesTotal = selectedActivities.reduce(
    (sum, id) => sum + (activityList.find((a) => a.id === id)?.price || 0),
    0,
  );
  const grandTotal = cabinSubtotal + activitiesTotal + insurance;

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

  const isPaymentReady =
    paymentDetails.cardName.trim().length >= 3 &&
    paymentDetails.cardNumber.length === 16 &&
    paymentDetails.expiry.length >= 5 &&
    paymentDetails.cvv.length >= 3 &&
    isPaxInfoComplete;

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
  const handleCardChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");

    if (numericValue.length <= 16) {
      setPaymentDetails({
        ...paymentDetails,
        cardNumber: numericValue,
      });
    }
  };
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.ovalEffect}>
            <h1>SEA GUARDIAN</h1>
            <h2>海洋保育號</h2>
            <p>A Covenant of Coexistence Between Humans and the Sea</p>
            <Link to="/sgInfo">
              <a>More Info</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.pageContainer}>
        <h1 className={styles.mainTitle}>Your Custom Cruise Booking</h1>
        <div className={styles.mainLayout}>
          <div className={styles.formArea}>
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
                <option value="Jan 24, 2027 - Jan 31, 2027">
                  Jan 24, 2027 - Jan 31, 2027
                </option>
                <option value="Jul 24, 2027 - Jul 31, 2027">
                  Jul 24, 2027 - Jul 31, 2027
                </option>
              </select>
            </section>

            {step >= 2 && (
              <section className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  1. Travel Party Details*
                </h3>
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

            {step >= 3 && (
              <section className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  2. Select Stateroom Type*
                </h3>
                <div className={styles.cabinList}>
                  {cabinTypes.map((c) => (
                    <div key={c.id} className={styles.cabinCard}>
                      <img
                        src={c.img}
                        className={styles.cabinImg}
                        alt={c.name}
                      />
                      <div className={styles.cabinInfo}>
                        <strong>{c.name}</strong>
                        <span className={styles.subInfo}>
                          {c.info} | {c.info2}
                        </span>
                        <span className={styles.priceHighlight}>
                          ${c.price} USD / night
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
                </div>
                {isCapacityMet && (
                  <button
                    className={styles.confirmBtn}
                    onClick={() => setStep(4)}
                  >
                    Proceed to Activities
                  </button>
                )}
              </section>
            )}

            {step >= 4 && (
              <>
                <section className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    3. Additional Activities & Dive Courses
                  </h3>
                  {activityList.map((act) => (
                    <div key={act.id} className={styles.rowItem}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={() =>
                            setSelectedActivities((prev) =>
                              prev.includes(act.id)
                                ? prev.filter((a) => a !== act.id)
                                : [...prev, act.id],
                            )
                          }
                        />{" "}
                        {act.name}
                      </label>
                      <span>${act.price} USD</span>
                    </div>
                  ))}
                </section>

                <section className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    4. Optional Basic Travel Insurance
                  </h3>
                  <select
                    className={styles.inputField}
                    onChange={(e) => {
                      setInsurance(Number(e.target.value));
                      setStep(5);
                    }}
                  >
                    <option value="">-- Select Option --</option>
                    <option value="0">No Insurance</option>
                    <option value="250">Basic Coverage ($250)</option>
                    <option value="500">Premium Coverage ($500)</option>
                  </select>
                </section>
              </>
            )}

            {step >= 5 && (
              <section className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  5. Passenger Information*
                </h3>

                <p>Please enter N/A for not applicable.</p>

                {passengers.map((p, i) => (
                  <div key={i} className={styles.paxBox}>
                    <h4 className={styles.paxHeader}>Passenger #{i + 1}</h4>
                    <div className={styles.paxGrid}>
                      <select
                        value={p.title || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "title", e.target.value)
                        }
                      >
                        <option value="">Title</option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Ms">Miss.</option>
                      </select>

                      <input
                        placeholder="First Name"
                        value={p.firstName || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "firstName", e.target.value)
                        }
                      />
                      <input
                        placeholder="Middle Name"
                        value={p.middleName || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "middleName", e.target.value)
                        }
                      />
                      <input
                        placeholder="Last Name"
                        value={p.lastName || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "lastName", e.target.value)
                        }
                      />

                      <select
                        value={p.gender || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "gender", e.target.value)
                        }
                      >
                        <option value="">Gender</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                      </select>

                      <input
                        type="date"
                        max={new Date().toISOString().split("T")[0]}
                        value={p.dob || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "dob", e.target.value)
                        }
                      />

                      <input
                        placeholder="Country"
                        value={p.country || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "country", e.target.value)
                        }
                      />
                      <input
                        placeholder="City"
                        value={p.city || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "city", e.target.value)
                        }
                      />
                      <input
                        placeholder="Address 1"
                        className={styles.fullWidth}
                        value={p.addr1 || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "addr1", e.target.value)
                        }
                      />
                      <input
                        placeholder="State"
                        value={p.state || ""}
                        onChange={(e) =>
                          handlePaxChange(i, "state", e.target.value)
                        }
                      />

                      <input
                        placeholder="Zip Code"
                        value={p.zip || ""}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          handlePaxChange(i, "zip", val);
                        }}
                      />

                      <input
                        type="tel"
                        placeholder="Phone"
                        value={p.phone || ""}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          if (val.length <= 15) {
                            handlePaxChange(i, "phone", val);
                          }
                        }}
                      />

                      <div className={styles.emailCol}>
                        <input
                          placeholder="Email"
                          type="email"
                          value={p.email || ""}
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
                          <small className={styles.errorLabel}>
                            Gmail/iCloud/Hotmail only
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.policyBox}>
              <h4>Cancellation Policy</h4>
              <div className={styles.policyRow}>
                <span>120+ days before departure:</span>
                <span>Full refund</span>
              </div>
              <div className={styles.policyRow}>
                <span>60-119 days before departure:</span>
                <span>75% refund</span>
              </div>
              <div className={styles.policyRow}>
                <span>&lt;30 days before departure:</span>
                <span>No refund</span>
              </div>
            </div>

            <div className={styles.summaryBox}>
              <h3>Booking Summary</h3>
              <p className={styles.summaryCruise}>
                7 Night: OCEAN EXPLORER Cruise
              </p>
              <p className={styles.summaryDates}>{dates || "Select Dates"}</p>
              <hr className={styles.divider} />

              {Object.entries(selectedCabins).map(([id, qty]) => {
                if (qty <= 0) return null;
                const cabin = cabinTypes.find((c) => c.id === id);
                return (
                  <div key={id} className={styles.sumRoomItem}>
                    <img
                      src={cabin.img}
                      className={styles.sumRoomImg}
                      alt={cabin.name}
                    />
                    <div className={styles.sumRoomInfo}>
                      <span>
                        {qty}x {cabin.name}
                      </span>
                      <span className={styles.priceText}>
                        ${(cabin.price * NIGHTS * qty).toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className={styles.summaryRow}>
                <span>
                  Guests ({party.adults}A, {party.children}C)
                </span>
                <span>Incl.</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Activities Subtotal</span>
                <span>${activitiesTotal.toLocaleString()}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Insurance</span>
                <span>${insurance}</span>
              </div>
              <hr className={styles.divider} />
              <div className={styles.totalRow}>
                <span>TOTAL AMOUNT</span>
                <span>${grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className={styles.paymentBox}>
              <h4>COMPLETE YOUR BOOKING</h4>
              <div className={styles.payGrid}>
                <input
                  placeholder="Name on Card"
                  className={styles.fullWidth}
                  value={paymentDetails.cardName}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                    if (val.length <= 50) {
                      setPaymentDetails({ ...paymentDetails, cardName: val });
                    }
                  }}
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  className={styles.fullWidth}
                  value={paymentDetails.cardNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 16) {
                      setPaymentDetails({ ...paymentDetails, cardNumber: val });
                    }
                  }}
                />

                <input
                  placeholder="MM/YY"
                  value={paymentDetails.expiry}
                  onChange={(e) => {
                    if (e.target.value.length <= 5) {
                      setPaymentDetails({
                        ...paymentDetails,
                        expiry: e.target.value,
                      });
                    }
                  }}
                />

                <input
                  placeholder="CVV"
                  value={paymentDetails.cvv}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 4) {
                      setPaymentDetails({ ...paymentDetails, cvv: val });
                    }
                  }}
                />
              </div>

              <button
                className={
                  isPaymentReady ? styles.confirmBtn : styles.disabledBtn
                }
                disabled={!isPaymentReady}
                onClick={() => setShowModal(true)}
              >
                Confirm Booking
              </button>
            </div>
          </aside>
        </div>

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <div className={styles.successIcon}>✓</div>
              </div>

              <div className={styles.modalBody}>
                <h2>Booking Confirmed!</h2>
                <p>
                  Thank you for choosing <strong>SEA GUARDIAN</strong>.<br />A
                  confirmation email with your itinerary has been sent to your
                  primary guest.
                </p>
              </div>

              <div className={styles.modalFooter}>
                <button
                  className={styles.modalConfirmBtn}
                  onClick={() => (window.location.href = "/shop")}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CruiseBookingPageSG;
