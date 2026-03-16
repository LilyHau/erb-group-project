import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import RunningText from "../footer/RunningText";

const Layout = () => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Navbar />
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/cruises">Our Cruises</a> */}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <RunningText />
        <p>© 2024 Your App</p>
      </footer>
    </>
  );
};

export default Layout;
