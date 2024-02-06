import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalInfo from "./EducationalInfo";
import WorkingExperience from "./WorkingExperience";
import "./styles/GeneralStyles.css";

export default function App() {
    const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "" });
    const [educationalInfo, setEducationalInfo] = useState({ schoolName: "", titleOfStudy: "", studiedFrom: "", studiedTo: "" });
    const [workingExperience, setWorkingExperience] = useState({ companyName: "", positionTitle: "", mainResponsibilities: "", workFromDate: "", workToDate: "" });

    const handleGeneralInfoSubmit = (data) => {
        setGeneralInfo(data);
    };

    const handleEducationalInfoSubmit = (data) => {
        setEducationalInfo(data);
    };

    const handleWorkingExperienceSubmit = (data) => {
        setWorkingExperience(data);
    };

    const clearGeneralInfo = () => {
        setGeneralInfo({ name: "", email: "", phone: "" });
    };

    const clearEducationalInfo = () => {
        setEducationalInfo({ schoolName: "", titleOfStudy: "", studiedFrom: "", studiedTo: "" });
    };

    const clearWorkingExperience = () => {
        setWorkingExperience({ companyName: "", positionTitle: "", mainResponsibilities: "", workFromDate: "", workToDate: "" });
    };

    return (
        <div className="appContainer">
            <div className="dataContainer">
                <div className="section">
                    <h2>General Info</h2>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone number: {generalInfo.phone}</p>
                    <button className="clear-button" onClick={clearGeneralInfo}>Clear</button>
                </div>
                <div className="section">
                    <h2>Educational Info</h2>
                    <p>School Name: {educationalInfo.schoolName}</p>
                    <p>Title of Study: {educationalInfo.titleOfStudy}</p>
                    <p>Studied from: {educationalInfo.studiedFrom}</p>
                    <p>Studied to: {educationalInfo.studiedTo}</p>
                    <button className="clear-button" onClick={clearEducationalInfo}>Clear</button>
                </div>
                <div className="section">
                    <h2>Working Experience</h2>
                    <p>Company Name: {workingExperience.companyName}</p>
                    <p>Position Title: {workingExperience.positionTitle}</p>
                    <p>Main Responsibilities: {workingExperience.mainResponsibilities}</p>
                    <p>Worked from: {workingExperience.workFromDate}</p>
                    <p>Worked to: {workingExperience.workToDate}</p>
                    <button className="clear-button" onClick={clearWorkingExperience}>Clear</button>
                </div>
            </div>
            <div className="formContainer">
                <GeneralInfo onSubmit={handleGeneralInfoSubmit} />
                <EducationalInfo onSubmit={handleEducationalInfoSubmit} />
                <WorkingExperience onSubmit={handleWorkingExperienceSubmit} />
            </div>
        </div>
    );
}
