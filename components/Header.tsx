import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../public/images/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a aria-label="Home page" className={styles.logo}>
            <Image src={logo} alt="Manage logo" />
          </a>
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          <ul role="list" className={styles.links}>
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
        <button className={styles.button}>Get Started</button>
      </div>
    </header>
  );
}
