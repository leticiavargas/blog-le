import styles from './styles.module.scss';


const Sidebar = ({ author }) => {
  return(
    <aside className={styles.container}>
      <div className={styles.profile}>
        
        <div>
          <nav className={styles.links}>
            <ul>
              <li><a href='#' target="_blank" title='Já conhece meu blog?'>Blog</a></li>
              <li><a href='#' target="_blank" title='Sobre mim' >Sobre</a></li>
            </ul>
          </nav>
          
        </div>
      </div>
    </aside>
  )
}

export { Sidebar }