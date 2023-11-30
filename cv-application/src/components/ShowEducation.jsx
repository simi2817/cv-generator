function ShowEducation({ education }) {
    return (
        <>
            <strong>{education.course}</strong>
            <p>{education.school}</p>
            <p>{education.startYear} - {education.gradYear}</p>
        </>
    )
}

export default ShowEducation;