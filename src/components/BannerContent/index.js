import React from 'react';
import ContactButton from '../ContactButton';
import './styles.css'

function BannerContent(props) {
    return (<div>
        {props.id === 0
            ?
        <div className='bg-bkd'>
        <div className='banner-wrap'>
        <div className='banner-container'>                 
        <div className='banner-header'>
                {props.title}<br />{props.text}
        </div>   
        <ContactButton />
        </div>
                </div>
                </div>
            :
            ""
        }

    </div>

  );
}

export default BannerContent;