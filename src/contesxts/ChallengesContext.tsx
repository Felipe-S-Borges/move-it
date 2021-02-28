import {createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';

interface challenge{

    type: 'body' | 'eye';
    description: string;
    amount: number;

}

interface ChallengesContextData{
    level: number;
    currentExperience:number;
    experienceToNextLevel:number;
    completedChallenges: number;
    activeChallenge: challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    challengeCompleted: () => void;

}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [completedChallenges, setCompletedChallenges] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4,2);

    useEffect(() =>{

        Notification.requestPermission()

    },[])


    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge() {

        
    const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallengeIndex];
   

    setActiveChallenge(challenge);

    new Audio('notification.mp3').play();

    if(Notification.permission ==='granted'){

        new Notification('Novo desafio valendo ',{body: `Valendo ${challenge.amount}xp`});

    }
   
    }

    function resetChallenge() {

        setActiveChallenge(null);
    }

    function challengeCompleted(){

        if(!activeChallenge){

            return;
        }

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){

            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();

            setCurrentExperience(finalExperience);
            setActiveChallenge(null);
            setCompletedChallenges(completedChallenges +1);
        }else{

            setCurrentExperience(finalExperience);
            setActiveChallenge(null);
            setCompletedChallenges(completedChallenges +1);

        }

    }

    return (

        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                completedChallenges,
                activeChallenge,
                levelUp,
                startNewChallenge,
                resetChallenge,
                challengeCompleted
                
                }}>
        {children}
        </ChallengesContext.Provider>
    )

}
