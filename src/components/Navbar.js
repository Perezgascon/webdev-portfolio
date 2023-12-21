import React, { useState } from 'react'

import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {  

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
      <nav className={styles.navbar}>
        <input
          type="checkbox"
          id="menu-toggle"
          className={styles.menuIcon}
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className={styles.hamburger}><FontAwesomeIcon icon={faBurger} /></label>
        <div className={`${styles.navbarMenu} ${menuOpen ? styles.open : ''}`}>
          <ul>
            <li><a href="#About">About Me</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>

  )
}
