import React, {useState} from "react";
import {Form as RSForm} from "reactstrap";

import UserInput from "./UserInput.js";
import SubmitButton from "./SubmitButton.js";

function Form ({addTeamMember}) {
   const INIT_MEMBER = {
      name: "",
      email: "",
      role: ""
   };
   const [newMember, setNewMember] = useState(INIT_MEMBER);

   const submitForm = event => {
      event.preventDefault();
      
      addTeamMember(newMember);
      setNewMember(INIT_MEMBER);
   };
   const formChanged = event => {
      setNewMember({
         ...newMember,
         [event.target.id]: event.target.value
      });
   };

   return (
      <RSForm className="team-builder" onSubmit={submitForm}>
         <UserInput id="name" label="Name" isRequired
            value={newMember.name}
            changeHandler={formChanged}
         />
         <UserInput id="email" type="email" label="Email" isRequired
            value={newMember.email}
            changeHandler={formChanged}
         />
         <UserInput id="role" label="Role" isRequired
            value={newMember.role}
            changeHandler={formChanged}
         />
         <SubmitButton />
      </RSForm>
   );
}

export default Form;