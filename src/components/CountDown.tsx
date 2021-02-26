import React, { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';

// import { Container } from './styles';

const CountDown: React.FC = () => {
    const [time, setTime] = useState(1 * 60);
    const [active, setActive] = useState(false);


    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    const [minuteLeft, minuteRigth] = String(minutos).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(segundos).padStart(2, '0').split('');

    function startCountDown() {
        setActive(!active);
    }
    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        if (!active || time == 0) {
            setActive(false);
            setTime(1 * 60);
        }
    }, [active, time]);
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
            <button type="button" onClick={startCountDown} className={[styles.countDownButton, active ? styles.countDownButtonCancel : null].join(' ')}>{active ? "Cancelar ciclo" : "Iniciar um ciclo"}</button>
        </div>
    );
}

export default CountDown;