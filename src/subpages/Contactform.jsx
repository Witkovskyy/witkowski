import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

// import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    // const recaptchaRef = React.createRef();

    const handleSubmit = async (e) => {
        // console.log("Form Data:", { name, email, message });
        // const recaptchaValue = recaptchaRef.current.getValue();
        

            e.preventDefault();
            setStatus('Sending…');

            try {
                const res = await fetch('/api/contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message }),
                });
                const json = await res.json();

                if (json.success) {
                    setStatus('Message sent!');
                    setName(''); setEmail(''); setMessage('');
                } else {
                    setStatus('Failed: ' + (json.error || 'Unknown error'));
                }
            } catch (err) {
                console.error(err);
                setStatus('Error sending message.');
            }
        };


    

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit} >
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea type="text" rows="8" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            {/* <ReCAPTCHA sitekey="site-key" ref={recaptchaRef}/> */}
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>

    );
}


export default ContactForm;