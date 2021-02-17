import React from 'react';
import ContactButton from '../ContactButton';
import data from '../data/banner.json';
import './styles.css';

function Banner() {

  return (<div id='banner'>
         <div className='bg-bkd'>
        <div className='banner-wrap'>
        <div className='banner-container'>                 
        <div className='banner-header'>
                {data.banner.title}<br />{data.banner.text}
        </div>   
          <ContactButton />
        </div>
           </div>
          </div>
    </div>
        );
}

export default Banner;
