import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <a href='https://www.facebook.com/adolfo.perezgascon/'>
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
            <a href='https://twitter.com/?lang=en'>
                <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
            </a>
            <a href='https://www.linkedin.com/in/adolfo-perez-gascon-77311714/'>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
        </div >
    )
}
