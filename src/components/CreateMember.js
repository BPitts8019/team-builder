import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

function CreateMember () {
   const INIT_MEMBER = {
      firstName: "",
      lastName: "",
      email: ""
   };
   const [member, setMember] = useState(INIT_MEMBER);

   const formChanged = event => {
      setMember({
         ...member,
         [event.target.id]: event.target.value
      });
   };
   const resetForm = () => {
      setMember(INIT_MEMBER);
   }

   return (
      <Form className="team-builder" onSubmit={() => {}}>
         <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" id="firstName" required
               onChange={formChanged}
            />
         </FormGroup>
         <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" id="lastName" required
               onChange={formChanged}
            />
         </FormGroup>
         <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" id="email" required
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