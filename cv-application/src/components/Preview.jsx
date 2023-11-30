import ShowInfo from "./ShowInfo";
import ShowExperience from "./ShowExperience";
import ShowEducation from "./ShowEducation";

function Preview({ infoList, experienceList, educationList }) {
    return (
        <div id="preview">
            <ShowInfo infoList={infoList}/>
            {experienceList.map((experience) => {
                return  <ShowExperience key={experience.id} experience={experience}/>
            })}
            {educationList.map((education) => {
                return <ShowEducation key={education.id} education={education}/>
            })
            }
        </div>
    )
}

export default Preview;