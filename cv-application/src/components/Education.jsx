import { v4 as uuid } from "uuid";
import EditEducation from "./EditEducation";

function Education({ education, setEducation }) {

    const addEducation = (e) => {
        e.preventDefault();
        const id = uuid();
        const course = e.target[0].value;
        const school = e.target[1].value;
        const startYear = e.target[2].value;
        const gradYear = e.target[3].value;
        const newEducation = {id, course, school, startYear, gradYear};
        setEducation([...education, newEducation]);
        e.target.reset();
        console.log(education);
    }

    return (
        <div id="education">
            <h2>Education</h2>
            <EditEducation education={education} setEducation={setEducation}/>
            <form id="education" onSubmit={addEducation}>
                <input type="text" placeholder="Course" required/>
                <input type="text" placeholder="University/School" required/>
                <input type="text" placeholder="Start Year" required/>
                <input type="text" placeholder="Graduated Year" required/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Education;