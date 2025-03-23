import React from 'react';
import Section from '../components/hero';
import Navbar from '../components/Navbar';
import Services from './Services';

import Contacts from '../components/contacts';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
     
        <Navbar />
        <Section />
        <Services />
      <Projects/>
        <Contacts/>
      
    </>
  );
}

export default Home