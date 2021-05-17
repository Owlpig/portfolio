import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <header>
      <h2 >{title}</h2>
    </header>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;