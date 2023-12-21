import React from 'react'
import styles from './Separator.module.css'

export default function Separator() {
  return (
    <div className={styles.separatorContainer}>
        <span className={styles.separator1}>.</span>
        <span className={styles.separator2}>.</span>
        <span className={styles.separator3}>.</span>
    </div>
  )
}
