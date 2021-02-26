import style from '../styles/pages/Home.module.css';

import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import Head from 'next/head';
export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        {/* informações */}
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        {/* Desafio */}
        <div></div>
      </section>
    </div>
  )
}
