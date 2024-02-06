import { useState } from "react";
import "./styles/GeneralInfo.css";

export default function GeneralInfo() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if (name === "email") {
            const isValidEmail = validateEmail(value);
            event.target.setCustomValidity(isValidEmail ? "" : "Please enter a valid email address");
        }

        if (name === "phone") {
            const isValidPhone = validatePhone(value);
            event.target.setCustomValidity(isValidPhone ? "" : "Please enter a valid phone number");
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^[0-9]{9}$/; // Assumes a 9-digit phone number
        return regex.test(phone);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity()) {
            alert(`Name: ${formData.name}, Email: ${formData.email}, Phone number: ${formData.phone}`);
        } else {
            form.reportValidity();
        }
    };

    return (
        <form className="general-info-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required/>
            <br />
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required/>
            <br />
            <label htmlFor="phone" className="form-label">Phone number:</label>
            <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required/>
            <br />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}