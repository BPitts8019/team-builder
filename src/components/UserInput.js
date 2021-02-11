import React from "react";
import {FormGroup, Label, Input} from "reactstrap";

function UserInput ({id, type="text", label, isRequired=false, value, changeHandler}) {
   return (
      <FormGroup>
         <Label for={id}>{label}</Label>
         <Input type={type} id={id} required={isRequired}
            value={value}
            onChange={changeHandler}
         />
      </FormGroup>
   );
}

export default UserInput;