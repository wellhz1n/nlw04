import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import style from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
    const { currentExperience, ExpToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round((currentExperience * 100) / ExpToNextLevel)
    return (
        <div className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
                <span className={style.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{ExpToNextLevel} xp</span>
        </div>
    );
}