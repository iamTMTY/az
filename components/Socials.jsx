import React from 'react'
import styles from '../styles/Socials.module.css'
import Menu from './Menu'

const Socials = ({className, showMenu, setShowMenu}) => {

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={`${styles.strip} ${className}`}>
      <Menu onClick={toggleMenu} className={styles.menu} />
      <div className={styles.socials}>
        <a href="https://www.behance.net/bukolasalaf6fb">
          <img src="/assets/icons/behance.svg" alt="behance" className={styles.socialIcons} />
        </a>
        <a href="https://linkedin.com/in/bukola-salawu-a1470a177">
          <img src="/assets/icons/linkedin.svg" alt="linkedin" className={styles.socialIcons} />
        </a>
        <a href="https://instagram.com/_bukollami_?utm_medium=copy_link">
          <img src="/assets/icons/instagram.svg" alt="instagram" className={styles.socialIcons} />
        </a>
        <a href="https://mobile.twitter.com/BukolaAzeezah">
          <img src="/assets/icons/twitter.svg" alt="twitter" className={styles.socialIcons} />
        </a>
      </div>
      <div className={styles.filler}></div>
    </div>
  )
}

export default Socials
