import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import Hero from './Hero'

import styles from './Skills.module.css'




// import Hero from './Hero'

export default function Skills() {
  return (
    <div id="Skills">
      <Hero className={styles.skillsContainer}
      title="My ToolBox"
      element1={<FontAwesomeIcon icon={faHtml5} className={styles.icon} />}
      element2={<FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />}
      element3={<FontAwesomeIcon icon={faJs} className={styles.icon} />}
      element4={<FontAwesomeIcon icon={faReact} className={styles.icon} />}
      element5={<FontAwesomeIcon icon={faNode} className={styles.icon} />}
      element6={<FontAwesomeIcon icon={faBootstrap} className={styles.icon} />} 
      />
        
    </div>
  )
}
