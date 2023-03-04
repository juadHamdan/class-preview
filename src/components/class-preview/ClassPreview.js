import "./class-preview.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Participant from "./Participant";

const ClassPreview = ({
    title,
    coach,
    startTime,
    numOfTotalParticipants,
    numOfActiveParticipants,
    remark,
    participants,
    handleToggleParticipantCheck,
    handleParticipantContact = (id) => alert(`contact participant with id: ${id}`),
    handleToggleAddParticipant
}) => {

    function getAddedParticipants(){
        return participants.filter(participant => participant.isAdded == true)
    }

    return (
        <div className="class-preview-container">

            <div className="header">
                <div className="header-icon-container">
                    <i class="header-icon fa fa-dumbbell"></i>
                </div>
                <h2>{title}</h2>
            </div>
            <hr/>

            <div className="class-info">
                <div className="coach-container">
                    <p>{coach.firstName} {coach.lastName.charAt(0)}</p>
                    <small>Coach</small>
                </div>
                <div className="time-container">
                    <p>{startTime}</p>
                    <small>Start Time</small>
                </div>
                <div className="participants-container">
                    <p>{numOfActiveParticipants}/{numOfTotalParticipants}</p>
                    <small>Participants</small>
                </div>
            </div>
            <hr/>

            {remark ? 
                <>
                    <div className="remark">
                        <p>You Should Know...</p>
                        <small>{remark}</small>
                    </div>
                    <hr/>
                </>
                : null
            }

            <div className="participants">
                <div className="add-participants">
                    <strong>Participants</strong>

                    <select name="Add Client" onClick={e => handleToggleAddParticipant(e.target.value)}>
                        {participants.filter(participant => participant.isAdded == false).map(participant => 
                            <option value={participant.id}  key={participant.id}>
                                <div className="participant-info">
                                    <img className="profile-picture" src={participant.imageUrl} alt="Profile Picture"/>
                                    <p>{participant.firstName} {participant.lastName} </p>
                                </div>
                            </option>
                        )}
                    </select>
                </div>

                {participants.filter(participant => participant.isAdded == true).map(participant => 
                    <div key={participant.id}>
                        <Participant 
                            participant={participant}
                            onCheck={() => handleToggleParticipantCheck(participant.id)}
                            onDelete={() => handleToggleAddParticipant(participant.id)}
                            onContact={() => handleParticipantContact(participant.id)}
                        />
                    </div>
                )}
            </div>



            <div className="class-operations-buttons">
                <button className="btn edit-btn">Edit</button>
                <button className="btn cancel-class-btn">Cancel Class</button>
            </div>
        </div>
    );
};

ClassPreview.propTypes = {
    title: PropTypes.string.isRequired,
    coach: PropTypes.object.isRequired,
    startTime: PropTypes.string.isRequired,
    numOfTotalParticipants: PropTypes.number.isRequired,
    numOfActiveParticipants: PropTypes.number.isRequired,
    remark: PropTypes.string,
    participats: PropTypes.array,
    handleToggleParticipantCheck: PropTypes.func,
    handleParticipantContact: PropTypes.func,
    handleToggleAddParticipant: PropTypes.func,
};

export default ClassPreview;