import './App.css'
import { useState } from 'react'
import HandleParticipants from './HandleParticipants'
import Dashboard from './components/dashboard/Dashboard'
import SideDrawer from './components/side-drawer/SideDrawer';
import ClassPreview from './components/class-preview/ClassPreview';

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  const { participants, toggleCheckParticipant, toggleAddParticipant} = HandleParticipants()

  return (
    <div className="app-container">
      <Dashboard 
        onClick={() => setShowSideDrawer(showSideDrawer => !showSideDrawer)}
      />

      <SideDrawer
        show={showSideDrawer}
        onClose={() => setShowSideDrawer(false)}
      >
        <ClassPreview
          title="Workout of the day"
          coach={{firstName: "Tom", lastName: "Ami"}}
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
