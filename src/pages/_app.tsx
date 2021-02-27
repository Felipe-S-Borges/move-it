
import '../styles/global.css';
import {desafioProvider} from '../contesxts/desafioContext';

function MyApp({ Component, pageProps }) {
  return (
  <desafioProvider>
  
      <Component {...pageProps} />
  
  </desafioProvider>
  )
}

export default MyApp
