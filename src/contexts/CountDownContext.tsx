import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";


//#region  TypeScript Intefaces

interface CountDownContextData {
    minutos: number;
    segundos: number;
    hasFinished: boolean;
    active: boolean;
    startCountDown: () => void;
    resetarCountDown: () => void;
}
interface CountDownContextProvidertData {
    children: ReactNode;
}
//#endregion
let countDownTimeout: NodeJS.Timeout;

export const CountDownContext = createContext({} as CountDownContextData)
export function CountDownContextProvider({ children }: CountDownContextProvidertData) {

    const { startNewChallenge } = useContext(ChallengesContext);
    let tempo = 0.05;
    const [time, setTime] = useState(tempo * 60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutos = Math.floor(time / 60);
    const segundos = time % 60;
    function startCountDown() {
        setActive(!active);
    }
    function resetarCountDown() {
        clearTimeout(countDownTimeout);
        setTime(tempo * 60);
        setActive(false);
        setHasFinished(false);
    }
    useEffect(() => {

        if (active && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (active && time == 0) {
            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }

    }, [active, time]);
    return (
        <CountDownContext.Provider
            value={{
                minutos,
                segundos,
                hasFinished,
                active,
                startCountDown,
                resetarCountDown
            }}>
            {children}
        </CountDownContext.Provider>
    )
}