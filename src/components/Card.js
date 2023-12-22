import React from 'react'
import styles from './Card.module.css'

export default function Cards( { title, imagePath, description, language1, language2, language3 }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img src={imagePath} alt='' />
      <p>{description}</p>
      {language1}
      {language2}
      {language3}
    </div>
  )
}
 