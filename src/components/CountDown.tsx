import { useState, useEffect, useContext } from 'react';
import { desafioContext } from '../contesxts/desafioContext';

import styles from '../styles/components/CountDown.module.css';



export function CountDown(){
    const {startNewChallenge} = useContext(desafioContext);
    const [time,setTime] = useState(0.1 * 60);
    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    const [minEsquerda, minDireita] = String(minutos).padStart(2,'0').split('');
    const [segEsquerda, segDireita] = String(segundos).padStart(2,'0').split('');
    const [isActive, setIsActive] = useState(false);
    const [hasFinished,setHasFinished] = useState(false);
    
    let countdownTimeout: NodeJS.Timeout;

    function startCountDown(){
        
        setIsActive(true);
    }
    function resetCountDown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);

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
        <div>
            <div className={ styles.countDownContainer}>

                <div>
                    <span> {minEsquerda} </span>
                    <span> {minDireita} </span>
                </div>
                <span>:</span>
                <div>
                    <span> {segEsquerda} </span>
                    <span> {segDireita} </span>
                </div>
                

            </div>

            {hasFinished?(

                <button 
                disabled
                className={styles.countDownButton} 
                >
                Ciclo encerrado
                </button>

            ):(

                <>
                {isActive? (
                <button 
                type="button" 
                className={ `${styles.countDownButton} ${styles.countDownButtonActive}` }
                onClick={resetCountDown}
                >
                Abortar
                </button>
            ):(

                <button 
                type="button" 
                className={ styles.countDownButton}
                onClick={startCountDown}
                >
                Iniciar um ciclo   
                </button>
            )}
                
                
                
                </>
            )}


            
            


        </div>
    );
}