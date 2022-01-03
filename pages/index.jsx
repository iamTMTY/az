import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Socials from "../components/Socials";

export default function Home({showMenu, setShowMenu}) {

	return (
		<div className={styles.container}>
			<Head>
				<title>Azeezah | Home</title>
			</Head>
			<div className={styles.hero}>
				<Socials showMenu={showMenu} setShowMenu={setShowMenu} className={styles.socials} />
				<div className={styles.about}>
					<h1>Hi, I&apos;m Bukola Salawu! A Product Designer Based in Lagos Nigeria</h1>
					<p>
						An Agricultural science graduate who found purpose in product design . I am a passionate
						product designer with great problem solving skills. I seek to make digital products
						intuitive for people, taking into consideration the business goals and technological
						constraints. Being a naturally empathetic, hardworking and result oriented person, I
						strive to achieve best results in any project I find myself doing. Outside product
						design, I am a fun lover. However, I find different things fun at different points in my
						life. I love to visit places where I can sit in solitude and experience people outside
						my personal space.
					</p>
					<button className={styles.cv}>Download CV</button>
				</div>
			</div>
			<div className={styles.projects}>
				<div className={styles.project}>
					<img src="/assets/images/splitec.jpg" alt="splitec - bill splitting concept" />
					<div className={styles.overlay}>
						<a href="https://www.behance.net/gallery/131880287/SPLITEC%28BILL-SPLITTING-MOBILE-APP%29-UX-CASE-STUDY">Splictec- Bill splitting Mobile App(UX CASE STUDY)</a>
					</div>
				</div>
				<div className={styles.project}>
					<img src="/assets/images/ecommerce.jpg" alt="ecommerce concept" />
					<div className={styles.overlay}>
						<a href="https://www.behance.net/gallery/126045799/E-COMMERCE-APP-%28UX-CASE-STUDY%29">GET IT-E commerce App(UX Case Study)</a>
					</div>
				</div>
				<div className={styles.project}>
					<img src="/assets/images/hotel.jpg" alt="hotel app concept" />
					<div className={styles.overlay}>
						<a href="https://www.behance.net/gallery/125915953/HOTEL-BOOKING-MOBILE-APP">Hotel Booking Mobile App</a>
					</div>
				</div>
				<div className={styles.project}>
					<img src="/assets/images/foodDeliveryWeb.jpg" alt="food delivery app concept" />
					<div className={styles.overlay}>
						<a href="https://www.behance.net/gallery/126900043/Food-delivery-webpage">Food Delivery Webpage</a>
					</div>
				</div>
				<div className={styles.project}>
					<img src="/assets/images/furniture.jpg" alt="furniture app concept" />
					<div className={styles.overlay}>
						<a href="https://www.behance.net/gallery/126211145/Furniture-store-Landing-Page">Furniture Store (Landing page)</a>
					</div>
				</div>
				<div className={styles.project}>
					<img src="/assets/images/wallet.jpg" alt="e wallet ap concept" />
					<div className={styles.overlay}>
						<a href="https://www.behance.net/gallery/126054905/E-Wallet-app-concept">E-Wallet App Concept</a>
					</div>
				</div>
			</div>
		</div>
	);
}
