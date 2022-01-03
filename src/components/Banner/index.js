import React from 'react';
import data from '../data/banner.json';
import './styles.css';

function Banner() {

  return (<div id='banner'>
         <div className='bg-bkd'>             
        <div className='banner-header'>
        {data.banner.title}{data.banner.text}
        </div> 
         
        </div>
           </div>
        );
}

export default Banner;
