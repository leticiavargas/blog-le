import '../styles/globals.scss';
import { Layout } from '../components';
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


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} ${lobster.variable}`}>
        {children}
      </body>
    </html>
  )
}