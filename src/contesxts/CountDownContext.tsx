import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { ChallengesContext } from './ChallengesContext';


interface countDownContextData{

    minutos: number;
    segundos:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountDown: () => void;
    resetCountDown: () => void;

}

interface countDownProviderProps{

    children: ReactNode;
    
}

export const CountDownContext = createContext({} as countDownContextData);

export function CountDownProvider({children}: countDownProviderProps) {

    const {startNewChallenge} = useContext(ChallengesContext);
    const [time,setTime] = useState(0.1 * 60);
    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    const [isActive, setIsActive] = useState(false);
    const [hasFinished,setHasFinished] = useState(false);

    let countdownTimeout: NodeJS.Timeout;


    function startCountDown(){
        
        setIsActive(true);
    }
    function resetCountDown(){
        clearTimeout(countdownTimeout);
        setHasFinished(false);
        setIsActive(false);
        setTime(0.1 * 60);

    }

    useEffect(() =>{
        if(isActive && time > 0){

           countdownTimeout = setTimeout(() =>{
                setTime(time -1);
            },1000)
        }else if(isActive && time === 0){

            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive,time]);

    return (

        <CountDownContext.Provider value={{
            minutos,
            segundos,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>

    );
}