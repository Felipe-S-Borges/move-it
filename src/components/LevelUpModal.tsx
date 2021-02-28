import { useContext } from 'react';
import { ChallengesContext } from '../contesxts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal(){

    const {level, closeLevelModal } = useContext(ChallengesContext)
    return(

        <div className={styles.overlay} > 
            <div className={styles.container} > 
            
            <header> {level} </header>
            <strong>Parabéns </strong>
            <p>você chegou a um novo nível</p>
            <button 
            onClick={closeLevelModal}
            >
                <img src="./icons/close.svg" alt="Botão de fechar"/>
            </button>


            
            </div>
        </div>

    );
}