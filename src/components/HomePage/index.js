import React from 'react';
import AppBar from '../AppBar';
import About from '../About';
import Banner from '../Banner';
import Interest from '../Interest';
import ProjectTable from '../ProjectTable';
import ContactHead from '../ContactHead';
import Auth from '../Auth';

import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Banner />
    <About />
    <Interest />
    <ProjectTable />
    <ContactHead />
    <Auth />
    </div>
    );
}

export default HomePage;
