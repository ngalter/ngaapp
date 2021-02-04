import React from 'react';
import InterestContent from '../InterestContent';
import data from "../data/interest.json";
import './styles.css';

function Interest() {
  return (
    
      <div className='int-wrap'>  
        <div className='int-grid'> 
          {data.interest.map((int, i) => (
                  <InterestContent
                        header={int.header}
                        text={int.text}
                        icon={int.icon}
                    />
                ))}
        </div>   
      </div>
    );
}

export default Interest;