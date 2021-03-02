import CompletedChallenges from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "./../components/Profile";
import styles from "./../styles/pages/Home.module.css";
import Countdown from "./../components/Countdown";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
      <section>
        <div className={styles.container}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div className={styles.container}>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}
