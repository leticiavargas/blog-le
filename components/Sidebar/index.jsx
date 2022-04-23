import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ author }) => {
  return(
    <aside className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src="https://www.organizesuavida.com.br/wp-content/uploads/2017/09/gatinho-shrek.jpg" alt='avatar da Letícia Vargas' />
        </div>
        <h3>{author}</h3>
        <hr className={styles.divider} />
        <div>
          <nav className={styles.links}>
            <ul>
              <li><a href='#' target="_blank" title='Já conhece meu blog?'>Blog</a></li>
              <li><a href='#' target="_blank" title='Sobre mim' >Sobre</a></li>
            </ul>
          </nav>
          <nav className={styles.social}>
            <ul>
              <li>
                <a href='#' target="_blank" title='Venha me visitar no instagram'>
                  <FontAwesomeIcon icon={['fab', 'instagram']} /> 
                </a>
              </li>
              <li>
                <a href='#' target="_blank" title='Já conhece meu github?'>
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </li>
              <li>
                <a href='#' target="_blank" title='Meu perfil profissional no linkedin.'>
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  )
}

export { Sidebar }