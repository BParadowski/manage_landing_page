import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import illustration from "../public/images/illustration-intro.svg";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Manage</title>
        <meta name="description" content="Manage, landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div>
          <div className={styles.twoCollumns}>
            <div>
              <h1>Bring everyone together to build better products.</h1>
              <p>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
            </div>
            <div>
              <Image src={illustration} alt="" layout="responsive" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
