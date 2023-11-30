import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Preview from "./Preview";
import { useState } from "react";
import { defaultInfo, defaultExperience, defaultEducation } from './example.js';

function Content() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        title: '',
        location: '',
        contact: '',
        email: ''
    });

    const [experience, setExperience] = useState([]);

    const [education, setEducation] = useState([]);

    const [example, setExample] = useState(false);

    const handleExample = () => {
        setExample(!example);
    }

    return (
        <div id="content">
            <div id="left">
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
                <WorkExperience experience={experience} setExperience={setExperience}/>
                <Education education={education} setEducation={setEducation}/>
                <button onClick={handleExample}>Load Example</button>
            </div>
            <div id="right">
                {
                example ? <Preview infoList={defaultInfo} experienceList={defaultExperience} educationList={defaultEducation}/> : 
                <Preview infoList={personalInfo} experienceList={experience} educationList={education}/>
                }
            </div>
        </div>
    )
}

export default Content;