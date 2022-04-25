import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

const Button = ({ icon, children, ...otherProps}) => {
  return ( 
    <button className={styles.button} {...otherProps}>
      {Boolean(icon) && <FontAwesomeIcon icon={icon} />}
      {Boolean(children) && <span className={styles.label}>{children}</span>}
    </button>
   );
}
 
export { Button };
