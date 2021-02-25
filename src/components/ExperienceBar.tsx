import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../style/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, xpToNextLevel } = useContext(ChallengesContext);

    const pcentToNextLevel = Math.round((currentExperience * 100) / xpToNextLevel);

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${pcentToNextLevel}%` }} />

                <span className={styles.currentExperience} style={{ left: `${pcentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{xpToNextLevel} xp</span>
        </header>
    );
}