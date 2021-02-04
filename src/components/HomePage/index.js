import React from 'react';
import AppBar from '../AppBar'
import Drawer from '../Drawer';
import Banner from '../Banner';
import Interest from '../Interest';
import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Drawer />  
    <Banner />
    <Interest />
    </div>
    );
}

export default HomePage;
