import { useState, useEffect } from 'react';

import styles from '../styles/components/CountDown.module.css';

export function CountDown(){

    const [time,setTime] = useState(25 * 60);
    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    const [minEsquerda, minDireita] = String(minutos).padStart(2,'0').split('');
    const [segEsquerda, segDireita] = String(segundos).padStart(2,'0').split('');
    const [active, setActive] = useState(false);

    function startCountDown(){

        setActive(true);
    }

    useEffect(() =>{
        if(active && time > 0){

            setTimeout(() =>{
                setTime(time -1);
            },1000)
        }
    }, [active,time]);

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

            <button 
            type="button" 
            className={ styles.countDownButton}
            onClick={startCountDown}
            >
            Iniciar um ciclo
            </button>


        </div>
    );
}