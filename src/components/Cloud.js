import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

import styles from './Cloud.module.css'

export default function Cloud() {
  return (
    <div >
        <FontAwesomeIcon className={styles.cloud} icon={faCloud} />
    </div>
  )
}
