import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import PortfolioContext from './../context/context';
import Title from './Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="main" className="four">
      <Container id="contact">
        <Title title="Contact" />
        <Fade direction='up' duration={1000} delay={800}>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;