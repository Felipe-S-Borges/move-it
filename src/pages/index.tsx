import React from 'react';
import { CompletedChalenges } from '../components/CompletedChalenges';
import { CountDown } from '../components/CountDown';
import {Experience} from '../components/Experience';
import { Profile } from '../components/Profile';
import {Desafio} from '../components/Desafio';
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import { CountDownProvider } from '../contesxts/CountDownContext';
import { GetServerSideProps} from 'next';
import { ChallengesProvider } from '../contesxts/ChallengesContext';

interface HomeProps{
  level: number;
  currentExperience:number;
  completedChallenges:number;
}

export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider 
        level={props.level}
        currentExperience={props.currentExperience}
        completedChallenges={props.completedChallenges}
        
    >
        <div className={styles.container}>
            <Head>
              
              <title>Início | Move.it</title>
              
            </Head>
            <Experience />
            <CountDownProvider>
            <section>
              <div>

                <Profile />
                <CompletedChalenges />
                <CountDown />
                
              </div>
              <div>
                <Desafio />

              </div>
            </section>
            </CountDownProvider>
        </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log(ctx.req.cookies)
    const { level, currentExperience, completedChallenges} = ctx.req.cookies;
    

  return {
    props: {

      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges)

    }
  }
}
