import React from 'react'
import Button from './Button'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div id="Contact" className={styles.contactForm}>
      <h2>Send Me a Message!</h2>
      <div className={styles.inputContainer}>
        <input className={styles.inputField} type='text' placeholder='Name'></input>

        <input className={styles.inputField} type='text' placeholder='Last Name'></input>

        <input className={styles.inputField} type='text' placeholder='email'></input>

        <textarea className={styles.msgField} name="message" rows="10" cols="55" placeholder='Your Message' ></textarea>
      </div>
      <div className={styles.buttonContainer}><Button className={styles.buttonContact} text={"Send"} /></div>

    </div>
  )
}
