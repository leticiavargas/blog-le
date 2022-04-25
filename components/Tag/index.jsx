import styles from './styles.module.scss';

const Tag = ({ children }) => {
  return(
    <div className={styles.tag}>
      {children}
    </div>
  )
}

export { Tag }