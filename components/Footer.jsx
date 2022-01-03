import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer({ className }) {
	return (
		<footer className={className}>
			<div className={styles.contactInfo}>
				<a href="mailto:bukolasalawu827@gmail.com" className={styles.link}>
					<img src="/assets/icons/mail.svg" alt="mail" />
					bukolasalawu827@gmail.com
				</a>
				<a href="tel:+2348080821475" className={styles.link}>
					<img src="/assets/icons/phone.svg" alt="phone" />
					+2348080821475
				</a>
				<a href="https://wa.me/+2349030085269" className={styles.link}>
					<img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
					+2349030085269
				</a>
			</div>
			<p className={styles.copyright}>
				&copy; {new Date().getFullYear()}. All rights reserved.
			</p>
		</footer>
	)
}
