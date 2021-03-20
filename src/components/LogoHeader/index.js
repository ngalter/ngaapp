import React from "react";
import logo from '../img/logo512.png';
import "./styles.css"

function LogoHeader(props) {  
  return (<div className='head-box'> 
      <div className='inner-box'>
        <img src={logo} className='head-img' alt='tags'/>
        <span className='contact-header'>&nbsp;{props.header}</span>
      </div>
      </div>
   
    );
  }

export default LogoHeader;
