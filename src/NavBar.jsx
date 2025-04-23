import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './subpages/Home';
import About from './subpages/About';
import Contact from './subpages/Contact';
import Portfolio from './subpages/Portfolio'
import styles from './styles/NavBar.module.css';

function NavBar(){
    // const location = useLocation();


    return (
        
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.navbarItem}>Home page</Link>
                <Link to="/portfolio" className={styles.navbarItem}>Portfolio</Link>
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