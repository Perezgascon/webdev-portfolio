import React from 'react'
import styles from './Hero2.module.css'

export default function Hero2( { title, element1, element2, element3, element4, element5, element6 }) {
    return (
        <div className={styles.hero2}>
            <h2>{title}</h2>
            <div className={styles.hero2Section}>
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
