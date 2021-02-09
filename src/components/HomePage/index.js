import React from 'react';
import AppBar from '../AppBar'
import Drawer from '../MenuDrawer';
import About from '../About';
import Banner from '../Banner';
import Interest from '../Interest';
import ProjectTable from '../ProjectTable';

import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Banner />
    <About />
    <Interest />
    <ProjectTable />
    </div>
    );
}

export default HomePage;
