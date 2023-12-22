import React from 'react'
import Hero from './Hero'
import Card from './Card'
import mocEcommerce from '../assets/moc-ecommerce.png'

import styles from './Project.module.css'



export default function Projects() {


  return (
    <div id="Projects">
      <Hero title="My Projects" 
      element1={<Card 
        title="Project A" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        language1={<span className={styles.languageIcon}>HTML</span>}
        language2={<span className={styles.languageIcon}>CSS</span>}
        language3={<span className={styles.languageIcon}>JS</span>} 
      
        />}
      element2={<Card 
        title="Project B" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        language1={<span className={styles.languageIcon}>HTML</span>}
        language2={<span className={styles.languageIcon}>CSS</span>}
        language3={<span className={styles.languageIcon}>JS</span>} 
        />}
      element3={<Card 
        title="Project C" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        language1={<span className={styles.languageIcon}>HTML</span>}
        language3={<span className={styles.languageIcon}>JS</span>} 
        />}
      element4={<Card 
        title="Project D" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        language1={<span className={styles.languageIcon}>HTML</span>}
        language2={<span className={styles.languageIcon}>CSS</span>}
        language3={<span className={styles.languageIcon}>JS</span>} 
        />}
      element5={<Card 
        title="Project E" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
        language1={<span className={styles.languageIcon}>HTML</span>}
        language2={<span className={styles.languageIcon}>CSS</span>}
        language3={<span className={styles.languageIcon}>JS</span>} 
        />}
      element6={<Card 
        title="Project F" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
        language2={<span className={styles.languageIcon}>CSS</span>}
        language3={<span className={styles.languageIcon}>JS</span>} 
        />}
      />
    </div>
  )
}
