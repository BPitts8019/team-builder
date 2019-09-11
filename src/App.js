import React, {useState} from 'react';
import {Card, CardHeader, CardBody, CardTitle, CardText} from "reactstrap"
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

         <div className="display">
            {/* {team.map((member, index) => <div key={index}>{member.firstName}</div>)} */}
            <div className="member-card">
               <h4 className="mc-title">Hello World</h4>
               <div className="mc-body">This is the body</div>
            </div>
            <div className="member-card">
               <h4 className="mc-title">Hello World</h4>
               <div className="mc-body">This is the body</div>
            </div>
            <div className="member-card">
               <h4 className="mc-title">Hello World</h4>
               <div className="mc-body">This is the body</div>
            </div>
         </div>
      </div>
   );
}

export default App;
