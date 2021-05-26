import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Projects from '../components/Projects';
import { PortfolioProvider } from '../context/context';
import { projectsData } from '../data/data';

const sections = [
  { id: '/', name: 'Home', icon: 'fa-home' },
  { id: 'projects', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

// markup
const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsData]);
  }, []);

  return (
    <>
       <Layout>
        <SideBar sections={sections} />
        <PortfolioProvider value={{ projects }}>
          <Projects />
        </PortfolioProvider>
        <PageFooter />
      </Layout>
    </>
  )
}

export default ProjectsPage
