
import '../styles/global.css';
import {ChallengesProvider} from '../contesxts/ChallengesContext';
import {CountDownProvider} from '../contesxts/CountDownContext';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
