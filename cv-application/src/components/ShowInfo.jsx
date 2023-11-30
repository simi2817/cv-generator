import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ShowInfo({ infoList }) {
    return (
        <div id="showInfo">
            <h2 style={{color: 'antiquewhite'}}>{infoList.firstName} {infoList.lastName}</h2>
            <h3>{infoList.title}</h3>
            <p style={{color: 'antiquewhite'}}><FontAwesomeIcon icon={faLocationDot} /> {infoList.location}</p>
            <p style={{color: 'antiquewhite'}}><FontAwesomeIcon icon={faPhone} /> {infoList.contact}</p>
            <p style={{color: 'antiquewhite'}}><FontAwesomeIcon icon={faEnvelope} /> {infoList.email}</p>
        </div>
    )
}

export default ShowInfo;