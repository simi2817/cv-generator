function EditExperience({ experience, setExperience }) {
    const saveExperience = (e, id) => {
        e.preventDefault();
        const position = e.target[0].value;
        const company = e.target[1].value;
        const startDate = e.target[2].value;
        const endDate = e.target[3].value;
        const description = e.target[4].value;
        const updatedExperience = {position, company, startDate, endDate, description};
        setExperience(experience.map((exp) => {
            if(exp.id === id)
                return {...exp, ...updatedExperience};
            else
                return exp;
        }));
    };

    const deleteExperience = (id) => {
        setExperience((exp) => {
            return exp.filter((e) => e.id !== id);
        });
    };
    
    return (
        <>
        {experience.map((exp) => {
            return (
                <form key={exp.id} onSubmit={(e) => saveExperience(e, exp.id)}>
                    <input placeholder="Position" required defaultValue={exp.position}/>
                    <input placeholder="Company" required defaultValue={exp.company}/>
                    <input placeholder="Start Date" required defaultValue={exp.startDate}/>
                    <input placeholder="End Date" required defaultValue={exp.endDate}/>
                    <input placeholder="Description" required defaultValue={exp.description}/>
                    <div id="buttons">
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => deleteExperience(exp.id)}>Delete</button>
                    </div>
                </form>
            )
        })}
        </>
    )
}

export default EditExperience;