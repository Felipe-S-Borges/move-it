import {createContext, useState, ReactNode} from 'react';



interface desafioContextData{
    level: number;
    currentExperience:number;
    completedChallenges: number;
    levelUp: () => void;
    startNewChallenge: () => void;

}

interface desafioProviderProps {
    children: ReactNode;
}

export const desafioContext = createContext({} as desafioContextData);


export function desafioProvider({children}: desafioProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [completedChallenges, setCompletedChallenges] = useState(0);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge{

        
    }

    return (

        <desafioContext.Provider 
            value={{
                level,
                currentExperience,
                completedChallenges,
                levelUp,
                startNewChallenge
                }}>
        {children}
        </desafioContext.Provider>
    )

}
