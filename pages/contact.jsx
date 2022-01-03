import React from 'react'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Socials from '../components/Socials'

export default function contact({showMenu, setShowMenu}) {
  return (
    <div className={styles.container}>
      <Head>
				<title>Azeezah | Contact</title>
			</Head>
      <Socials showMenu={showMenu} setShowMenu={setShowMenu} className={styles.socials} />
      <h1>Contact</h1>
      <p>I am just a click away, let&apos;s create magic</p>
      <p>I am available for full time roles, freelance projects and design contracts</p>
      <form className={styles.form} no target="_blank" action="https://formsubmit.co/c7024c777401163aad80519933927c5f" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder='Your Name' />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder='Your Email' />
        <input type="hidden" name="_subject" value="New email from portfolio" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
