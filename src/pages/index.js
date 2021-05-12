import * as React from "react";
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import App from '../components/App';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const sections = [
  { id: 'home', name: 'Home', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

 const IndexPage = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <Layout>
        <SideBar sections={sections} />
        <App />
        <PageFooter />
      </Layout>
    </>
  );
};

export default IndexPage;
