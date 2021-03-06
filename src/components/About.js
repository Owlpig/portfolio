import React, { useContext, useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import AboutImg from './AboutImg';
import PortfolioContext from './../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="main" className="three">
      <Container id="about">
        <Title title="About Me" />
        <Row className="about-wrapper">
          {isDesktop && <Col md={6} sm={12}>
            <Fade direction='left' duration={1000} delay={600}>
              <div className="about-wrapper__image" >
                <AboutImg alt="profile picture" className="image featured" filename={img} />
              </div>
            </Fade>
          </Col>}
          <Col md={6} sm={12}>
            <Fade triggerOnce={isMobile ? true : false} direction={isMobile ? 'up' : 'right'} duration={1000} delay={1000}>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
          {isMobile && <Col md={6} sm={12}>
            <Fade triggerOnce={true} direction='up' duration={1000}>
              <div className="about-wrapper__image" >
                <AboutImg alt="profile picture" className="image featured" filename={img} />
              </div>
            </Fade>
          </Col>}
        </Row>
      </Container>
    </section>
  );
};

export default About;