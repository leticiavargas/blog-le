import React from "react";
import styles from './styles.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      Footer ....
      <nav className={styles.social}>
        <ul>
          <li>
            <a href='#' target="_blank" title='Venha me visitar no instagram'>
              instagram
            </a>
          </li>
          <li>
            <a href='#' target="_blank" title='Já conhece meu github?'>
              github
            </a>
          </li>
          <li>
            <a href='#' target="_blank" title='Meu perfil profissional no linkedin.'>
              linkedin
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export { Footer }