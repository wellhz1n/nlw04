import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';
// import { Container } from './styles';

const LevelUpModal: React.FC = () => {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>

            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo Level</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default LevelUpModal;