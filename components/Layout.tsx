import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/layout.module.scss";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
