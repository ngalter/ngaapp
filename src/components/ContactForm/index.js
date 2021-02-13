import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import "./styles.css"

const useStyles = makeStyles((theme) => ({
  root: {
      flexgrow: 1,
  },
  menuItem: {
      paddingRight: 8,
      fontSize: 16,
    fontWeight: 400,
  },
  btn: {
    marginTop: '5px',
    fontSize: 13,
    backgroundColor: '#1b75bc',
    '&:hover': {
      backgroundColor: '#262261',
    },
    color: 'white',
    paddingTop: '7px',
    borderRadius: 3,
    zIndex: 100,
  }
}));

const InputForm = () => {
  const classes = useStyles();
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    setFormObject({
      fname: "",
      lname: "",
      email: "",
      message: ""
    })
  }, []);

  function formSubmit() {
    console.log(formObject);
    setFormObject({
      fname: "",
      lname: "",
      email: "",
      message: ""
    });
  }
    
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    formSubmit();
  };

  const postAction = "https://fil1gnol3b.execute-api.us-east-1.amazonaws.com/Testing/feedback";
  const postMethod = 'post';
  const postId = 'contact_form';

  return (
    <div id={'contact'} className='contact-wrapper'>
      <Box className='contact-paper'>
      <div className='contact-header'>Contact</div>
        <form method={postMethod} id={postId} action={postAction}> 
        <img src='../img/about.jpg' alt='nga' className='contact-img' /><br />   
        <div className='contact-grid'>
        <div>
        <label>
          First Name:<br />
          <input
            name="fname"
            placeholder="First Name"
            value={formObject.fname}
            onChange={handleInputChange}
          />
          </label><br />
          <label>
          Last Name:<br />
          <input
            name="lname"
            placeholder="Last Name"
            value={formObject.lname}
            onChange={handleInputChange}
          />
          </label><br />
          <label>
          Email:<br />
          <input
            name="email"
            placeholder="Email"
            value={formObject.email}
            onChange={handleInputChange}
          />
          </label>
        </div> 
        <div>
        <label>
          Your Message:<br />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formObject.message}
            onChange={handleInputChange}
          />
          </label> 
          </div>
            </div>
            <Button className={classes.btn}
            variant='contained'
            disabled={!(formObject.fname && formObject.lname && formObject.email && formObject.message)}
            onClick={handleFormSubmit}
            >SUBMIT
        </Button>
        </form>
        </Box>  
      </div>  
    );
  };

export default InputForm;

