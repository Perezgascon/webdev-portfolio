import React from 'react'
import styles from './Separator.module.css'

export default function Separator() {
  return (
    <div className={styles.separatorContainer}>
      <span className={`${styles.baseSeparator} ${styles.additionalSeparator1}`}>.</span>
      <span className={`${styles.baseSeparator} ${styles.additionalSeparator2}`}>.</span>
      <span className={`${styles.baseSeparator} ${styles.additionalSeparator3}`}>.</span>
    </div>
  )
}
