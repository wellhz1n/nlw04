import React from 'react';
import styles from '../styles/components/Profile.module.css';
// import { Container } from './styles';

const Profile: React.FC = () => {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/wellhz1n.png" alt="" />
            <div>
                <strong>Wellington Hellstrom</strong>
                <p>
                    <img src="icons/level.svg"/>
                    Level 1</p>
            </div>
        </div>
    );
}

export default Profile;