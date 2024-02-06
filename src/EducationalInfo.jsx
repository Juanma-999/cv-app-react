import { useState } from "react";
import "./styles/GeneralStyles.css";

export default function EducationalInfo({ onSubmit }) {
    const [formData, setFormData] = useState({ schoolName: "", titleOfStudy: "", studiedFrom: "", studiedTo: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity()) {
            onSubmit(formData); // Pass form data to the parent component
        } else {
            form.reportValidity();
        }
    };

    return (
        <div>
            <form className="general-info-form" onSubmit={handleSubmit}>
                <label htmlFor="schoolName" className="form-label">School Name:</label>
                <input type="text" id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleChange} className="form-input" required />
                <br />
                <label htmlFor="titleOfStudy" className="form-label">Title of Study:</label>
                <input type="text" id="titleOfStudy" name="titleOfStudy" value={formData.titleOfStudy} onChange={handleChange} className="form-input" required />
                <br />
                <label htmlFor="studiedFrom" className="form-label">From:</label>
                <input type="date" id="studiedFrom" name="studiedFrom" value={formData.studiedFrom} onChange={handleChange} className="form-input" required />
                <label htmlFor="studiedTo" className="form-label">To:</label>
                <input type="date" id="studiedTo" name="studiedTo" value={formData.studiedTo} onChange={handleChange} className="form-input" required />
                <br />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}
