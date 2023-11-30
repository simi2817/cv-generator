function ShowExperience({ experience }) {
    return (
        <section id="experience">
            <p>{experience.position}</p>
            <strong>{experience.company}</strong>
            <p>{experience.startDate} - {experience.endDate}</p>
            <p>{experience.description}</p>
        </section>
    )
}

export default ShowExperience;