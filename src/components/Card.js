import React from 'react'
import styles from './Card.module.css'
import './Card.module.css'
import IconButton from './IconButton'

export default function Cards( { title, imagePath, description, icon1, icon2, icon3 }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img src={imagePath} alt='' />
      <p>{description}</p>
      <span>{icon1}</span>
      <span>{icon2}</span>
      <span>{icon3}</span>
    </div>
  )
}
 