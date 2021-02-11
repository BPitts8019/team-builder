import React, {useState} from "react";
import "./App.css";

import Form from "./components/Form.js";
import MemberCard from "./components/MemberCard.js";

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
         <Form addTeamMember={addTeamMember} />

         <div className="display">
            {team.map((member, index) => <MemberCard key={index} {...member} />)}
         </div>
      </div>
   );
}

export default App;
