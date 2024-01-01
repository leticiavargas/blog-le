import styles from './styles.module.scss';

const Tag = ({ children }) => {
  return(
    <p className={styles.tag}>
      {children}
    </p>
  )
}

export { Tag }