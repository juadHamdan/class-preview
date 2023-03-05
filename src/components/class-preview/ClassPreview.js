import "./class-preview.css";
import PropTypes from "prop-types";
import Participants from "./Participants";

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
                <h3 className="header-text">{title}</h3>
            </div>
            <hr/>

            <div className="class-info">
                <div className="coach-container">
                    <i class="coach-icon fa fa-person-chalkboard"></i>
                    <p>{coach.firstName} {coach.lastName.charAt(0)}</p>
                    <small>Coach</small>
                </div>
                <div className="time-container">
                    <i class="time-icon fa fa-clock"></i>
                    <p>{startTime}</p>
                    <small>Start Time</small>
                </div>
                <div className="participants-container">
                    <i class="fa fa-warehouse-full"></i>
                    <p>{numOfActiveParticipants}/{numOfTotalParticipants}</p>
                    <small>Participants</small>
                </div>
            </div>
            <hr/>

            {remark ? 
                <>
                    <div className="remark">
                        <p className="remark-header">You Should Know...</p>
                        <p class="remark-text">{remark}</p>
                    </div>
                    <hr/>
                </>
                : null
            }

            <Participants
                participants={participants}
                handleToggleAddParticipant={handleToggleAddParticipant}
                handleToggleParticipantCheck={handleToggleParticipantCheck}
                handleParticipantContact={handleParticipantContact}
            />

            <div className="class-operations-buttons">
                <button className="btn edit-btn">
                    <i class="edit-icon fa-solid fa-pen"></i>
                    <p>Edit</p>
                </button>
                <button className="btn cancel-class-btn">
                    <i class="cancel-class-icon fa-solid fa-calendar-xmark"></i>
                    <p>Cancel Class</p>
                </button>
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