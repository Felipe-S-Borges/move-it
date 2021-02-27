import {useContext } from 'react'
import {ChallengesContext} from '../contesxts/ChallengesContext'
import styles from '../styles/components/CompletedChalenges.module.css';

export function CompletedChalenges(){
    const {completedChallenges} = useContext(ChallengesContext)
    return (

        <div className={styles.completedChalengesContainer} >
            <span> Desafios completos </span>
            <span> {completedChallenges} </span>
        </div>

    );
}