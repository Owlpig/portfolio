import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <Fade direction={'up'} duration={1000} delay={300}>
    <header>
      <h2 className='section-title'>{title}</h2>
    </header>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;