import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", { name, email, message });
    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit} >
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Submit</button>
        </form>

    );
}


export default ContactForm;