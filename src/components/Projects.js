import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from './../context/context';
import Title from './Title';
import ProjectImg from './ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <>
    <section id="main" className="two">
      <Container id="projects">
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, link, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    direction={isDesktop ? 'left' : 'up'}
                    duration={1000}
                    delay={500}
                    triggerOnce={isMobile ? true : false}
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p className="project-wrapper__text-content">
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          {link && <a classname='project-wrapper__text-content' href={link}> this </a>}
                          {info2}
                        </p>
                        {/* <p className="project-wrapper__text-content">{info2 || ''}</p> */}
                      </div>
                      {(<a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={repo}
                      >
                        Source Code
                      </a>
                      )}

                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={url}
                        >
                          See Live
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    direction={isMobile ? 'up' : 'right'}
                    duration={1000}
                    delay={1000}
                    triggerOnce={isMobile ? true : false}
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
    </>
  );
};

export default Projects;
