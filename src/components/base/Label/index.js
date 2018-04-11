import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../../../utils/styles';
import StyledLabel from './StyledLabel';

Label.propTypes = {
  children: PropTypes.node.isRequired,
  red: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool,
  orange: PropTypes.bool,
  darkGray: PropTypes.bool,
  white: PropTypes.bool,
  fluid: PropTypes.bool,
  className: PropTypes.string
};

Label.defaultProps = {
  red: false,
  green: false,
  blue: false,
  orange: false,
  darkGray: false,
  white: false,
  fluid: false,
  className: null
};


function Label(props) {
  const { darkGray, red, green, blue, orange, white, children, fluid, className } = props;
  let color = COLORS.GRAY;
  if (red === true) color = COLORS.RED;
  if (green === true) color = COLORS.GREEN;
  if (blue === true) color = COLORS.BLUE;
  if (orange === true) color = COLORS.ORANGE;
  if (darkGray === true) color = COLORS.DARK_GRAY;
  if (white === true) color = '#fff';

  return (
    <StyledLabel color={color} fluid={fluid} className={className} {...props}> {children} </StyledLabel>
  );
}
export default Label;
