import '../styles/globals.scss';
import * as gtag from '../lib/gtag';
import Analytics from '../components/Analytics';
import { Layout } from '../components';
import { useEffect } from 'react';
import { Roboto, Lobster } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lobster'
});

//export const metadata = {
//  title: 'Acme Dashboard',
//  description: 'The official Next.js Course Dashboard, built with App Router.',
//};

export async function generateMetadata() {
  return {
    title: "que quero um titleeee"
  } 
}

function MyApp({ Component, pageProps }) {
  console.log("PAGEPROPS >>>>", pageProps)
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
    <main className={`${roboto.className} ${lobster.variable}`}>
      <Layout >
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </main>
  )
}

export default MyApp
