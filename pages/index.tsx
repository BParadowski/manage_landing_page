import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import illustration from "../public/images/illustration-intro.svg";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Manage</title>
        <meta name="description" content="Manage, landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className={styles.container}>
          <div className={styles.collumns}>
            <div>
              <h1>Bring everyone together to build better products.</h1>
              <p>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button>Get Started</button>
            </div>
            <div>
              <Image src={illustration} alt="" layout="responsive" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <div className={styles.collumns}>
            <div>
              <h2>What’s different about Manage?</h2>
              <p>
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
            <div>
              <ul role="list">
                <li>
                  <h3>Track company-wide progress</h3>
                  <p>
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </li>
                <li>
                  <h3>Advanced built-in reports</h3>
                  <p>
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </li>
                <li>
                  <h3>Everything you need in one place</h3>
                  <p>
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <button>Get Started</button>
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.container}>
          <p className={styles.cta__text}>
            Simplify how your team works today.
          </p>
          <button className={styles.cta__button}>Get Started</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
