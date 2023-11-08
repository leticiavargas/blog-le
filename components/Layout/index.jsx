import React from 'react';
import Head from "next/head";
import { Sidebar, Header } from '../index';
import styles from './styles.module.scss';

const Layout = ({children}) => {

  const title = 'Letícia Vargas';
  const description = 'Welcome to my page.'

  return ( 
    <>
    <Head>
      <title>{title}</title>
      <meta name={"description"} title={"description"} content={description}/>
      <meta name={"og:title"} title={"og:title"} content={title}/>
      <meta name={"og:description"} title={"og:description"} content={title}/>
    </Head>
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </main>
  </>
  );
}
 
export { Layout } ;