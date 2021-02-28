import React, { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';
//#region  TypeScript Intefaces
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextValues {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    ExpToNextLevel: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}


interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    challengesCompleted: number;
    currentExperience: number;
}
//#endregion

export const ChallengesContext = createContext({} as ChallengesContextValues);

export function ChallengesProvider({
    children,
    ...rest
}: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setcurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const ExpToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);
    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);
    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }
    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
        if (Notification.permission === 'granted') {
            new Audio('/notification.mp3').play();
            new Notification("Novo desafio 🎉", {
                body: `Valendo ${challenge.amount} xp`,
                icon: '/favicon.png',
                silent: true
            });

        }
    }
    function resetChallenge() {
        setActiveChallenge(null);
    }
    function completeChallenge() {
        if (!activeChallenge)
            return;

        let finalExp = activeChallenge.amount + currentExperience;
        if (finalExp >= ExpToNextLevel) {
            finalExp = finalExp - ExpToNextLevel;
            levelUp();
        }
        setcurrentExperience(finalExp);
        setChallengesCompleted(challengesCompleted + 1);
        setActiveChallenge(null);
    }
    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }
    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                ExpToNextLevel,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal
            }}>
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )
}