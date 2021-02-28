import Head from 'next/head';
import { GetServerSideProps } from 'next';
import style from '../styles/pages/Home.module.css';

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ChallengeBox from '../components/ChallengeBox';
import { ChallengesProvider } from '../contexts/ChallengeContext';
import { CountDownContextProvider } from '../contexts/CountDownContext';

interface HomeProps {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

export default function Home(props) {
  console.log(props);
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <div className={style.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountDownContextProvider>
          <section>
            {/* informações */}
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            {/* Desafio */}
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownContextProvider>
      </div>
    </ChallengesProvider>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}