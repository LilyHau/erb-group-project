import { Link } from "react-router-dom";
import styles from "./PrivacyPolicy.module.css";
import oeLogo from "../../assets/Cruises/OE-Logo.png";
import sgLogo from "../../assets/Cruises/SG-Logo.png";
import sdLogo from "../../assets/Cruises/SD-Logo.png";
const PrivacyPolicy = () => {
  return (
    <div className={styles.privacy}>
      <h1>Privacy Policy</h1>
      <div className={styles.buttonContainer}>
        <p>Book Now</p>
        <ul>
          <li><Link to="/CruiseBookingPageOE"><img src={oeLogo}/></Link></li>
          <li><Link to="/SEAGUARDIAN"><img src={sgLogo}/></Link></li>
          <li><Link to="/SERENITYDREAM"><img src={sdLogo} /></Link></li>
        </ul>
      </div>
      <div className={styles.privacyContainer}>
    <h2>Introduction</h2>
    <p>Welcome to the official website and booking platform of <strong>Ocean Park HK Cruise Line</strong> (“we,” “us,” or “our”). We are committed to protecting the privacy and personal data of our guests, website visitors, and business partners (“you” or “users”). This Privacy Policy outlines how we collect, use, store, disclose, and protect your personal information when you use our website, mobile applications, booking services, or onboard facilities.</p>
    <p>By accessing our website or submitting your personal information to us, you consent to the data practices described in this policy.</p>
    <h2>1. Information We Collect</h2>
    <p>We collect different types of information to provide and improve our cruise services:</p>
    <h3>1.1 Personal Identification Information</h3>
    <p>When you book a cruise, create an account, or contact us, we may collect:</p>
    <ul>
        <li>Full Name (as shown on travel documents)</li>
        <li>Date of Birth, Gender, and Nationality</li>
        <li>Passport/ID Number, Expiry Date, and Visa Details</li>
        <li>Contact Information (Email Address, Phone Number, Mailing Address)</li>
        <li>Emergency Contact Details</li>
        <li>Financial Information (Credit Card Details, Billing Address – processed securely via third-party payment gateways)</li>
    </ul>
    <h3>1.2 Non-Personal Identification Information</h3>
    <p>Automatically collected as you navigate our site:</p>
    <ul>
        <li>IP Address and Device Information (Type, Browser, Operating System)</li>
        <li>Website Usage Data (Pages Viewed, Time Spent, Click-Stream Data)</li>
        <li>Cookies and Tracking Technologies (see Section 7)</li>
    </ul>
    <h3>1.3 Special Categories of Data (Voluntary)</h3>
    <p>For health & safety compliance (required for cruise travel):</p>
    <ul>
        <li>Dietary Restrictions, Allergies, and Medical Conditions</li>
        <li>Mobility Requirements and Accessibility Needs</li>
        <li>Emergency Medical Information (if provided)</li>
    </ul>
    <h2>2. How We Use Your Information</h2>
    <p>We use your personal data in compliance with the Personal Data (Privacy) Ordinance (Cap. 486) of Hong Kong:</p>
    <table>
        <thead>
            <tr>
                <th>Purpose</th>
                <th>Details</th>
                <th>Legal Basis</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cruise Booking & Fulfillment</td>
                <td>Process reservations, issue tickets, and manage onboard services.</td>
                <td>Performance of Contract</td>
            </tr>
            <tr>
                <td>Guest Communication</td>
                <td>Send booking confirmations, updates, and safety notices.</td>
                <td>Legitimate Interest</td>
            </tr>
            <tr>
                <td>Health & Safety</td>
                <td>Administer medical care and comply with maritime regulations.</td>
                <td>Vital Interests / Legal Obligation</td>
            </tr>
            <tr>
                <td>Marketing & Promotions</td>
                <td>Send personalized offers and loyalty program updates.</td>
                <td>Consent (Opt-In)</td>
            </tr>
            <tr>
                <td>Site Improvement</td>
                <td>Analyze user behavior to enhance website functionality.</td>
                <td>Legitimate Interest</td>
            </tr>
            <tr>
                <td>Legal Compliance</td>
                <td>Comply with tax obligations and fraud prevention.</td>
                <td>Legal Obligation</td>
            </tr>
        </tbody>
    </table>
    <h2>3. Information Sharing & Disclosure</h2>
    <p>We do not sell your personal data. We share information only with:</p>
    <ul>
        <li><strong>Service Providers:</strong> Payment processors (Stripe, PayPal), technology partners, and port authorities.</li>
        <li><strong>Legal Requirements:</strong> Disclosure required by law, court order, or government regulation.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger or acquisition.</li>
    </ul>
    <h2>4. Data Storage & Security</h2>
    <ul>
        <li><strong>Encryption:</strong> Data transmissions secured via SSL/TLS encryption.</li>
        <li><strong>Access Controls:</strong> Limited access permissions on secure servers.</li>
        <li><strong>Retention Policy:</strong> Data is kept only as long as necessary or required by law.</li>
    </ul>
    <h2>5. Your Data Protection Rights</h2>
    <p>Under Hong Kong PDPO and international standards, you have the right to:</p>
    <ol>
        <li><strong>Right of Access:</strong> Request a copy of your personal data.</li>
        <li><strong>Right to Rectification:</strong> Correct inaccurate information.</li>
        <li><strong>Right to Erasure:</strong> Request data deletion (where lawful).</li>
        <li><strong>Right to Withdraw Consent:</strong> Opt-out of processing at any time.</li>
    </ol>
    <p>Contact our DPO at: <a href="mailto:privacy@oceanparkcruise.com.hk">privacy@oceanparkcruise.com.hk</a></p>
    <h2>6. Children’s Privacy</h2>
    <p>Our services are not intended for children under 13. We do not knowingly collect their data without parental consent.</p>
    <h2>7. Cookie Policy</h2>
    <p>We use <strong>Essential</strong> (functionality), <strong>Analytical</strong> (tracking), and <strong>Marketing</strong> (personalization) cookies. You can manage these via your browser settings.</p>
    <h2>8. Changes to This Privacy Policy</h2>
    <p>We may update this policy periodically. Material changes will be notified via our website.</p>
      </div>
      <div className={styles.location}>
        <h2>Our Headquarters Location</h2><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14772.073523831765!2d114.16144065247951!3d22.239381375683937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3406aa98def2cb65%3A0x8e5233851dfbf1a4!2z5rW35rSL5YWs5ZyS!5e0!3m2!1szh-TW!2shk!4v1774256642152!5m2!1szh-TW!2shk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}

export default PrivacyPolicy