import styles from '../styles/components/Profile.module.css';


export function Profile(){

    return(

        <div className={ styles.profileContainer}>
            <img src="https://github.com/FelipeLee22.png" alt="Foto do perfil" />
            <div>
                <strong>Felipe Sales Borges</strong>
                
                <p>
                    <img src="icons/level.svg" alt=" Icone level up" />
                    Level 1
                </p>
            </div>
            
        </div>


    );
}