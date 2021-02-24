import '../style/global.css';

import { ChallengesContext } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider>
    <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp
