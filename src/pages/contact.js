import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Contact from '../components/Contact';
import { PortfolioProvider } from '../context/context';
import { contactData } from '../data/data';

const sections = [
  { id: '/', name: 'Home', icon: 'fa-home' },
  { id: 'projects', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const ContactPage = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    setContact({ ...contactData });
  }, []);

  return (
    <>
      <Layout>
        <SideBar sections={sections} />
        <PortfolioProvider value={{ contact }}>
          <Contact />
        </PortfolioProvider>
        <PageFooter />
      </Layout>
    </>
  )
}

export default ContactPage
