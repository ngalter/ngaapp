import React from 'react';
import AppBar from '../AppBar';
import About from '../About';
import Banner from '../Banner';
import Interest from '../Interest';
import ProjectTable from '../ProjectTable';
import ContactForm from '../ContactForm';

import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Banner />
    <About />
    <Interest />
    <ProjectTable />
    <ContactForm />
    </div>
    );
}

export default HomePage;
