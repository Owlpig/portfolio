import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
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
      <section className="one dark cover">
        <div id="home" className="container">
          <header>
            <h2 className="alt home-title">
              Hi! I'm <strong>Henry™ </strong>
              <br />
              Web developer
            </h2>
            <p className='home-text'>I have made few things check it out.</p>
          </header>
          <footer>
            <Link type="id" to='/projects/' element={'portfolio'} className="cta-btn cta-btn--hero">
              Show me
            </Link>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Header;