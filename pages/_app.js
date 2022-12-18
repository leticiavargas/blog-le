import '../styles/globals.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import * as gtag from '../lib/gtag';
import Analytics from '../components/Analytics';
import { Layout } from '../components';
import { useEffect } from 'react';


library.add(faGithub, faInstagram, faLinkedin, faAngleLeft);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url, title) => {
      gtag.pageview(url, title)
    }

    if (pageProps.post) 
      handleRouteChange(pageProps.post.url, pageProps.post.title);
    else 
      handleRouteChange('/', 'home');
      
  }, [pageProps]);

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default MyApp
