import React, {useRef, useState} from "react";
import Link from "next/link";
import styles from "../styles/SideNav.module.css";
import Close from "./Close";

export default function SideNav({ className, showMenu, setShowMenu }) {

	const subLinkRef = useRef(null)
	const [height, setHeight] = useState(0)

	const toggleNavLink = () => {
		const newHeight = height === 0 ? subLinkRef.current.scrollHeight + 20 : 0
		setHeight(newHeight)
	}

	const closeNav = () => {
		setShowMenu(!showMenu)		
	}

	return (
		<div className={`${className} ${showMenu ? "showNav" : "hideNav"}`}>
			<div className={styles.navHeader}>
				<a href="/" className={styles.logo}>
					<img src="/assets/icons/logo.svg" alt="logo" />
				</a>
				<Close className={styles.closeNav} onClick={closeNav} />
			</div>

			<nav className={styles.nav}>
				<h1 className={styles.linkHeader} onClick={toggleNavLink}>Work</h1>
				<div ref={subLinkRef} style={{height: `${height}px`}} className={styles.subLink}>
					<div className={styles.subLinkContent}>
						<Link href="https://www.behance.net/gallery/131880287/SPLITEC%28BILL-SPLITTING-MOBILE-APP%29-UX-CASE-STUDY">Splictec- Bill splitting Mobile App(UX CASE STUDY)</Link>
						<Link href="https://www.behance.net/gallery/128638537/Point-of-care-Health-care-landing-page">Point of Care(Health care landing page)</Link>
						<Link href="https://www.behance.net/gallery/126900895/Food-delivery-Mobile-app-exploration">Food Delivery-Mobile App Exploration</Link>
						<Link href="https://www.behance.net/gallery/126900043/Food-delivery-webpage">Food Delivery Webpage</Link>
						<Link href="https://www.behance.net/gallery/126211145/Furniture-store-Landing-Page">Furniture Store (Landing page)</Link>
						<Link href="https://www.behance.net/gallery/126054905/E-Wallet-app-concept">E-Wallet App Concept</Link>
						<Link href="https://www.behance.net/gallery/126045799/E-COMMERCE-APP-%28UX-CASE-STUDY%29">GET IT-E commerce App(UX Case Study)</Link>
						<Link href="https://www.behance.net/gallery/125915953/HOTEL-BOOKING-MOBILE-APP">Hotel Booking Mobile App</Link>
						<Link href="https://www.behance.net/gallery/125822937/Job-portal-Landing-page">Job Portal Landing Page </Link>
						<Link href="https://www.behance.net/gallery/125659385/E-Learning-Webpage">E-Learning Webpage</Link>
						<h3 className={styles.linkSubHeader}>Work in Progress</h3>
						<Link href="/">Châteauroyal - Hotel booking web App(UX Case Study)</Link>
					</div>
				</div>
				<Link href="/contact">Contact</Link>
			</nav>
		</div>
	);
}
