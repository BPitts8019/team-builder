import React from "react";
import {Button} from "reactstrap";

function SubmitButton ({color}) {
   return (
      <div className="btnSubmit">
         <Button type="submit" color={color}>Submit</Button>
      </div>
   );
};

export default SubmitButton;