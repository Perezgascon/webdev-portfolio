import React from 'react'
import Button from './Button'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div id="Contact" className={styles.contactForm}>
      <h2>Send Me a Message!</h2>
      <input className={styles.inputField} type='text' placeholder='Name'></input>
      <input className={styles.inputField} type='text' placeholder='Last Name'></input>
      <input className={styles.inputField} type='text' placeholder='email'></input>
      <textarea className={styles.inputField} name="message" rows="10" cols="55" placeholder='Your Message' ></textarea>
      <Button text={"Send"} />

    </div>
  )
}
