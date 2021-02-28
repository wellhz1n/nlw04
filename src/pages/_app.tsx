import "../styles/global.css";
import { ChallengesProvider } from '../contexts/ChallengeContext';
import { CountDownContextProvider } from "../contexts/CountDownContext";
function MyApp({ Component, pageProps }) {


  return <Component  {...pageProps} />
}

export default MyApp
