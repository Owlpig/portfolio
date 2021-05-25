import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Projects from '../components/Projects';
import { PortfolioProvider } from '../context/context';
import { headData, heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

const sections = [
  { id: '/', name: 'Home', icon: 'fa-home' },
  { id: 'projects', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

// markup
const ProjectsPage = () => {
  const [hero, setHero] = useState({});
  const [head, setHead] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setHead({ ...headData })
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
       <Layout>
        <SideBar sections={sections} />
        <PortfolioProvider value={{ hero, head, about, projects, contact, footer }}>
          <Projects />
        </PortfolioProvider>
        <PageFooter />
      </Layout>
    </>
  )
}

export default ProjectsPage
