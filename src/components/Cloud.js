import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { useParallax } from "react-scroll-parallax";

import styles from './Cloud.module.css'

export default function Cloud() {
  const { ref, styles: parallaxStyles } = useParallax({
    x: [-500, 500],
  });

  const combinedStyles = {
    ...parallaxStyles.styles,
  };


  return (
    <div ref={ref}>
      <FontAwesomeIcon icon={faCloud} className={styles.cloud} style={combinedStyles} />
    </div>
  )
}
