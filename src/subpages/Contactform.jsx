import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
// import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // const recaptchaRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", { name, email, message });
        // const recaptchaValue = recaptchaRef.current.getValue();

    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit} >
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea type="text" rows="8" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            {/* <ReCAPTCHA sitekey="site-key" ref={recaptchaRef}/> */}
            <button type="submit">Submit</button>
        </form>

    );
}


export default ContactForm;