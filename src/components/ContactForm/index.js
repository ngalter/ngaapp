import React, { useState, useEffect } from "react";
import { Input, FormBtn } from "../Form";
import Box from '@material-ui/core/Box';
import ContactButton from '../ContactButton';
import "./styles.css"

const InputForm = () => {

  const [formObject, setFormObject] = useState({});

  // Load all pantries and store them with setPantries
  useEffect(() => {
    setFormObject({
      firstname: "",
      lastname: "",
      email: ""
    })
  },[]);

function formSubmit(formObject) {
    console.log(formObject);
 }
    
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
}

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.firstname && formObject.lastname && formObject.email) {
      formSubmit();
    };
  };
  return (
      <div>
          <Box className='contact-box'>
         <div className="Container-fluid" style={{ textAlign: "center" }}>
          <Input className='contact-input'
            onChange={handleInputChange}
            name="firstname"
            placeholder="First Name (required)"
            style={{ textAlign: "left" }}
          />
          <Input className='contact-input'
            onChange={handleInputChange}
            name="lastname"
            placeholder="Last Name (required)"
            style={{ textAlign: "left"}}
                  />
          <Input className='contact-input'
            onChange={handleInputChange}
            name="email"
            placeholder="Email (required)"
            style={{ textAlign: "left" }}
          />
          <ContactButton text={'SUBMIT'}
            disabled={!(formObject.firstname && formObject.lastname && formObject.email)}
            onClick={handleFormSubmit}
          >
            </ContactButton>
              </div>
              </Box>
        
        </div>      
    );
  };

export default InputForm;