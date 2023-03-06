import "./participant.css";
import PropTypes from "prop-types";

const ParticipantStatusText = {
    Checked: "Cheked",
    NotChecked: "Check In"
};

const Participant = ({
    participant,
    onCheck,
    onDelete,
    onContact
}) => {

    function getParticipantStatusText(isChecked){
        return isChecked ? ParticipantStatusText.Checked : ParticipantStatusText.NotChecked
    }

    return (
        <div className="participant">
            <div className="info">
                <img className="profile-picture" src={participant.imageUrl} alt="Profile Picture"/>
                <p>{participant.firstName} {participant.lastName} </p>
            </div>

            <div className="buttons">
                <button 
                    className={`btn ${participant.isChecked ? 'btn-checked' : 'btn-unchecked'}`}
                    onClick={onCheck}
                >
                    {getParticipantStatusText(participant.isChecked)}
                </button>

                <div>
                    <button 
                        className="btn contact-btn"
                        onClick={onContact}
                    >
                        <i class="fa-brands fa-whatsapp"></i>
                    </button>
                    <button 
                        className="btn delete-btn"
                        onClick={onDelete}
                    >
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>

            
        </div>
    );
};

Participant.propTypes = {
    participant: PropTypes.object.isRequired,
    onCheck: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onContact: PropTypes.func.isRequired
};

export default Participant;