function EditEducation({ education, setEducation }) {
    const saveEducation = (e, id) => {
        e.preventDefault();
        const course = e.target[0].value;
        const school = e.target[1].value;
        const startYear = e.target[2].value;
        const gradYear = e.target[3].value;
        const updatedEducation = {course, school, startYear, gradYear};
        setEducation(education.map((edu) => {
            if(edu.id === id)
                return {...edu, ...updatedEducation};
            else
                return edu;
        }));
    };

    const deleteEducation = (id) => {
        setEducation((edu) => {
            return edu.filter((e) => e.id !== id);
        });
    };

    return (
        <>
        {education.map((edu) => {
            return (
                <form key={edu.id} onSubmit={(e) => saveEducation(e, edu.id)}>
                    <input placeholder="Course" required defaultValue={edu.course}/>
                    <input placeholder="University/School" required defaultValue={edu.school}/>
                    <input placeholder="Start Year" required defaultValue={edu.startYear}/>
                    <input placeholder="Graduated Year" required defaultValue={edu.gradYear}/>
                    <div id="buttons">
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => deleteEducation(edu.id)}>Delete</button>
                    </div>
                </form>
            )
        })}
        </>
    )
}

export default EditEducation;