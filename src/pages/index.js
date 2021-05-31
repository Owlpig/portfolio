import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Home from '../components/Home';
import { Helmet } from 'react-helmet';
import { PortfolioProvider } from '../context/context';
import { headData, heroData } from '../data/data';

// activeClassName - for showing which page you'r eon

const sections = [
  { id: '/', name: 'Home', icon: 'fa-home' },
  { id: 'projects', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

 const IndexPage = () => {
  const [hero, setHero] = useState({});
  const [head, setHead] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setHead({ ...headData })
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
        <PortfolioProvider value={{ hero }}>
          <Home />
        </PortfolioProvider>
        <PageFooter />
      </Layout>
    </>
  );
};

export default IndexPage;
