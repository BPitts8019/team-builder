import React, {useState} from 'react';
import {Form} from "reactstrap"
// import {Button, Form, FormGroup, Label, Input, FormText, FormFeedback} from "reactstrap"
import './App.css';

import createMember from "./components/CreateMember.js";
import CreateMember from './components/CreateMember.js';

function App() {
   
   const [team, setTeam] = useState([]);

   

   return (
      <div className="App">
         <h1>Team Builder</h1>
         <CreateMember />

         <div className="dispay">
            {team.map((member, index) => <div key={index}>{member.firstName}</div>)}
         </div>
      </div>
   );
}

export default App;
