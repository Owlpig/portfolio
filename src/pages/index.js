import React, { useContext, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Home from '../components/Home';
import { Helmet } from 'react-helmet';
import { PortfolioProvider } from '../context/context';
import { headData, heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const sections = [
  { id: '/', name: 'Home', icon: 'fa-home' },
  { id: 'projects', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

 const IndexPage = () => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{head.title || 'Gatsby Simplefolio'}</title>
        <html lang={head.lang || 'en'} />
        <meta name="description" content={head.description || 'Gatsby Simplefolio'} />
      </Helmet>
      <Layout>
        <SideBar sections={sections} />
        <PortfolioProvider value={{ hero, head, about, projects, contact, footer }}>
          <Home />
        </PortfolioProvider>
        <PageFooter />
      </Layout>
    </>
  );
};

export default IndexPage;
