import React from 'react'
import styles from './IconButton.module.css'

export default function IconButton( { icon }) {
  return (
    <div>
        <button className={styles.IconButton}>
            {icon}
        </button>
    </div>
  )
}
