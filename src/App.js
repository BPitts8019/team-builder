import React, {useState} from 'react';
import {Form} from "reactstrap"
// import {Button, Form, FormGroup, Label, Input, FormText, FormFeedback} from "reactstrap"
import './App.css';

import "./components/MemberInput.js";
import MemberInput from './components/MemberInput.js';
import SubmitButton from './components/SubmitButton.js';

function App() {
   const [team, setTeam] = useState([
      {
         firstName: "Bradley",
         lastName: "Pitts",
         email: "something@somewhere.com"
      },
      {
         firstName: "Theresa",
         lastName: "Pitts",
         email: "anotherthing@somewhere.com"
      }
   ]);

   return (
      <div className="App">
         <h1>Team Builder</h1>
         <Form className="team-builder">
            <MemberInput id="input-fn" label="First Name" isRequired />
            <MemberInput id="input-ln" label="Last Name" isRequired />
            <MemberInput id="input-email" label="Email" />
            <SubmitButton color="primary" />
         </Form>

         <div className="dispay">
            {team.map((member, index) => <div key={index}>{member.firstName}</div>)}
         </div>
      </div>
   );
}

export default App;
