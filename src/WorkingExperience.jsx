import { useState } from "react";
import "./styles/GeneralStyles.css";

export default function WorkingExperience({ onSubmit }) {
    const [formData, setFormData] = useState({ companyName: "", positionTitle: "", mainResponsibilities: "", workFromDate: "", workToDate: "" });

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
                <label htmlFor="companyName" className="form-label">Company Name:</label>
                <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="form-input" required />
                <br />
                <label htmlFor="positionTitle" className="form-label">Position Title:</label>
                <input type="text" id="positionTitle" name="positionTitle" value={formData.positionTitle} onChange={handleChange} className="form-input" required />
                <br />
                <label htmlFor="mainResponsibilities" className="form-label">Main Responsibilities:</label>
                <textarea id="mainResponsibilities" name="mainResponsibilities" value={formData.mainResponsibilities} onChange={handleChange} className="form-textarea" required></textarea>
                <br />
                <label htmlFor="workFromDate" className="form-label">From:</label>
                <input type="date" id="workFromDate" name="workFromDate" value={formData.workFromDate} onChange={handleChange} className="form-input" required />
                <br />
                <label htmlFor="workToDate" className="form-label">To:</label>
                <input type="date" id="workToDate" name="workToDate" value={formData.workToDate} onChange={handleChange} className="form-input" required />
                <br />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}
