import Logo from "../../assets/navbar/OP cruise logo.png";
import burger from "../../assets/navbar/menu-burger.png";
import CartIcon from "../../assets/navbar/CartIcon.svg";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { useState } from "react";

const Navbar = ({cartItems}) => {
  const [isActive, setIsActive] = useState(false);
  const toggleHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <span className={styles.blueBlock}></span>
          <nav className={styles.logIn}>
            <div className={styles.logInList}>
              <a className={styles.faq}><Link to="/FAQSection">FAQ</Link></a>
              <a><Link to="/about">My Account</Link></a>
            </div>
          </nav>
      <div className={styles.navbar}>
        <Link to="/"><img className={styles.logo} src={Logo} alt="logo" /></Link>
        <ul className={styles.navbarListItems}>
          <Link to="/about"><li className={styles.hoverUnderlineAnimation}>About</li></Link>
          <li className={styles.dropdown}>
            <a className={styles.hoverUnderlineAnimation}>Our Cruises</a>
            <ul className={styles.dropdownContent}>
              <li><Link to="/cruises">Ships Overview</Link></li>
              <li><Link to="/OCEANEXPLORER">Ocean Explorer</Link></li>
              <li><Link to="/SEAGUARDIAN">Sea Guardian</Link></li>
              <li><Link to="/SERENITYDREAM">Serenity Dream</Link></li>
            </ul>
          </li><li className={styles.dropdown}>
            <Link to="onboard"><a className={styles.hoverUnderlineAnimation}>Onboard Thrills</a></Link>
          </li>
          <Link to="/shop"><li className={styles.hoverUnderlineAnimation}>Exclusive Merch</li></Link>
        </ul>
        <div className={styles.navbarBuyItems}>
          <span className={styles.cartIcon}>
            <Link to="/Cart"><img className={styles.cartLink} src={CartIcon} alt="cart icon" />{cartItems.length > 0 && <p>{cartItems.length}</p>}</Link>
            </span>
            <span>
              <Link to="/about" className={styles.planBtn}>Start Planning</Link>
            </span>
            <nav className={styles.mobileMenu}>
            <div className={styles.mobileMenuToggle}>
              <img src={burger} alt="menu" onClick={toggleHandler}/>
            </div>
            <div className={`${styles.mobileNavLinks} ${isActive ? styles.active : ''}`}>
              <ul>
              <Link to="/about" onClick={toggleHandler}><li>About</li></Link>
              <Link to="/cruises" onClick={toggleHandler}><li>Our Cruises</li></Link>
              <Link to="/onboard" onClick={toggleHandler}><li>Onboard Thrills</li></Link>
              <Link to="/shop" onClick={toggleHandler}><li>Exclusive Merch</li></Link></ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;