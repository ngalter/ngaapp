import React from 'react';
import './styles.css';
import aboutdata from '../data/banner.json';

function Banner() {

  return (<div id='banner'>
         <div className='bg-bkd'>             
        <div className='banner-header'>
        Nancy Alter  Web Develompent
        </div> 
        <div className="banner-about">
           {aboutdata.banner.about}
         </div>
        </div>
           </div>
        );
}

export default Banner;
