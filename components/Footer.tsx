import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <Link href="/">
              <a>
                <Image src={logo} alt="Manage logo"></Image>
              </a>
            </Link>

            <ul role="list" aria-label="Social links">
              <li>
                <a href="#" aria-label="facebook"></a>
              </li>
              <li>
                <a href="#" aria-label="youtube"></a>
              </li>
              <li>
                <a href="#" aria-label="twitter"></a>
              </li>
              <li>
                <a href="#" aria-label="pinterest"></a>
              </li>
              <li>
                <a href="#" aria-label="instagram"></a>
              </li>
            </ul>
          </div>
          <div>
            <nav>
              <ul role="list">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <form action="">
              <input type="email" />
              <button type="button" className={styles.button}>
                Go
              </button>
              <p>Copyright 2020. All Rights Reserved</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
