import React from 'react';
import data from "../data/about.json";
import './styles.css';

function About() {
  return (
    
    <div className='about-wrap'>
      <div className='about-box'>
        <div className='about-head'>{data.about.header}</div>
        <div className='about-grid'> 
          <div>
            <img className='about-img' src={data.about.img} />
          </div>
          <div className='about-text'>
           {data.about.text} 
          </div>  
        </div>   
      </div>
    </div>
    );
}

export default About;