import "./class-preview.css";
import PropTypes from "prop-types";

const ClassPreview = ({
    title,
    coach,
    startTime,
    numOfTotalParticipants,
    numOfActiveParticipants,
    remark,
    participants
}) => {

    return (
        <div className="class-preview-container">



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
    participats: PropTypes.array
};

export default ClassPreview;