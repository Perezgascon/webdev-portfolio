import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import styles from './AboutMe.module.css'


export default function AboutMe() {
  return (
    <div id="About" className={styles.titlesContainer}>
      <h1>Adolfo Perez-Gascon</h1>
      <h1>Front End Developer</h1>
      <h1>SEO Expert</h1>

      <h1 className={styles.titles}>
      <TypeAnimation
        sequence={[
          'Entrepreneur',
          1000,
          'Cat Daddy',
          1000,
          'Marathoner',
          1000,
          'Science Buff',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ color: '#4C4C6D', display: 'inline-block' }}
        repeat={Infinity}
      /></h1>
    </div>
  )
}
