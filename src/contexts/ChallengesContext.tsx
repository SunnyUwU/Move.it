import { createContext, ReactNode, useState } from 'react';

interface  ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted:number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengeCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }
    
    function startNewChallenge() {
        console.log('New Challenge')
    }

    return (
        <ChallengesContext.Provider 
        value={{ 
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenge 
            }}
            >
            {children}
        </ChallengesContext.Provider>
    );
}