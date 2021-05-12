import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div id="main">
          <section id="top" className="one dark cover">
            <div className="container">
              <header>
                <h2 className="alt">
                  Hi! I'm <strong>Henry</strong>
                  <br />
                  Web developer
                </h2>
                <p>I have made few things check it out.</p>
              </header>
              <footer>
                <Link type="id" to='/projects/' element={'portfolio'} className="button">
                  Show me
                </Link>
              </footer>
            </div>
          </section>
        </div>
  );
};

export default Header;