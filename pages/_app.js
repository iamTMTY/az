import Footer from "../components/Footer.jsx";
import SideNav from "../components/SideNav.jsx";
import Head from "next/head";
import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="layout">
			<Head>
				<meta name="description" content="UI/UX Designer, Product Designer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="main">
				<SideNav showMenu={showMenu} setShowMenu={setShowMenu} className="sidenav" />
				<div className="content">
					<Component showMenu={showMenu} setShowMenu={setShowMenu} {...pageProps} />
				</div>
			</main>
			<Footer className="footer" />
		</div>
	);
}

export default MyApp;
