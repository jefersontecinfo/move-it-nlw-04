import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from './../styles/components/Profile.module.css';

export default function Profile() {

    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jefersontecinfo.png" alt="Profile" />
            <div>
            <strong>
                Jeferson Araujo
            </strong>
            
            <p><img src="icons/level.svg" alt="level" />Level {level}</p>
            </div>
        </div>
    )
}