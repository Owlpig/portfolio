import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import About from '../components/About';
import { PortfolioProvider } from '../context/context';
import { aboutData } from '../data/data';

const sections = [
  { id: '/', name: 'Home', icon: 'fa-home' },
  { id: 'projects', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

// markup
const AboutPage = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
  }, []);

  return (
    <>
      <Layout>
        <SideBar sections={sections} />
        <PortfolioProvider value={{ about }}>
          <About />
        </PortfolioProvider>
        <PageFooter />
      </Layout>
  </>
  )
}

export default AboutPage


