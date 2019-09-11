import React from "react";
import {FormGroup, Label, Input} from "reactstrap";

function MemberInput ({label, id, type="text", isRequired=false}) {
   return (
      <FormGroup>
         <Label for={id}>{label}</Label>
         <Input type={type} id={id} required={isRequired} />
      </FormGroup>
   );
};

export default MemberInput;