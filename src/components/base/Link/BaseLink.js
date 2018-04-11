import React from 'react';
import PropTypes from 'prop-types';

const BaseLink = ({ href, className, children, onClick }) =>
  <a
    href={href}
    className={className}
    onClick={onClick}
  >
    {children}
  </a>;

BaseLink.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

BaseLink.defaultProps = {
  href: null,
  className: null,
  onClick: null
};

export default BaseLink;
