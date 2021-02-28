import { useContext } from 'react';
import { ChallengesContext } from '../contesxts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile(){

    const {level} = useContext(ChallengesContext);

    return(

        <div className={ styles.profileContainer}>
            <img src="https://github.com/FelipeLee22.png" alt="Foto do perfil" />
            <div>
                <strong>Felipe Sales Borges</strong>
                
                <p>
                    <img src="icons/level.svg" alt=" Icone level up" />
                    Level {level}
                </p>
            </div>
            
        </div>


    );
}