import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/homePage/OP cruise logo.png";

function Navbar() {
  return (
    <>
      <span className={styles.blueBlock}></span>
      <nav className={styles.logIn}>
        <div className={styles.logInList}>
          <a className={styles.logInListFirst}>
            <Link to="/">FAQ</Link>
          </a>
          <a>
            <Link to="/cruises">My Account</Link>
          </a>
        </div>
      </nav>
      <nav className={styles.navbar}>
        <img src={Logo} alt="logo" />
        <div className={styles.NavbarListItems}>
          <Link to="/">
            <span className={styles.hoverUnderlineAnimation}>About</span>
          </Link>
          <Link to="/about">
            <span className={styles.hoverUnderlineAnimation}>Our Cruises</span>
          </Link>
          <Link to="/">
            <span className={styles.hoverUnderlineAnimation}>
              Onboard Thrills
            </span>
          </Link>
          <Link to="/cruises">
            <span className={styles.hoverUnderlineAnimation}>
              Exclusive Merch
            </span>
          </Link>
        </div>
        <div className={styles.NavbarBuyItems}>
          <Link to="/"></Link>
          <span>
            <Link to="/about">Start Planning</Link>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
