import React from 'react';
import AppBar from '../AppBar';
// import About from '../About';
import About2 from '../About2';
import Banner from '../Banner';
import Interest from '../Interest';
import ProjectTable from '../ProjectTable';

import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Banner />
    {/* <About /> */}
    <About2 />
    <Interest />
    <ProjectTable />
    </div>
    );
}

export default HomePage;
