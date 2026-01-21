import { useState, FormEvent, ChangeEvent } from "react";
import styles from "../styles/ContactForm.module.css";
import { motion } from "framer-motion";

function ContactForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    // Pomocniczy typ dla zdarzenia zmiany
    type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className={styles.contact_div}
        >
            <form className={styles.contact_form} onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e: InputChange) => setName(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Mail" 
                    value={email} 
                    onChange={(e: InputChange) => setEmail(e.target.value)} 
                />
                <textarea 
                    rows={8} // React w TS woli number, ale string "8" też przejdzie
                    placeholder="Your message" 
                    value={message} 
                    onChange={(e: InputChange) => setMessage(e.target.value)} 
                />
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </motion.div>
    );
}

export default ContactForm;