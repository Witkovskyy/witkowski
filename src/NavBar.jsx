import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './subpages/Home';
import About from './subpages/About';
import Contact from './subpages/Contact';
import Portfolio from './subpages/Portfolio'
import styles from './styles/NavBar.module.css';

const pages = [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ]

// const [isExit, setIsExit] = useState(true);

// export async function handleExitAnimation() {
//     setIsExit(true);
//     return (isExit);

// }

function NavBar(){


    // const [[currentPage, direction], setCurrentPage] = useState(0,0);

    // const pageCount = pages.length;
    // const currentIndex = ((currentPage % pageCount) + pageCount) % pageCount;
    // // const currentOffer = offers[currentIndex];

    // const paginate = (newDirection) => {
    //     setCurrentPage([currentPage + newDirection, newDirection]);
    // };

    return (
        
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <img src="favicon.ico" className={styles.logo}></img>
                <Link to="/" className={styles.navbarItem} >Home page</Link>
                <Link to="/portfolio" className={styles.navbarItem} >Portfolio</Link>
                <Link to="/about" className={styles.navbarItem}>About me</Link>
                <Link to="contact" className={styles.navbarItem}>Contact</Link>
            </nav>
        
        <AnimatePresence mode="wait">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        </AnimatePresence>

        </div>
        
    );
}

export default NavBar;