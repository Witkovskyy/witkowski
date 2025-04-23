import React from "react";
import ContactForm from "./Contactform";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contentContainer}>
      <h1>Contact info</h1>
      <p className={styles.socialLinksContainer}>
        <a href="https://www.linkedin.com/in/lukaszwitkowski21" target="_blank" rel="noopener noreferrer" className={`${styles.socialLinks} ${styles.inLink}`}>
        LinkedIn</a>
        <a href="https://github.com/Witkovskyy" target="_blank" rel="noopener noreferrer" className={`${styles.socialLinks} ${styles.gitLink}`}>
        GitHub</a>
      </p>
      <p>Currently off ;). I accept contact through LinkedIn.</p>
      <ContactForm />
    </div>
  );
  }