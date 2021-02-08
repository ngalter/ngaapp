import React from 'react';
import AppBar from '../AppBar'
import Drawer from '../Drawer';
import Banner from '../Banner';
import Interest from '../Interest';
import ProjectTable from '../ProjectTable';

import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Drawer />  
    <Banner />
    <Interest />
    <ProjectTable />
    </div>
    );
}

export default HomePage;
