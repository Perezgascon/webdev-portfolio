import React from 'react'
import Hero from './Hero'
import Card from './Card'
import mocEcommerce from '../assets/moc-ecommerce.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons'

import styles from './Projects.module.css'


export default function Projects() {


  return (
    <div id="Projects">
      <Hero title="My Projects" 
      element1={<Card 
        title="Project A" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        icon1={<FontAwesomeIcon icon={faHtml5} className={styles.icon} />} 
        icon2={<FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />}
        icon3={<FontAwesomeIcon icon={faJs} className={styles.icon} />}
        />}
      element2={<Card 
        title="Project B" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        icon1={<FontAwesomeIcon icon={faHtml5} className={styles.icon} />} 
        icon2={<FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />}
        icon3={<FontAwesomeIcon icon={faJs} className={styles.icon} />}
        />}
      element3={<Card 
        title="Project C" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        icon1={<FontAwesomeIcon icon={faHtml5} className={styles.icon} />} 
        icon2={<FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />}
        icon3={<FontAwesomeIcon icon={faJs} className={styles.icon} />}
        />}
      element4={<Card 
        title="Project D" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
        icon1={<FontAwesomeIcon icon={faHtml5} className={styles.icon} />} 
        icon2={<FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />}
        icon3={<FontAwesomeIcon icon={faJs} className={styles.icon} />}
        />}
      element5={<Card 
        title="Project E" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
        icon1={<FontAwesomeIcon icon={faHtml5} className={styles.icon} />} 
        icon2={<FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />}
        icon3={<FontAwesomeIcon icon={faJs} className={styles.icon} />}
        />}
      element6={<Card 
        title="Project F" 
        imagePath={mocEcommerce} 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
        icon1={<FontAwesomeIcon icon={faHtml5} className={styles.icon} />} 
        icon2={<FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />}
        icon3={<FontAwesomeIcon icon={faJs} className={styles.icon} />}
        />}
      />
    </div>
  )
}
