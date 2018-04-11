import styled from 'styled-components';
import media from '../../../utils/responsive';

import { Icon } from '../../index';

const StyledIcon = styled(Icon)`
  display: none;
  position: absolute;
  cursor: pointer;
  right: 14;
  top: 17;
  z-index: 50;

  ${media.tablet`
    display: block;
  `};
`;

export default StyledIcon;
