import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

function CreateMember (props) {
   const INIT_MEMBER = {
      firstName: "",
      lastName: "",
      email: ""
   };
   const [newMember, setNewMember] = useState(INIT_MEMBER);

   const submitForm = event => {
      event.preventDefault();
      
      props.addMember(newMember);
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
         <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" id="firstName" required
               value={newMember.firstName}
               onChange={formChanged}
            />
         </FormGroup>
         <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" id="lastName" required
               value={newMember.lastName}
               onChange={formChanged}
            />
         </FormGroup>
         <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" id="email"
               value={newMember.email}
               onChange={formChanged}
            />
         </FormGroup>
         <div className="btnSubmit">
            <Button type="submit">Submit</Button>
         </div>
      </Form>
   );
}

export default CreateMember;