import styles from '../styles/components/experience.module.css';

export function Experience(){

    return(
        <header className={ styles.experienceBar }>
            <span>0xp</span>
            <div>
                <div style={{width:'50%'}} />
                <span className={ styles.currentExperience} style={{ left: '50%' }}> 300xp </span>
        
            </div>
            <span> 600xp</span>
        </header>
    );
}