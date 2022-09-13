import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../public/images/logo.svg";
import hambourger from "../public/images/icon-hamburger.svg";
import close from "../public/images/icon-close.svg";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${menuOpen ? styles.Beluga : ""}`}>
        <Link href="/">
          <a aria-label="Home page" className={styles.logo}>
            <Image src={logo} alt="Manage logo" />
          </a>
        </Link>

        <nav
          aria-label="Primary"
          className={menuOpen ? styles.navOpen : styles.nav}
        >
          <ul
            role="list"
            className={menuOpen ? styles.linksOpen : styles.links}
            id="primary-navigation"
          >
            <li>
              <Link href="/pricing">
                <a>Pricing </a>
              </Link>
            </li>
            <li>Product</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </nav>
        <button
          className={menuOpen ? styles.mobileNavOpen : styles.mobileNav}
          onClick={() => setMenuOpen((state) => !state)}
          aria-controls="primary-navigation"
          aria-label="Menu"
          aria-expanded={menuOpen ? "true" : "false"}
        ></button>
        <button className={styles.button}>Get Started</button>
      </div>
    </header>
  );
}
