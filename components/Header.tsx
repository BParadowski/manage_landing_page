import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a aria-label="Home page">
            <Image
              src="/images/logo.svg"
              alt="Manage logo"
              width={110}
              height={18}
            />
          </a>
        </Link>
        <nav aria-label="Primary">
          <ul role="list">
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
        <button>Get Started</button>
      </div>
    </header>
  );
}
