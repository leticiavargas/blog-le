import React from "react";
import styles from './styles.module.scss';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Blog</Link></li>
        <li><Link href="#">Sobre</Link></li>
      </ul>
    </nav>
  )
}

export { Navigation }
