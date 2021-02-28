import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

// import { Container } from './styles';

const ChallengeBox: React.FC = () => {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetarCountDown } = useContext(CountDownContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {
                activeChallenge ? (
                    <div className={styles.challengeActive}>
                        <header> Ganhe {activeChallenge.amount} xp</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button
                                type="button"
                                className={styles.challegendFailedButton}
                                onClick={() => {
                                    resetChallenge();
                                    resetarCountDown();
                                }
                                }
                            >Falhei</button>
                            <button
                                type="button"
                                className={styles.challegendSucceededButton}
                                onClick={() => {
                                    completeChallenge();
                                    resetarCountDown();
                                }}
                            >Completei</button>
                        </footer>
                    </div>
                ) : (

                    <div className={styles.challengeNotActive}>
                        <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="" />
                             Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export default ChallengeBox;