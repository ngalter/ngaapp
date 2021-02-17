import React from "react";

import "./styles.css"
  function ContactHead(props) {
  return (<div id={'contact'}>
      <div className='contact-header'>{props.title}</div>
      <div className='contact-header2'>{props.title2}</div>
          
      </div>  
    );
  }

export default ContactHead;
