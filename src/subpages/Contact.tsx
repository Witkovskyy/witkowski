import React from "react";
import ContactForm from "./Contactform";
import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

export default function Contact() {
  return (
    <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ position: "absolute", width: "100%" }} 
          className={styles.contentContainer}>

      <h1>Contact info</h1>
      <p className={styles.socialLinksContainer}>
        <motion.a 
          href="https://www.linkedin.com/in/lukaszwitkowski21" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.socialLinks} ${styles.inLink}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.90 }}>

        LinkedIn
        </motion.a>

        <motion.a 
          href="https://github.com/Witkovskyy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.socialLinks} ${styles.gitLink}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.90 }}>

          GitHub
        </motion.a>
      </p>
      <ContactForm />
    </motion.div>
  );
  }