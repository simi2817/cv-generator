import { v4 as uuid } from "uuid";
import EditExperience from "./EditExperience";

function WorkExperience({ experience, setExperience }) {

    const addExperience = (e) => {
        e.preventDefault();
        const id = uuid();
        const position = e.target[0].value;
        const company = e.target[1].value;
        const startDate = e.target[2].value;
        const endDate = e.target[3].value;
        const description = e.target[4].value;

        const newExperience = {id, position, company, startDate, endDate, description};
        setExperience([...experience, newExperience]);
        console.log(experience);
        e.target.reset();
    }

    return (
        <div id="workExperience">
            <h2>Work Experience</h2>
            <EditExperience experience={experience} setExperience={setExperience}/>
            <form id="experience" onSubmit={addExperience}>
                <input type="text" placeholder="Position" required/>
                <input type="text" placeholder="Company" required/>
                <input type="text" placeholder="Start Date" required/>
                <input type="text" placeholder="End Date" required/>
                <textarea type="text" placeholder="Description" required/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default WorkExperience;