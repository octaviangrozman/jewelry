import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

const Avatar = ({ src, className }) =>
  <Img src={src} className={className} alt="avatar" />;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

Avatar.defaultProps = {
  className: null
};

export default Avatar;
