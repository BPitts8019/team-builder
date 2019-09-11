import React, {useState} from "react";
import "./App.css";

import CreateMember from "./components/CreateMember.js";
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
         <CreateMember addTeamMember={addTeamMember} />

         <div className="display">
            {team.map((member, index) => <MemberCard key={index} member={member} />)}
         </div>
      </div>
   );
}

export default App;
