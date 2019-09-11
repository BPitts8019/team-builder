import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, FormFeedback} from "reactstrap"
import './App.css';

function App() {
   return (
      <div className="App">
         <h1>Team Builder</h1>
         <Form>
            <FormGroup>
               <Label for="">First Name</Label>
               <Input type="text" required />
               <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
               </FormText>
            </FormGroup>
            <FormGroup>
               <Label for="">Last Name</Label>
               <Input type="text" />
            </FormGroup>
         </Form>
      </div>
   );
}

export default App;
