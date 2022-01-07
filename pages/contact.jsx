import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Socials from '../components/Socials'
import emailjs from '@emailjs/browser'
import Success from '../icons/Success'
import Error from '../icons/Error'
import Close from '../components/Close'

export default function Contact({showMenu, setShowMenu}) {

  const form = React.createRef();

  const [mail, setMail] = useState({
    isSending: false,
    status: ""
  })

  const sendEmail = (e) => {
    e.preventDefault();

    setMail({
      isSending: true,
      status: "pending"
    })
    emailjs.sendForm("service_2peqeop", 'template_fjuicah', form.current, 'user_FrTRDFLL3CWchBVevzkHB')
      .then((result) => {
        setMail({
          isSending: true,
          status: "success"
        })
          // console.log(result.text);
      }, (error) => {
        setMail({
          isSending: true,
          status: "error"
        })
          console.log(error.text);
      });
  };

  useEffect(() => {
		setShowMenu(false)
	}, [])

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
      {mail.isSending && 
        <div className={`${styles.mailModal} mailModal`} onClick={(e) => {
          e.target.classList.contains("mailModal") && mail.status !== "pending" && setMail({isSending: false, status: "pending"})
        }}>
          <div className={styles.modalContent}>
            {mail.status === "pending" ? <p>Sending Your Message...</p> :
            <>
              <Close onClick={() => {setMail({isSending: false, status: "pending"})}} className={styles.close} />
              {mail.status === "success" && <Success className={styles.success} />}
              {mail.status === "error" && <Error className={styles.error} />}
              {mail.status === "success" && <p>Message Sent Successfully</p>}
              {mail.status === "error" && <p>There was an error sending the message. You can contact me through my social media accounts or try again after some time.</p>}
            </>
            }
          </div>         
        </div>}
    </div>
  )
}
