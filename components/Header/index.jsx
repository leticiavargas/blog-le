import React from "react";
import styles from './styles.module.scss';
import Image from "next/image";

import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image 
        src="/images/logo.svg" 
        width={400}
        height={200}
        alt="Logotipo da marca Letícia Vargas " 
      />
      <Navigation />
    </header>
  )
}

export { Header }