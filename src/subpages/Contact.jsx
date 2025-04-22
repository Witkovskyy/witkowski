import React from "react";
import ContactForm from "./Contactform";

export default function Contact() {
  return (
    <div>
      <h1>Contact info</h1>
      <p>
        <a href="https://www.linkedin.com/in/lukaszwitkowski21" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Witkovskyy" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p>Currently off ;). I accept contact through LinkedIn.</p>
      <ContactForm />
    </div>
  );
  }