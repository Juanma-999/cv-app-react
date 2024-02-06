import { useState } from "react";
import "./styles/GeneralStyles.css";

export default function GeneralInfo() {
    const [formData, setFormData] = useState({ schoolName: "", titleOfStudy: "", studiedFrom: "", studiedTo: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity()) {
            alert(`School name: ${formData.schoolName}, Title of study: ${formData.titleOfStudy}, Studied from: ${formData.studiedFrom}, Studied to: ${formData.studiedTo}`);
        } else {
            form.reportValidity();
        }
    };

    return (
        <div className="general-info-container">
            <form className="general-info-form" onSubmit={handleSubmit}>
                <label htmlFor="schoolName" className="form-label">School Name:</label>
                <input type="text" id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleChange} className="form-input" required />
                <br />
                <label htmlFor="studyTitle" className="form-label">Title of Study:</label>
                <input type="text" id="studyTitle" name="studyTitle" value={formData.studyTitle} onChange={handleChange} className="form-input" required />
                <br />
                <label htmlFor="studiedFrom" className="form-label">Studied from:</label>
                <input type="date" id="studiedFrom" name="studiedFrom" value={formData.studiedFrom} onChange={handleChange} className="form-input" required />
                <label htmlFor="studiedTo" className="form-label">To:</label>
                <input type="date" id="studiedTo" name="studiedTo" value={formData.studiedTo} onChange={handleChange} className="form-input" required />
                <br />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}