import React from 'react'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Socials from '../components/Socials'
import emailjs from '@emailjs/browser'

export default function contact({showMenu, setShowMenu}) {

  const form = React.createRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4wtt39w", 'template_5lirznc', form.current, 'user_zD8MRwbDxPGK4VfLB6U7g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className={styles.container}>
      <Head>
				<title>Azeezah | Contact</title>
			</Head>
      <Socials showMenu={showMenu} setShowMenu={setShowMenu} className={styles.socials} />
      <h1>Contact</h1>
      <p>I am just a click away, let&apos;s create magic</p>
      <p>I am available for full time roles, freelance projects and design contracts</p>
      <form className={styles.form} ref={form} onSubmit={sendEmail} >
        <label htmlFor="name">Name</label>
        <input type="text" required name="from_name" id="name" placeholder='Your Name' />
        <label htmlFor="email">Email</label>
        <input type="email" required name="from_email" id="email" placeholder='Your Email' />
        <label htmlFor="message">Message</label>
        <textarea name="message" required id="message" cols="30" rows="10" placeholder='Your Message' />
        <button type='submit' style={{cursor: "pointer"}}>Submit</button>
      </form>
    </div>
  )
}
