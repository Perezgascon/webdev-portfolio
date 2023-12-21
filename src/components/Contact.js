import React from 'react'
import Hero from './Hero'
import Button from './Button'

export default function Contact() {
  return (
    <div id="Contact">
      <Hero title="Send Me a Message"
      element1={<input type='text' placeholder='Name'></input>}
      element2={<input type='text' placeholder='Last Name'></input>}
      element3={<input type='text' placeholder='email'></input>}
      element4={<input type='text' placeholder='message'></input>}
      element5={<Button text="Send"/>}
      />

    </div>
  )
}
