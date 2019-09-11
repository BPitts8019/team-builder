import React, {useState} from "react";
import {Form} from "reactstrap";

import UserInput from "./UserInput.js";
import SubmitButton from "./SubmitButton.js";

function CreateMember ({addTeamMember}) {
   const INIT_MEMBER = {
      firstName: "",
      lastName: "",
      email: ""
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
      <Form className="team-builder" onSubmit={submitForm}>
         <UserInput id="firstName" label="First Name" isRequired
            value={newMember.firstName}
            changeHandler={formChanged}
         />
         <UserInput id="lastName" label="Last Name" isRequired
            value={newMember.lastName}
            changeHandler={formChanged}
         />
         <UserInput id="email" type="email" label="Email"
            value={newMember.email}
            changeHandler={formChanged}
         />
         <SubmitButton />
      </Form>
   );
}

export default CreateMember;