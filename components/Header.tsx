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

        <nav aria-label="Primary" className={styles.nav} data-isOpen={menuOpen}>
          <ul
            role="list"
            className={styles.links}
            data-isOpen={menuOpen}
            id="primary-navigation"
          >
            <li>
              <Link href="/pricing">
                <a>Pricing </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Product </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About us </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Careers </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Community</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={styles["mobile-nav-button"]}
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
