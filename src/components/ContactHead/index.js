import React from "react";

import "./styles.css"
  function ContactHead(props) {
    return (<div id={'contact'} className='c-header-wrapper'> 
      <div className='contact-header'>{props.title}</div>     
      </div>  
    );
  }

export default ContactHead;
