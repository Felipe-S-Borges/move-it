import {createContext, useState, ReactNode, useEffect} from 'react';
import cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';



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
    closeLevelModal: () => void;

}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience:number;
    completedChallenges:number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    
    console.log(rest);
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState( rest.currentExperience  ?? 0);
    const [completedChallenges, setCompletedChallenges] = useState( rest.completedChallenges ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelModalOpen,setIsLevelModalOpen] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 2,2);

    useEffect(() =>{

        Notification.requestPermission()

    },[])

    useEffect(() => {

        cookies.set('level', String(level));
        cookies.set('currentExperience', String(currentExperience));
        cookies.set('completedChallenges', String(completedChallenges));

    },[level, currentExperience, completedChallenges ]);


    function levelUp(){
        setLevel(level + 1);
        setIsLevelModalOpen(true);
    }

    function closeLevelModal(){
        setIsLevelModalOpen(false);
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
                challengeCompleted,
                closeLevelModal
                
                }}>
        {children}
        {isLevelModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )

}
