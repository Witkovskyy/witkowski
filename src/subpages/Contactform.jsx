import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", { name, email, message });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name}></input>
            <input type="text" placeholder="Mail" value={email}></input>
        </form>

    );
}


export default ContactForm;