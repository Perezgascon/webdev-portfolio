import React from 'react'
import './AboutMe.module.css'
import { TypeAnimation } from 'react-type-animation';


export default function AboutMe() {
  return (
    <div id="About">
      <h1>Adolfo Perez-Gascon</h1>
      <h1>Front End Developer</h1>
      <h1>SEO Expert</h1>

      <h1>
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
