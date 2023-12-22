import React from 'react'
import styles from './Card.module.css'

export default function Cards({ title, imagePath, description, language1, language2, language3 }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img className={styles.img} src={imagePath} alt='' />
      <p>{description}</p>
      <hr className={styles.horizontalRule}></hr>
      <div className={styles.flexContainer}>
        <div>{language1}</div>
        <div>{language2}</div>
        <div>{language3}</div>
      </div>
    </div>
  )
}
