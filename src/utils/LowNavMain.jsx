import { motion } from "framer-motion";
import React from 'react';
import styles from '../styles/LowNavMain.module.css';
import { Link } from "react-router-dom";

const navItem = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: 1.6 + i * 0.15, type: "spring", stiffness: 300 }
    })
};
const pages = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
]

export default function LowNavMain() {

    return (

        <ul
            className={styles.navList}>
            {pages.map((page, i) => (
                <Link
                    key={page.name}
                    to={page.path}
                    className={styles.navLink}
                >
                    <motion.li
                        key={page.name}
                        custom={i}
                        variants={navItem}
                        initial="hidden"
                        animate="visible"
                        className={styles.navItem}
                        whileHover={{ scale: 1.1 }}
                    >
                        {page.name}
                    </motion.li>
                </Link>
            ))}
        </ul>


    )

}