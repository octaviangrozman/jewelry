import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import ICONS from './ICONS';

const Svg = styled.svg`
    display: inline-block;
    vertical-align: middle;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    ${props => props.onClick && 'cursor: pointer;'};

    &:hover{
      fill-opacity: ${props => (props.hover ? '.6' : 1)};
    }
`;

const Path = styled.path`
  fill: ${props => props.color};
`;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  viewBox: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  size: 20,
  color: '#444',
  viewBox: '0 0 1024 1024',
  onClick: null,
  className: null
};

function Icon(props) {
  const { size, color, name, viewBox, onClick,  className } = props;
  
  const icon = ICONS[name]
  const svg = typeof icon === 'object' ? icon.path : icon
  const _viewBox = typeof icon === 'object' ? icon.viewBox : viewBox

  return (
    <Svg
      size={size}
      viewBox={_viewBox}
      onClick={onClick}
      className={"icon " + className}
    >
      <Path
        color={color}
        d={svg}
      ></Path>
    </Svg>
  );
}


export default Icon;

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired,
//   className: PropTypes.string,
//   size: PropTypes.number,
//   color: PropTypes.string,
//   viewBox: PropTypes.string,
//   onClick: PropTypes.func,
//   fa: PropTypes.bool,
//   hover: PropTypes.bool
// };

// Icon.defaultProps = {
//   size: 20,
//   color: '#444',
//   viewBox: '0 0 1024 1024',
//   onClick: null,
//   fa: false,
//   hover: false,
//   className: null
// };

// function Icon(props) {
//   const { size, color, icon, viewBox, onClick, fa, hover, className } = props;
//   return (
//     <Svg
//       size={size}
//       viewBox={fa ? '0 0 1792 1792' : viewBox}
//       onClick={onClick}
//       hover={hover}
//       className={className}
//     >
//       <Path
//         color={color}
//         d={icon}
//       ></Path>
//     </Svg>
//   );
// }

// export default Icon;
