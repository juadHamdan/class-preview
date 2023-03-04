import { useState, useEffect } from 'react'
import Dashboard from './components/dashboard/Dashboard'
import SideDrawer from './components/side-drawer/SideDrawer';
import ClassPreview from './components/class-preview/ClassPreview';

const coach =  {firstName: "Tom", lastName: "Ami"}
const initialParticipants = [
  {id: 1, firstName: "Dagan", lastName: "Lev", isChecked: true, isAdded: true, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
  {id: 2, firstName: "Eden", lastName: "Elian", isChecked: false, isAdded: true, imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
  {id: 3, firstName: "Yoni", lastName: "Yatziv", isChecked: false, isAdded: true, imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg"},
  {id: 4, firstName: "Tom", lastName: "Levi", isChecked: false, isAdded: false, imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
  {id: 5, firstName: "Tomer", lastName: "Cohen", isChecked: false, isAdded: false, imageUrl: "https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg"},
  {id: 6, firstName: "Tomi", lastName: "Tomi", isChecked: false, isAdded: false, imageUrl: "https://i.pinimg.com/474x/cb/33/d8/cb33d80fe655e221ae05f41c8edd0cdb.jpg"}]

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  const [participants, setParticipants] = useState(initialParticipants)

  function toggleCheckParticipant(id){
    const nextParticipants = [...participants]
    const participantIndex = nextParticipants.findIndex(participant => participant.id === id)
    nextParticipants[participantIndex].isChecked = !nextParticipants[participantIndex].isChecked
    setParticipants(nextParticipants)
  }

  function toggleAddParticipant(id){
    console.log(id)
    const nextParticipants = [...participants]
    const participantIndex = nextParticipants.findIndex(participant => participant.id == id)
    nextParticipants[participantIndex].isAdded = !nextParticipants[participantIndex].isAdded
    setParticipants(nextParticipants)
  }

  return (
    <div>
      <Dashboard onClick={() => setShowSideDrawer(showSideDrawer => !showSideDrawer)}/>

      <SideDrawer
        show={showSideDrawer}
        onClose={() => setShowSideDrawer(false)}
      >
        <ClassPreview
          title="Workout of the day"
          coach={coach}
          startTime="16:15"
          numOfTotalParticipants={15}
          numOfActiveParticipants={3}
          remark="Dagan & Eden which participates in the class have a debt"
          participants={participants}
          handleToggleParticipantCheck={toggleCheckParticipant}
          handleToggleAddParticipant={toggleAddParticipant}
          />
      </SideDrawer>
    </div>
  );
}

export default App;
