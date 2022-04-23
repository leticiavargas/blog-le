import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


library.add(faGithub, faInstagram, faLinkedin, faCoffee);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
