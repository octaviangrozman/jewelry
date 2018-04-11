import { css } from 'styled-components';

export const sizes = {
  giant: 1824,
  desktop: 1224,
  bigTablet: 1024,
  tablet: 768,
  phone: 320
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  const accumulatorCopy = accumulator;
  accumulatorCopy[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;
