import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

// import { Container } from './styles';
const CountDown: React.FC = () => {
    const {
        minutos,
        segundos,
        hasFinished,
        active,
        startCountDown,
        resetarCountDown
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRigth] = String(minutos).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(segundos).padStart(2, '0').split('');


    return (
        <div>

            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    className={styles.countDownButton}>Ciclo completo</button>
            ) : (
                <>
                    {
                        !active ? (
                            <button type="button" onClick={startCountDown} className={styles.countDownButton}>Iniciar um ciclo</button>

                        ) : (

                            <button type="button" onClick={resetarCountDown} className={[styles.countDownButton, styles.countDownButtonCancel].join(' ')}>Abandonar ciclo</button>
                        )
                    }
                </>
            )}

        </div>
    );
}

export default CountDown;