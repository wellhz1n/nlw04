import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';
// import { Container } from './styles';

const Profile: React.FC = () => {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/wellhz1n.png" alt="" />
            <div>
                <strong>Wellington Hellstrom</strong>
                <p>
                    <img src="icons/level.svg" />
                    Level {level}</p>
            </div>
        </div>
    );
}

export default Profile;