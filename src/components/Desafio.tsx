import styles from '../styles/components/Desafio.module.css';

export function Desafio(){
    const hasActiveChalenge = true;

    return(
        <div className={styles.desafioContainer}>
        {hasActiveChalenge ? (

            <div className={styles.desafioActivated}> 
                <header> Ganhe 400 xp</header>
                <main>
                    <img src="icons/body.svg" />
                    <strong>Novo desafio</strong>
                    <p>Levante e faça uma caminhada de três minutos</p>
                </main>
                <footer>
                    <button 
                        type="button" 
                        className={styles.desafioFalhei}>
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