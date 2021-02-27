import { useContext } from 'react';
import {ChallengesContext} from '../contesxts/ChallengesContext'
import styles from '../styles/components/Desafio.module.css';

export function Desafio(){
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);
    
    console.log(activeChallenge);
    
    return(
        <div className={styles.desafioContainer}>
        {activeChallenge ? (

            <div className={styles.desafioActivated}> 
                <header> Ganhe {activeChallenge.amount} xp</header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`} />
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>
                <footer>
                    <button 
                        type="button" 
                        className={styles.desafioFalhei}
                        onClick={resetChallenge}
                        >
                        
                        Falhei
                    </button>
                    <button 
                        type="button" 
                        className={styles.desafioSucceded}>
                        Completei
                    </button>
                </footer>
            
            </div>

        ):(

            
            <div className={styles.desafioNotActivaded} >
                <strong>Inicie um ciclo para receber desafios</strong>
                <p>
                    <img src="icons/level-up.svg " alt="Level up" />
                    Avance de nível completando os desafios
                </p>
            </div>
            
        
        )}
        </div>

        

    );
}