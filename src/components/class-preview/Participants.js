import "./participants.css";
import { useState } from 'react'
import PropTypes from "prop-types";
import Participant from "./Participant";

const Particpants = ({
    participants,
    handleToggleAddParticipant,
    handleToggleParticipantCheck,
    handleParticipantContact
}) => {
    const [showDropdownItems, setShowDropdownItems] = useState(false)

    function getAddedParticipants(){
        return participants.filter(participant => participant.isAdded == true)
    }
    function getNonAddedParticipants(){
        return participants.filter(participant => participant.isAdded == false)
    }

    return (
        <div className="participants-container">
            <div className="add-participants">
                <strong>Participants</strong>

                <div className="dropdown-container">
                    <div 
                        className={`dropdown-menu ${showDropdownItems ? "dropdown-menu-opened" : ""}`} 
                        onClick={() => setShowDropdownItems(showDropdownItems => !showDropdownItems)}>
                        <p>{showDropdownItems ? "To" : "Add Client"}</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>

                    {showDropdownItems ? 
                    <div className="dropdown-items">
                        {getNonAddedParticipants().map(participant =>
                            <div className="dropdown-item" onClick={() => handleToggleAddParticipant(participant.id)} key={participant.id}>
                                <img className="profile-picture" src={participant.imageUrl} alt="Profile Picture" />
                                <p>{participant.firstName} {participant.lastName} </p>
                            </div>
                        )}
                    </div>
                    : 
                    null}
                </div>
            </div>

            <div class="participants">
                {getAddedParticipants().map(participant =>
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
        </div>
    );
};

Particpants.propTypes = {
    participants: PropTypes.array.isRequired,
    handleToggleAddParticipant: PropTypes.func.isRequired,
    handleToggleAddParticipant: PropTypes.func.isRequired,
    handleParticipantContact: PropTypes.func
};

export default Particpants;