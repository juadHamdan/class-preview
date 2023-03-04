import './App.css';
import { useState } from 'react'
import Dashboard from './components/dashboard/Dashboard'
import SideDrawer from './components/side-drawer/SideDrawer';
import ClassPreview from './components/class-preview/ClassPreview';

const coach =  {firstName: "Tom", lastName: "Ami"}
const participants = [
  {firstName: "Dagan", lastName: "Lev", isChecked: true },
  {firstName: "Eden", lastName: "Elian", isChecked: false },
  {firstName: "Yoni", lastName: "Yatziv", isChecked: false },
  {firstName: "Tomi", lastName: "Tomi", isChecked: false }]

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  return (
    <div className="App">
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
          participats={participants}
          />
      </SideDrawer>
    </div>
  );
}

export default App;
