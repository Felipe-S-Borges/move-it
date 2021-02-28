import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contesxts/ChallengesContext';
import { CountDownContext } from '../contesxts/CountDownContext';


import styles from '../styles/components/CountDown.module.css';



export function CountDown(){

    const{minutos,segundos, isActive, hasFinished, startCountDown, resetCountDown} = useContext(CountDownContext)

    const [minEsquerda, minDireita] = String(minutos).padStart(2,'0').split('');
    const [segEsquerda, segDireita] = String(segundos).padStart(2,'0').split('');
    
    
    

    

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