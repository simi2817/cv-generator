
function PersonalInfo({ personalInfo, setPersonalInfo }) {

    const handleFirstName = (e) => {
        const firstName = {...personalInfo, firstName: e.target.value};
        setPersonalInfo(firstName);
    }
    const handleLastName = (e) => {
        const lastName = {...personalInfo, lastName: e.target.value};
        setPersonalInfo(lastName);
    }

    const handleTitle = (e) => {
        const title = {...personalInfo, title: e.target.value};
        setPersonalInfo(title);
    }

    const handleLocation = (e) => {
        const location = {...personalInfo, location: e.target.value};
        setPersonalInfo(location);
    }

    const handleContact = (e) => {
        const contact = {...personalInfo, contact: e.target.value};
        setPersonalInfo(contact);
    }

    const handleEmail = (e) => {
        const email = {...personalInfo, email: e.target.value};
        setPersonalInfo(email);
    }

    const addPersonalInfo = (e) => {
        e.preventDefault();
        e.target.reset();
        console.log(personalInfo);
    }
    
    return (
        <div id="personalInfo">
            <h2>Personal Details</h2>
            <form id="personalInfo" onSubmit={addPersonalInfo}>
                <input type="text" placeholder="First Name" onChange={handleFirstName} required/>
                <input type="text" placeholder="Last Name" onChange={handleLastName} required/>
                <input type="text" placeholder="Title" onChange={handleTitle} required/>
                <input type="text" placeholder="Location" onChange={handleLocation} required/>
                <input type="text" placeholder="Contact" onChange={handleContact} required/>
                <input type="text" placeholder="Email" onChange={handleEmail} required/>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default PersonalInfo;