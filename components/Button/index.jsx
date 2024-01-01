import React from 'react';

import styles from './styles.module.scss';

const Button = ({ icon, children, ...otherProps}) => {
  return ( 
    <button className={styles.button} {...otherProps}>
      {Boolean(icon) && "icone"}
      {Boolean(children) && <span className={styles.label}>{children}</span>}
    </button>
   );
}
 
export { Button };
