import React from 'react';
import Head from "next/head";
import { Footer, Header, Sidebar } from '../index';
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
    <section className={styles.body}>
      <Header />
      <section className={styles.container}>
        <article className={styles.content}>
          {children}
        </article>
        <Sidebar />
      </section>
      <Footer />
    </section>
  </>
  );
}
 
export { Layout } ;