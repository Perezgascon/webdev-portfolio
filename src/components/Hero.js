import React from 'react'
import styles from './Hero.module.css'

export default function Hero( { title, element1, element2, element3, element4, element5, element6 }) {
    return (
        <div className={styles.hero}>
            <h2>{title}</h2>
            <div className={styles.heroSection}>
                {element1}
                {element2}
                {element3}
                {element4}
                {element5}
                {element6}             
            </div>
        </div>
    )
}
