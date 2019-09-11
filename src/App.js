import React, {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input, FormText, FormFeedback} from "reactstrap"
import './App.css';

import CreateMember from './components/CreateMember.js';

function App() {
   
   const [team, setTeam] = useState([]);
   const addTeamMember = newMember => {
      setTeam([
         ...team,
         newMember
      ]);
   };
   

   return (
      <div className="App">
         <h1>Team Builder</h1>
         <CreateMember addMember={addTeamMember} />

         <div className="dispay">
            {team.map((member, index) => <div key={index}>{member.firstName}</div>)}
         </div>
      </div>
   );
}

export default App;
