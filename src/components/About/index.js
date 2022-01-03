import React from 'react';
import data from "../data/about.json";
import './styles.css';

function About() {

  return (<div id={'about'} className='about-top'> 
    <div className='about-wrap'>
      <div className='about-box'> 
          <div className='about-text'>
          <span className='about-head'>{data.about.header}</span><br />{data.about.text} 
        </div>   
      </div>
    </div></div>
    );
}

export default About;