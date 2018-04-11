import styled from 'styled-components';
import media from 'styled-media-query';

import Icon from '../../Icon';

export const ResponsiveList = styled.ul`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 101px;
  left: 0;
  width: 100%;
  box-shadow: 0px 1px 2px ${({theme}) => theme.gray};
  z-index: 1;

  ${media.lessThan('large')`
    ${props => props.visible && 'display: flex;'} 
  `}
`;

export const BarsIcon = styled(Icon)`
  display: none;
  align-self: center;
  cursor: pointer;

  &:active, &:focus {
    opacity: .6;
  }

  ${media.lessThan('large')`
    display: flex;
  `}
`;