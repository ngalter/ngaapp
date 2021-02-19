import React from 'react';
import AppBar from '../AppBar';
import About from '../About';
import Banner from '../Banner';
import Interest from '../Interest';
import ProjectTable from '../ProjectTable';
import ContactHead from '../ContactHead';
import ContactForm from '../ContactForm';
// import Auth from '../Auth';

import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Banner />
    <About />
    <Interest />
    <ProjectTable />
    <ContactHead title={'Contact'}/>
    <ContactForm />
    {/* <Auth /> */}
    </div>
    );
}

export default HomePage;
